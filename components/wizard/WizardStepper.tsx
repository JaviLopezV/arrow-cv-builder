"use client";

import { Typography } from "@jlopvil/mui-kit";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { useI18n } from "@/lib/i18n";

export const STEPS = { SETUP: 0, TEMPLATE: 1, EDITOR: 2, EXPORT: 3 } as const;
export type WizardStep = (typeof STEPS)[keyof typeof STEPS];

export default function WizardStepper({
  activeStep,
}: {
  activeStep: WizardStep;
}) {
  const { t } = useI18n();
  const stepLabels = [t.setup, t.template, t.edit, t.export];
  return (
    <>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          textAlign: "center",
          my: 1.25,
          px: 1.5,
          py: 1,
          borderRadius: 2,
          bgcolor: "rgba(112,36,87,.065)",
        }}
      >
        <Typography fontWeight={850} color="primary.dark" aria-live="polite">
          {t.step} {activeStep + 1} {t.of} {stepLabels.length} ·{" "}
          {stepLabels[activeStep]}
        </Typography>
      </Box>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{
          display: { xs: "none", sm: "flex" },
          width: "100%",
          maxWidth: 900,
          mx: "auto",
          py: { sm: 2, md: 2.5 },
          "& .MuiStepLabel-label": { fontWeight: 700, mt: 0.75 },
          "& .MuiStepLabel-label.Mui-active, & .MuiStepLabel-label.Mui-completed":
            { color: "primary.dark", fontWeight: 850 },
          "& .MuiStepIcon-root": { color: "rgba(112,36,87,.18)" },
          "& .MuiStepIcon-root.Mui-active, & .MuiStepIcon-root.Mui-completed": {
            color: "primary.main",
          },
          "& .MuiStepConnector-line": {
            borderColor: "rgba(112,36,87,.16)",
            borderTopWidth: 2,
          },
        }}
      >
        {stepLabels.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
}
