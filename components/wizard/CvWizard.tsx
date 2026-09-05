"use client";

import { Container, Stack } from "@jlopvil/mui-kit";
import { Box, CircularProgress } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { CvData, Language } from "@/lib/types";
import { themePresets } from "@/lib/sampleData";
import {
  createEmptyCv,
  createSampleCv,
  CV_STORAGE_KEY,
  exportCvData,
  parseCvFile,
} from "@/lib/cvData";
import EditorStep from "./EditorStep";
import ExportStep from "./ExportStep";
import SetupStep, { InitializationMode } from "./SetupStep";
import { STEPS, WizardStep } from "./WizardStepper";
import WizardHeader from "./WizardHeader";
import { useI18n } from "@/lib/i18n";
import { LOCAL_DATA_CLEARED_EVENT } from "@/lib/localData";
import { templatePresets } from "@/lib/templates";
import TemplateStep from "./TemplateStep";

export default function CvWizard() {
  const [step, setStep] = useState<WizardStep>(STEPS.SETUP);
  const [data, setData] = useState<CvData | null>(null);
  const [hasSavedCv, setHasSavedCv] = useState(false);
  const [language, setLanguage] = useState<Language>("es");
  const [mode, setMode] = useState<InitializationMode | null>(null);
  const [imported, setImported] = useState<CvData | null>(null);
  const [importName, setImportName] = useState("");
  const [error, setError] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const stored = window.localStorage.getItem(CV_STORAGE_KEY);
    if (stored) {
      try {
        const saved = parseCvFile(JSON.parse(stored));
        setData(saved);
        setLanguage(saved.language);
        setMode("resume");
        setHasSavedCv(true);
      } catch {
        window.localStorage.removeItem(CV_STORAGE_KEY);
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    const handleLocalDataCleared = () => {
      setStep(STEPS.SETUP);
      setData(null);
      setHasSavedCv(false);
      setLanguage("es");
      setMode(null);
      setImported(null);
      setImportName("");
      setError("");
      setInitialized(false);
    };
    window.addEventListener(LOCAL_DATA_CLEARED_EVENT, handleLocalDataCleared);
    return () =>
      window.removeEventListener(
        LOCAL_DATA_CLEARED_EVENT,
        handleLocalDataCleared,
      );
  }, []);

  useEffect(() => {
    if (hydrated && initialized && data)
      window.localStorage.setItem(CV_STORAGE_KEY, JSON.stringify(data));
  }, [data, hydrated, initialized]);

  const theme = useMemo(
    () =>
      themePresets.find((item) => item.id === data?.themeId) ?? themePresets[0],
    [data?.themeId],
  );
  const go = (next: WizardStep) => {
    setStep(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const continueToEditor = () => {
    if (!mode) return;
    const replacesCurrent = initialized && mode !== "resume";
    if (replacesCurrent && !window.confirm(t.replaceCurrent)) return;
    let next = data;
    if (mode === "empty") next = createEmptyCv(language);
    if (mode === "sample") next = createSampleCv(language);
    if (mode === "import") next = imported ? { ...imported, language } : null;
    if (mode === "resume" && next) next = { ...next, language };
    if (!next) return;
    setData(next);
    setInitialized(true);
    setHasSavedCv(true);
    go(STEPS.TEMPLATE);
  };

  const importFile = async (file: File) => {
    setError("");
    try {
      return parseCvFile(JSON.parse(await file.text()));
    } catch (reason) {
      const rawMessage = reason instanceof Error ? reason.message : "";
      const message = rawMessage.includes("versión")
        ? t.unsupportedFile
        : rawMessage.includes("válidos")
          ? t.invalidFile
          : t.readError;
      setError(message);
      throw reason;
    }
  };

  if (!hydrated)
    return (
      <Box sx={{ minHeight: "70vh", display: "grid", placeItems: "center" }}>
        <CircularProgress />
      </Box>
    );
  return (
    <Box className="app-shell">
      <Container maxWidth="xl" sx={{ px: { xs: 1.5, sm: 2.5, md: 3 } }}>
        <Stack
          className="wizard-content"
          spacing={{ xs: 1.5, md: 2.5 }}
          sx={{ position: "relative", zIndex: 1, pt: { xs: 1.5, md: 2.5 } }}
        >
          <WizardHeader activeStep={step} />
          {step === STEPS.SETUP && (
            <SetupStep
              language={language}
              mode={mode}
              hasSavedCv={hasSavedCv}
              importName={importName}
              error={error}
              onLanguageChange={setLanguage}
              onModeChange={(next) => {
                setMode(next);
                setError("");
              }}
              onImport={importFile}
              onImported={(next, name) => {
                setImported(next);
                setImportName(name);
                setLanguage(next.language);
                setMode("import");
                setError("");
              }}
              onContinue={continueToEditor}
            />
          )}
          {data && step === STEPS.TEMPLATE && (
            <TemplateStep
              templateId={data.templateId}
              templates={templatePresets}
              onChange={(templateId) => setData({ ...data, templateId })}
              onBack={() => go(STEPS.SETUP)}
              onNext={() => go(STEPS.EDITOR)}
            />
          )}
          {data && step === STEPS.EDITOR && (
            <EditorStep
              data={data}
              theme={theme}
              themes={themePresets}
              onChange={setData}
              onReset={() => {
                if (window.confirm(t.resetConfirm))
                  setData({
                    ...createSampleCv(data.language),
                    templateId: data.templateId,
                  });
              }}
              onBack={() => go(STEPS.TEMPLATE)}
              onNext={() => go(STEPS.EXPORT)}
            />
          )}
          {data && step === STEPS.EXPORT && (
            <ExportStep
              data={data}
              theme={theme}
              onBack={() => go(STEPS.EDITOR)}
              onExportData={() => exportCvData(data)}
            />
          )}
        </Stack>
      </Container>
    </Box>
  );
}
