"use client";

import Grid from "@mui/material/GridLegacy";
import { Button, Stack, Typography } from "@jlopvil/mui-kit";
import { Box, Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import CvEditor from "@/components/CvEditor";
import CvPreview from "@/components/CvPreview";
import { CvData, ThemePreset } from "@/lib/types";
import { useI18n } from "@/lib/i18n";

type Props = {
  data: CvData;
  theme: ThemePreset;
  themes: ThemePreset[];
  onChange: (data: CvData) => void;
  onReset: () => void;
  onBack: () => void;
  onNext: () => void;
};

export default function EditorStep(props: Props) {
  const { t } = useI18n();
  const [mobileView, setMobileView] = useState<"edit" | "preview">("edit");
  return (
    <Stack spacing={2} sx={{ minWidth: 0, pb: { xs: 8, lg: 0 } }}>
      <Box
        className="screen-only mobile-view-switcher"
        sx={{
          display: { xs: "block", lg: "none" },
          position: "sticky",
          top: 0,
          zIndex: 4,
          py: 1,
          bgcolor: "rgba(247,243,248,.88)",
          backdropFilter: "blur(14px)",
        }}
      >
        <ToggleButtonGroup
          exclusive
          fullWidth
          size="small"
          value={mobileView}
          onChange={(_, value) => value && setMobileView(value)}
          aria-label={t.editorViewLabel}
        >
          <ToggleButton value="edit">{t.editor}</ToggleButton>
          <ToggleButton value="preview">{t.preview}</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Grid
        container
        spacing={{ xs: 0, lg: 3 }}
        alignItems="flex-start"
        className="layout-grid"
      >
        <Grid
          item
          xs={12}
          lg={4}
          className="screen-only"
          sx={{
            display: {
              xs: mobileView === "edit" ? "block" : "none",
              lg: "block",
            },
            minWidth: 0,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 1.25, sm: 2 },
              borderRadius: 3,
              border: "1px solid",
              borderColor: "divider",
              position: { lg: "sticky" },
              top: 16,
              maxHeight: { lg: "calc(100vh - 32px)" },
              overflow: { lg: "auto" },
              minWidth: 0,
              bgcolor: "rgba(255,253,253,.9)",
              boxShadow: "0 20px 50px rgba(73,22,59,.10)",
              backdropFilter: "blur(16px)",
            }}
          >
            <Typography variant="h6" fontWeight={900} gutterBottom>
              {t.editor}
            </Typography>
            <CvEditor {...props} />
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          lg={8}
          className="print-area"
          sx={{
            display: {
              xs: mobileView === "preview" ? "block" : "none",
              lg: "block",
            },
            minWidth: 0,
          }}
        >
          <Box className="screen-only" sx={{ mb: 1 }}>
            <Typography variant="h6" fontWeight={900}>
              {t.preview}
            </Typography>
          </Box>
          <CvPreview data={props.data} theme={props.theme} />
        </Grid>
      </Grid>
      <Stack
        className="screen-only editor-bottom-nav"
        direction="row"
        spacing={1.5}
        justifyContent="space-between"
        sx={{
          position: "sticky",
          bottom: 0,
          bgcolor: "rgba(255,253,253,.92)",
          backdropFilter: "blur(16px)",
          px: { xs: 1, sm: 1.5 },
          pt: 1.25,
          pb: "calc(12px + env(safe-area-inset-bottom))",
          zIndex: 5,
          borderTop: "1px solid",
          borderColor: "divider",
          borderRadius: { sm: 2.5 },
          boxShadow: "0 -10px 30px rgba(73,22,59,.07)",
        }}
      >
        <Button
          fullWidth
          variant="outlined"
          onClick={props.onBack}
          sx={{ minHeight: 44 }}
        >
          {t.back}
        </Button>
        <Button
          fullWidth
          variant="contained"
          onClick={props.onNext}
          sx={{ minHeight: 44 }}
        >
          {t.next}
        </Button>
      </Stack>
    </Stack>
  );
}
