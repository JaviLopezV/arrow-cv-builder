"use client";

import { Alert, Container, Link, Stack, Typography } from "@jlopvil/mui-kit";
import NextLink from "next/link";
import { Box, Divider, Paper } from "@mui/material";
import AppLanguageSwitcher from "@/components/AppLanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import { PRIVACY_LAST_UPDATED, privacyCopy } from "@/lib/privacy";

export default function PrivacyPageContent({
  contactEmail,
}: {
  contactEmail?: string;
}) {
  const { language } = useI18n();
  const copy = privacyCopy[language];
  const formattedDate = new Intl.DateTimeFormat(
    language === "es" ? "es-ES" : "en-GB",
    { dateStyle: "long", timeZone: "UTC" },
  ).format(new Date(`${PRIVACY_LAST_UPDATED}T00:00:00Z`));
  const sections = [
    [copy.infoTitle, [copy.infoCv, copy.infoTechnical, copy.infoAnalytics]],
    [copy.processingTitle, [copy.processing]],
    [copy.serverTitle, [copy.server]],
    [copy.pdfTitle, [copy.pdf]],
    [copy.legalTitle, [copy.legal]],
    [copy.retentionTitle, [copy.retention]],
    [copy.storageTitle, [copy.storage]],
    [copy.providersTitle, [copy.providers]],
    [copy.transfersTitle, [copy.transfers]],
    [copy.rightsTitle, [copy.rights]],
    [copy.securityTitle, [copy.security]],
    [copy.minorsTitle, [copy.minors]],
    [copy.changesTitle, [copy.changes]],
  ] as const;

  return (
    <Box
      component="main"
      sx={{
        minHeight: "calc(100vh - 80px)",
        py: { xs: 2, sm: 4, md: 6 },
        position: "relative",
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 1.5, sm: 2.5 } }}>
        <Stack spacing={2.5} sx={{ minWidth: 0 }}>
          <Stack
            direction={{ xs: "column-reverse", sm: "row" }}
            alignItems={{ xs: "stretch", sm: "center" }}
            justifyContent="space-between"
            spacing={1}
          >
            <Link component={NextLink} href="/" underline="hover">
              ← {copy.back}
            </Link>
            <AppLanguageSwitcher />
          </Stack>
          <Paper
            component="article"
            elevation={0}
            sx={{
              p: { xs: 2, sm: 3.5, md: 5 },
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 3,
              minWidth: 0,
              overflowWrap: "anywhere",
              bgcolor: "rgba(255,253,253,.9)",
              boxShadow: "0 28px 70px rgba(73,22,59,.10)",
              backdropFilter: "blur(16px)",
            }}
          >
            <Stack spacing={3}>
              <Box>
                <Typography
                  component="h1"
                  variant="h3"
                  fontWeight={950}
                  sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}
                >
                  {copy.title}
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  {copy.intro}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  {copy.lastUpdated}: {formattedDate}
                </Typography>
              </Box>
              <Divider />
              <Box component="section">
                <Typography
                  component="h2"
                  variant="h5"
                  fontWeight={900}
                  gutterBottom
                >
                  {copy.controllerTitle}
                </Typography>
                <Typography paragraph>{copy.controller}</Typography>
                {contactEmail ? (
                  <Alert severity="info">
                    {copy.contact}:{" "}
                    <Link
                      href={`mailto:${contactEmail}`}
                      sx={{ overflowWrap: "anywhere" }}
                    >
                      {contactEmail}
                    </Link>
                  </Alert>
                ) : (
                  <Typography color="text.secondary">
                    {copy.noContact}
                  </Typography>
                )}
              </Box>
              {sections.slice(0, 4).map(([title, paragraphs]) => (
                <PolicySection
                  key={title}
                  title={title}
                  paragraphs={paragraphs}
                />
              ))}
              <Box component="section">
                <Typography
                  component="h2"
                  variant="h5"
                  fontWeight={900}
                  gutterBottom
                >
                  {copy.purposesTitle}
                </Typography>
                <Box component="ul" sx={{ pl: 2.5, my: 0 }}>
                  {copy.purposes.map((purpose) => (
                    <Typography component="li" key={purpose} sx={{ mb: 0.75 }}>
                      {purpose}
                    </Typography>
                  ))}
                </Box>
              </Box>
              {sections.slice(4).map(([title, paragraphs]) => (
                <PolicySection
                  key={title}
                  title={title}
                  paragraphs={paragraphs}
                />
              ))}
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}

function PolicySection({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: readonly string[];
}) {
  return (
    <Box component="section">
      <Typography component="h2" variant="h5" fontWeight={900} gutterBottom>
        {title}
      </Typography>
      {paragraphs.map((paragraph) => (
        <Typography paragraph key={paragraph} sx={{ mb: 1.25 }}>
          {paragraph}
        </Typography>
      ))}
    </Box>
  );
}
