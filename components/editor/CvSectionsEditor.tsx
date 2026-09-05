"use client";

import { Stack, Typography } from "@jlopvil/mui-kit";
import { Box } from "@mui/material";
import CvSectionAccordion from "./CvSectionAccordion";
import { useI18n } from "@/lib/i18n";
import type { CvSection } from "@/lib/types";

type Props = {
  sections: CvSection[];
  pageCount: number;
  onPatch: (id: string, updater: (section: CvSection) => CvSection) => void;
  onRemove: (id: string) => void;
};

export default function CvSectionsEditor({
  sections,
  pageCount,
  onPatch,
  onRemove,
}: Props) {
  const { t } = useI18n();
  return (
    <Box>
      <Typography variant="h6" fontWeight={900} gutterBottom>
        {t.sections}
      </Typography>
      <Stack spacing={1.25}>
        {sections.map((section) => (
          <CvSectionAccordion
            key={section.id}
            section={section}
            pageCount={pageCount}
            onPatch={(updater) => onPatch(section.id, updater)}
            onRemove={() => onRemove(section.id)}
          />
        ))}
      </Stack>
    </Box>
  );
}
