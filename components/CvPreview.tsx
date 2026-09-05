"use client";

import { CvData, CvSection, ThemePreset } from "@/lib/types";
import { useEffect, useRef, useState } from "react";
import { MAGNA_TEMPLATE_ID } from "@/lib/templates";
import Image from "next/image";

type Props = { data: CvData; theme: ThemePreset };

function SectionRenderer({ section }: { section: CvSection }) {
  if (!section.enabled) return null;

  return (
    <section className="cv-section">
      <h2 className="cv-section-title">{section.title}</h2>

      {section.body?.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      {section.chipGroups?.map((group) => (
        <div className="cv-side-block" key={group.label}>
          <div className="cv-side-label">{group.label}</div>
          <div className="cv-chips">
            {group.chips.map((chip) => (
              <span className="cv-chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </div>
      ))}

      {section.cards?.map((card) => (
        <div className="cv-side-block" key={`${card.title}-${card.text}`}>
          <div className="cv-project-title">{card.title}</div>
          <div className="cv-project-text">{card.text}</div>
        </div>
      ))}

      {section.items?.map((item) => (
        <article className="cv-item" key={`${item.title}-${item.date}`}>
          <div className="cv-item-header">
            <div>
              <div className="cv-company">{item.title}</div>
              {item.subtitle && (
                <div className="cv-position">{item.subtitle}</div>
              )}
            </div>
            {item.date && (
              <div className="cv-date">
                {item.date.split("\n").map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            )}
          </div>
          {item.description && <p>{item.description}</p>}
          {!!item.bullets?.length && (
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </section>
  );
}

function ContactLinks({
  data,
  withTitle = false,
}: {
  data: CvData;
  withTitle?: boolean;
}) {
  const links = [
    data.personal.email && {
      href: `mailto:${data.personal.email}`,
      label: data.personal.email,
    },
    data.personal.phone && {
      href: `tel:${data.personal.phone}`,
      label: data.personal.phone,
    },
    data.personal.github && {
      href: `https://${data.personal.github}`,
      label: data.personal.github,
    },
    data.personal.linkedin && {
      href: `https://${data.personal.linkedin}`,
      label: data.personal.linkedin,
    },
  ].filter(Boolean) as Array<{ href: string; label: string }>;

  if (!links.length) return null;
  return (
    <div className={withTitle ? "magna-contact" : "cv-header-links"}>
      {withTitle && <h2>{data.language === "es" ? "Contacto" : "Contact"}</h2>}
      {links.map((link) => (
        <div key={link.href}>
          <a href={link.href}>{link.label}</a>
        </div>
      ))}
    </div>
  );
}

function ClassicPage({ data, page }: { data: CvData; page: number }) {
  const sidebar = data.sections.filter(
    (section) => section.page === page && section.column === "sidebar",
  );
  const main = data.sections.filter(
    (section) => section.page === page && section.column === "main",
  );
  return (
    <div className="cv-page">
      <header
        className={`cv-header${data.personal.showPhoto && data.personal.photo ? " cv-header--with-photo" : ""}`}
      >
        {data.personal.showPhoto && data.personal.photo && (
          <Image
            className="cv-photo cv-photo--classic"
            src={data.personal.photo}
            alt=""
            width={91}
            height={91}
            unoptimized
          />
        )}
        <div>
          <h1 className="cv-name">{data.personal.name}</h1>
          <div className="cv-role">{data.personal.role}</div>
          <div className="cv-tags">
            {data.personal.tags.map((tag) => (
              <span className="cv-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <ContactLinks data={data} />
      </header>
      <main className="cv-content">
        <aside className="cv-sidebar">
          {sidebar.map((section) => (
            <SectionRenderer key={section.id} section={section} />
          ))}
        </aside>
        <section className="cv-main">
          {main.map((section) => (
            <SectionRenderer key={section.id} section={section} />
          ))}
        </section>
      </main>
    </div>
  );
}

function MagnaPage({ data, page }: { data: CvData; page: number }) {
  const sections = data.sections.filter((section) => section.page === page);
  const leftKinds = new Set(["profile", "strengths", "languages", "chips"]);
  const left = sections.filter((section) => leftKinds.has(section.kind));
  const right = sections.filter((section) => !leftKinds.has(section.kind));
  const initials = data.personal.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <div className="cv-page cv-page--magna">
      <aside className="magna-left">
        {page === 1 && (
          <>
            {data.personal.showPhoto &&
              (data.personal.photo ? (
                <Image
                  className="magna-portrait magna-portrait--photo"
                  src={data.personal.photo}
                  alt=""
                  width={163}
                  height={215}
                  unoptimized
                />
              ) : (
                <div className="magna-portrait" aria-hidden="true">
                  {initials}
                </div>
              ))}
            <h1 className="magna-name">{data.personal.name}</h1>
            <div className="magna-rule" />
            <div className="magna-role">{data.personal.role}</div>
          </>
        )}
        {left.map((section) => (
          <SectionRenderer key={section.id} section={section} />
        ))}
      </aside>
      <main className="magna-right">
        {right.map((section) => (
          <SectionRenderer key={section.id} section={section} />
        ))}
        {page === 1 && <ContactLinks data={data} withTitle />}
      </main>
    </div>
  );
}

export default function CvPreview({ data, theme }: Props) {
  const pages = Array.from({ length: data.pageCount }, (_, index) => index + 1);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const updateScale = () => {
      // 210 mm at the CSS reference pixel density (96 dpi).
      const a4Width = (210 / 25.4) * 96;
      setScale(Math.min(1, viewport.clientWidth / a4Width));
    };
    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={viewportRef}
      className="cv-preview-viewport"
      data-template={data.templateId}
      style={{
        ["--purple" as string]: theme.primary,
        ["--magenta" as string]: theme.secondary,
        ["--text" as string]: theme.text,
        ["--muted" as string]: theme.muted,
        ["--soft" as string]: theme.soft,
        ["--soft-border" as string]: theme.border,
        ["--line" as string]: theme.line,
      }}
    >
      <div
        className="cv-preview"
        style={{ ["--preview-scale" as string]: scale }}
      >
        {pages.map((page) => (
          <div className="cv-page-frame" key={page}>
            {data.templateId === MAGNA_TEMPLATE_ID ? (
              <MagnaPage data={data} page={page} />
            ) : (
              <ClassicPage data={data} page={page} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
