"use client";

import { Alert, Button, Stack, Typography } from "@jlopvil/mui-kit";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import { Box } from "@mui/material";
import CvPreview from "@/components/CvPreview";
import { CvData, ThemePreset } from "@/lib/types";
import { useI18n } from "@/lib/i18n";

type Props = {
  data: CvData;
  theme: ThemePreset;
  onBack: () => void;
  onExportData: () => void;
};

export default function ExportStep(props: Props) {
  const { t } = useI18n();
  const warnings = [
    !props.data.personal.name.trim() && t.missingName,
    !props.data.sections.some(
      (section) =>
        section.kind === "experience" &&
        section.enabled &&
        section.items?.length,
    ) && t.missingExperience,
  ].filter(Boolean) as string[];
  return (
    <Stack
      className="export-step"
      spacing={2}
      sx={{ maxWidth: 1050, mx: "auto", pb: 5 }}
    >
      <Box
        className="screen-only"
        sx={{
          p: { xs: 2, sm: 2.5 },
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "rgba(255,253,253,.82)",
          boxShadow: "0 14px 36px rgba(73,22,59,.08)",
          backdropFilter: "blur(14px)",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={950}
          sx={{ letterSpacing: "-.035em" }}
        >
          {t.reviewExport}
        </Typography>
        <Typography color="text.secondary">{t.reviewDetail}</Typography>
      </Box>
      {!!warnings.length && (
        <Alert severity="warning" className="screen-only">
          {warnings.join(" ")}
        </Alert>
      )}
      <Box className="print-area export-preview">
        <CvPreview data={props.data} theme={props.theme} />
      </Box>
      <Stack
        className="screen-only"
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        justifyContent="space-between"
        sx={{
          p: { xs: 1.5, sm: 2 },
          borderRadius: 3,
          bgcolor: "rgba(255,253,253,.86)",
          border: "1px solid",
          borderColor: "divider",
          boxShadow: "0 14px 36px rgba(73,22,59,.08)",
        }}
      >
        <Button
          fullWidth
          variant="outlined"
          onClick={props.onBack}
          sx={{ minHeight: 44, maxWidth: { sm: 220 } }}
        >
          {t.backEdit}
        </Button>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          sx={{ width: { xs: "100%", sm: "auto" } }}
        >
          <Button
            fullWidth
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={props.onExportData}
            sx={{ minHeight: 44 }}
          >
            {t.exportData}
          </Button>
          <Button
            fullWidth
            type="button"
            variant="contained"
            size="large"
            startIcon={<PrintIcon />}
            onClick={() => window.print()}
            sx={{ minHeight: 44 }}
          >
            {t.printPdf}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
