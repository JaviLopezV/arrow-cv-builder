"use client";
import { LanguageSelector, Stack, Typography } from "@jlopvil/mui-kit";
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
      <LanguageSelector<AppLanguage>
        value={language}
        label={t.appLanguage}
        onChange={setLanguage}
        options={[
          { value: "es", label: t.spanish },
          { value: "en", label: t.english },
          { value: "ca", label: t.catalan },
        ]}
      />
    </Stack>
  );
}
