"use client";

import { Stack, Typography } from "@jlopvil/mui-kit";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useI18n, type AppLanguage } from "@/lib/i18n";

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
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <Select
          value={language}
          onChange={(event) => setLanguage(event.target.value as AppLanguage)}
          inputProps={{ "aria-label": t.appLanguage }}
        >
          <MenuItem value="es">{t.spanish}</MenuItem>
          <MenuItem value="en">{t.english}</MenuItem>
          <MenuItem value="ca">{t.catalan}</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}
