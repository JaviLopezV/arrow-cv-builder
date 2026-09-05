"use client";

import { Stack, Typography } from "@jlopvil/mui-kit";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useI18n } from "@/lib/i18n";

export default function AppLanguageSwitcher() {
  const { language, setLanguage, t } = useI18n();
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="flex-end"
      sx={{ py: 1, minWidth: 0 }}
    >
      <Typography
        variant="body2"
        fontWeight={700}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        {t.appLanguage}
      </Typography>
      <ToggleButtonGroup
        exclusive
        size="small"
        value={language}
        onChange={(_, next) => next && setLanguage(next)}
        aria-label={t.appLanguage}
      >
        <ToggleButton value="es" aria-label="Español">
          ES
        </ToggleButton>
        <ToggleButton value="en" aria-label="English">
          EN
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
