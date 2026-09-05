"use client";

import { Stack } from "@jlopvil/mui-kit";
import { Divider } from "@mui/material";
import CvEditorToolbar from "@/components/editor/CvEditorToolbar";
import CvSectionsEditor from "@/components/editor/CvSectionsEditor";
import PersonalDataEditor from "@/components/editor/PersonalDataEditor";
import { useI18n } from "@/lib/i18n";
import type { CvData, CvSection, ThemePreset } from "@/lib/types";

type Props = {
  data: CvData;
  themes: ThemePreset[];
  onChange: (next: CvData) => void;
  onReset: () => void;
};

export default function CvEditor({ data, themes, onChange, onReset }: Props) {
  const { t } = useI18n();
  const patch = (partial: Partial<CvData>) => onChange({ ...data, ...partial });
  const patchPersonal = <Field extends keyof CvData["personal"]>(
    field: Field,
    value: CvData["personal"][Field],
  ) => onChange({ ...data, personal: { ...data.personal, [field]: value } });
  const patchSection = (
    id: string,
    updater: (section: CvSection) => CvSection,
  ) =>
    onChange({
      ...data,
      sections: data.sections.map((section) =>
        section.id === id ? updater(section) : section,
      ),
    });

  const addCustomSection = () => {
    const spanish = data.language === "es";
    onChange({
      ...data,
      sections: [
        ...data.sections,
        {
          id: `custom-${Date.now()}`,
          kind: "custom",
          title: spanish ? "Nueva sección" : "New section",
          column: "main",
          page: data.pageCount,
          enabled: true,
          body: [
            spanish
              ? "Escribe aquí el contenido de esta sección."
              : "Write the content of this section here.",
          ],
        },
      ],
    });
  };

  const removeLastPage = () => {
    const lastPage = data.pageCount;
    const hasContent = data.sections.some(
      (section) => section.page === lastPage,
    );
    if (hasContent && !window.confirm(t.pageHasSections(lastPage))) return;
    onChange({
      ...data,
      pageCount: lastPage - 1,
      sections: data.sections.filter((section) => section.page !== lastPage),
    });
  };

  return (
    <Stack spacing={2} className="screen-only">
      <CvEditorToolbar
        themeId={data.themeId}
        themes={themes}
        pageCount={data.pageCount}
        onThemeChange={(themeId) => patch({ themeId })}
        onAddPage={() => patch({ pageCount: data.pageCount + 1 })}
        onRemoveLastPage={removeLastPage}
        onAddSection={addCustomSection}
        onReset={onReset}
      />
      <PersonalDataEditor
        personal={data.personal}
        onChange={patchPersonal}
        onPhotoChange={(photo, showPhoto) =>
          onChange({
            ...data,
            personal: { ...data.personal, photo, showPhoto },
          })
        }
      />
      <CvSectionsEditor
        sections={data.sections}
        pageCount={data.pageCount}
        onPatch={patchSection}
        onRemove={(id) =>
          patch({
            sections: data.sections.filter((section) => section.id !== id),
          })
        }
      />
      <Divider />
    </Stack>
  );
}
