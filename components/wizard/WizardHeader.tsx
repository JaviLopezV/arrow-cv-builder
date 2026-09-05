"use client";

import { Stack, Typography } from "@jlopvil/mui-kit";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import { Box, Paper } from "@mui/material";
import AppLanguageSwitcher from "@/components/AppLanguageSwitcher";
import WizardStepper, { type WizardStep } from "./WizardStepper";

export default function WizardHeader({
  activeStep,
}: {
  activeStep: WizardStep;
}) {
  return (
    <Paper
      className="screen-only app-topbar"
      elevation={0}
      sx={{
        px: { xs: 1.5, sm: 2.5 },
        pt: 1,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "rgba(255,253,253,.78)",
        boxShadow: "0 12px 36px rgba(65,25,55,.08)",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={1.5}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.25}
          sx={{ minWidth: 0 }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              flexShrink: 0,
              display: "grid",
              placeItems: "center",
              borderRadius: 2.25,
              color: "white",
              background: "linear-gradient(135deg, #702457, #d43f78)",
              boxShadow: "0 8px 20px rgba(112,36,87,.24)",
            }}
          >
            <AutoAwesomeRoundedIcon fontSize="small" />
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Typography
              fontWeight={950}
              sx={{ lineHeight: 1.05, letterSpacing: "-.02em" }}
            >
              Next CV Builder
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Create · refine · export
            </Typography>
          </Box>
        </Stack>
        <AppLanguageSwitcher />
      </Stack>
      <WizardStepper activeStep={activeStep} />
    </Paper>
  );
}
