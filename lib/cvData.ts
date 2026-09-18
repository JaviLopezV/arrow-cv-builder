import { CvData, CvSection, Language } from "./types";
import { sampleEn, sampleEs, themePresets } from "./sampleData";
import { sampleCa } from "./sampleCa";
import { DEFAULT_TEMPLATE_ID, templatePresets } from "./templates";
export { CV_STORAGE_KEY } from "./localData";

export const CV_SCHEMA_VERSION = 3;
export type CvFile = {
  schemaVersion: number;
  cvData: CvData;
};

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

export function createSampleCv(language: Language): CvData {
  return clone(
    language === "es" ? sampleEs : language === "ca" ? sampleCa : sampleEn,
  );
}

export function createEmptyCv(language: Language): CvData {
  const sample = createSampleCv(language);
  const emptySection = (section: CvSection): CvSection => ({
    ...section,
    body: section.body ? [] : undefined,
    chipGroups: section.chipGroups ? [] : undefined,
    cards: section.cards ? [] : undefined,
    items: section.items ? [] : undefined,
  });

  return {
    language,
    pageCount: 1,
    templateId: DEFAULT_TEMPLATE_ID,
    themeId: themePresets[0].id,
    personal: {
      name: "",
      role: "",
      tags: [],
      photo: "",
      showPhoto: false,
      email: "",
      phone: "",
      github: "",
      linkedin: "",
    },
    // Keeping the standard sections makes the empty CV immediately usable.
    sections: sample.sections.map(emptySection),
  };
}

function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) && value.every((item) => typeof item === "string")
  );
}

function isCvData(value: unknown): value is CvData {
  if (!value || typeof value !== "object") return false;
  const data = value as Partial<CvData>;
  const personal = data.personal as Partial<CvData["personal"]> | undefined;
  if (
    (data.language !== "es" &&
      data.language !== "en" &&
      data.language !== "ca") ||
    !Number.isInteger(data.pageCount) ||
    Number(data.pageCount) < 1 ||
    (data.templateId !== undefined && typeof data.templateId !== "string") ||
    typeof data.themeId !== "string" ||
    !personal ||
    typeof personal.name !== "string" ||
    typeof personal.role !== "string" ||
    !isStringArray(personal.tags) ||
    (personal.photo !== undefined && typeof personal.photo !== "string") ||
    (personal.showPhoto !== undefined &&
      typeof personal.showPhoto !== "boolean") ||
    typeof personal.email !== "string" ||
    typeof personal.phone !== "string" ||
    typeof personal.github !== "string" ||
    typeof personal.linkedin !== "string" ||
    !Array.isArray(data.sections)
  )
    return false;

  return data.sections.every((section) => {
    if (!section || typeof section !== "object") return false;
    const candidate = section as CvSection;
    return (
      typeof candidate.id === "string" &&
      typeof candidate.title === "string" &&
      typeof candidate.kind === "string" &&
      (candidate.column === "sidebar" || candidate.column === "main") &&
      Number.isInteger(candidate.page) &&
      candidate.page >= 1 &&
      typeof candidate.enabled === "boolean" &&
      (!candidate.body || isStringArray(candidate.body)) &&
      (!candidate.chipGroups || Array.isArray(candidate.chipGroups)) &&
      (!candidate.cards || Array.isArray(candidate.cards)) &&
      (!candidate.items || Array.isArray(candidate.items))
    );
  });
}

/** Accepts the current envelope and the unversioned format used by older builds. */
export function parseCvFile(value: unknown): CvData {
  let candidate = value;
  if (value && typeof value === "object" && "schemaVersion" in value) {
    const file = value as Partial<CvFile>;
    if (
      typeof file.schemaVersion !== "number" ||
      file.schemaVersion > CV_SCHEMA_VERSION
    ) {
      throw new Error(
        "El archivo usa una versión que esta aplicación todavía no admite.",
      );
    }
    candidate = file.cvData;
  }
  if (!isCvData(candidate)) {
    throw new Error("El archivo no contiene datos de CV válidos.");
  }
  const migrated = clone(candidate);
  if (
    !migrated.templateId ||
    !templatePresets.some((template) => template.id === migrated.templateId)
  ) {
    migrated.templateId = DEFAULT_TEMPLATE_ID;
  }
  migrated.personal.photo ??= "";
  migrated.personal.showPhoto ??= migrated.templateId === "magna";
  migrated.pageCount = Math.max(
    migrated.pageCount,
    ...migrated.sections.map((section) => section.page),
  );
  if (!themePresets.some((theme) => theme.id === migrated.themeId)) {
    migrated.themeId = themePresets[0].id;
  }
  return migrated;
}

export function exportCvData(data: CvData) {
  const file: CvFile = {
    schemaVersion: CV_SCHEMA_VERSION,
    cvData: clone(data),
  };
  const blob = new Blob([JSON.stringify(file, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  const safeName =
    data.personal.name
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "mi-cv";
  anchor.href = url;
  anchor.download = `${safeName}-cv.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}
