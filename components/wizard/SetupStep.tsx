"use client";

import { Alert, Button, Link, Stack, Typography } from "@jlopvil/mui-kit";
import { Box, Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import NextLink from "next/link";
import { ChangeEvent, useRef } from "react";
import { CvData, Language } from "@/lib/types";
import { useI18n } from "@/lib/i18n";
import SetupStartOptions from "./SetupStartOptions";

export type InitializationMode = "resume" | "empty" | "sample" | "import";

type Props = {
  language: Language;
  mode: InitializationMode | null;
  hasSavedCv: boolean;
  importName?: string;
  error?: string;
  onLanguageChange: (language: Language) => void;
  onModeChange: (mode: InitializationMode) => void;
  onImport: (file: File) => Promise<CvData>;
  onImported: (data: CvData, name: string) => void;
  onContinue: () => void;
};

export default function SetupStep(props: Props) {
  const { t } = useI18n();
  const inputRef = useRef<HTMLInputElement>(null);
  const options: Array<{
    mode: InitializationMode;
    title: string;
    detail: string;
  }> = [
    ...(props.hasSavedCv
      ? [
          {
            mode: "resume" as const,
            title: t.resume,
            detail: t.resumeDetail,
          },
        ]
      : []),
    {
      mode: "sample",
      title: t.sample,
      detail: t.sampleDetail,
    },
    {
      mode: "empty",
      title: t.empty,
      detail: t.emptyDetail,
    },
    {
      mode: "import",
      title: t.importCv,
      detail: props.importName || t.importDetail,
    },
  ];

  const handleFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const data = await props.onImport(file);
      props.onImported(data, file.name);
    } catch {
      // The parent keeps and displays the friendly validation error.
    } finally {
      event.target.value = "";
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: 900,
        mx: "auto",
        mb: 3,
        p: { xs: 2, sm: 3.5, md: 4.5 },
        borderRadius: { xs: 2.5, sm: 4 },
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "rgba(255,253,253,.88)",
        boxShadow: "0 28px 70px rgba(73,22,59,.10)",
        backdropFilter: "blur(16px)",
      }}
    >
      <Stack spacing={3}>
        <Alert
          severity="info"
          sx={{ borderRadius: 2.5, border: "1px solid rgba(2,136,209,.14)" }}
        >
          {t.privacyNotice}{" "}
          <Link component={NextLink} href="/privacy" fontWeight={700}>
            {t.learnMore}
          </Link>
        </Alert>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            fontWeight={950}
            sx={{
              fontSize: { xs: "2rem", sm: "2.7rem" },
              letterSpacing: "-.045em",
              lineHeight: 1.05,
            }}
          >
            {t.createCv}
          </Typography>
          <Typography color="text.secondary">
            {t.step} 1 {t.of} 4 · {t.setupIntro}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            maxWidth: 440,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" fontWeight={850} gutterBottom>
            {t.cvLanguage}
          </Typography>
          <ToggleButtonGroup
            exclusive
            fullWidth
            value={props.language}
            onChange={(_, value) => value && props.onLanguageChange(value)}
          >
            <ToggleButton value="es">{t.spanish}</ToggleButton>
            <ToggleButton value="en">{t.english}</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <SetupStartOptions
          options={options}
          mode={props.mode}
          language={props.language}
          inputRef={inputRef}
          onModeChange={props.onModeChange}
          onFileChange={handleFile}
        />
        {props.error && <Alert severity="error">{props.error}</Alert>}
        <Stack direction="row" justifyContent="center">
          <Button
            fullWidth
            variant="contained"
            size="large"
            disabled={
              !props.mode || (props.mode === "import" && !props.importName)
            }
            onClick={props.onContinue}
            sx={{ maxWidth: { sm: 280 }, minHeight: 44 }}
          >
            {t.continueTemplate}
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}
