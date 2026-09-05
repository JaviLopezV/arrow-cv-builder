"use client";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Button, Stack, Typography } from "@jlopvil/mui-kit";
import { Box, Card, CardActionArea, Chip } from "@mui/material";
import { useI18n } from "@/lib/i18n";
import { TemplatePreset } from "@/lib/types";
import { MAGNA_TEMPLATE_ID } from "@/lib/templates";

type Props = {
  templateId: string;
  templates: TemplatePreset[];
  onChange: (templateId: string) => void;
  onBack: () => void;
  onNext: () => void;
};

export default function TemplateStep(props: Props) {
  const { language, t } = useI18n();

  return (
    <Stack
      spacing={3}
      sx={{ maxWidth: 1000, width: "100%", mx: "auto", pb: 4 }}
    >
      <Box>
        <Typography
          variant="h3"
          fontWeight={950}
          sx={{ fontSize: { xs: "2rem", sm: "2.7rem" } }}
        >
          {t.chooseTemplate}
        </Typography>
        <Typography color="text.secondary">{t.templateIntro}</Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(3, minmax(0, 1fr))",
          },
          gap: 2,
        }}
      >
        {props.templates.map((template) => {
          const selected = template.id === props.templateId;
          const isMagna = template.id === MAGNA_TEMPLATE_ID;
          return (
            <Card
              key={template.id}
              variant="outlined"
              sx={{
                borderColor: selected ? "primary.main" : "divider",
                borderWidth: selected ? 2 : 1,
              }}
            >
              <CardActionArea
                onClick={() => props.onChange(template.id)}
                aria-pressed={selected}
                sx={{ height: "100%", p: 2 }}
              >
                <Box
                  aria-hidden="true"
                  sx={{
                    aspectRatio: "210 / 140",
                    mb: 2,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 1.5,
                    bgcolor: "background.paper",
                    overflow: "hidden",
                    boxShadow: "0 8px 24px rgba(73,22,59,.08)",
                  }}
                >
                  {!isMagna && (
                    <Box sx={{ height: "27%", bgcolor: "primary.dark" }} />
                  )}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: isMagna ? "51% 49%" : "34% 1fr",
                      height: isMagna ? "100%" : "73%",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: isMagna ? "#d9dcc2" : "rgba(112,36,87,.08)",
                        borderRight: "1px solid",
                        borderColor: "divider",
                        p: isMagna ? 1.2 : 0,
                      }}
                    >
                      {isMagna && (
                        <>
                          <Box
                            sx={{
                              width: 24,
                              height: 32,
                              mx: "auto",
                              mb: 1,
                              borderRadius: "50%",
                              bgcolor: "rgba(255,255,255,.65)",
                            }}
                          />
                          <Box
                            sx={{
                              width: "58%",
                              height: 7,
                              mb: 1,
                              bgcolor: "#222",
                            }}
                          />
                          <Box
                            sx={{ width: "78%", height: 2, bgcolor: "#222" }}
                          />
                        </>
                      )}
                    </Box>
                    <Box
                      sx={{ p: 1.5, bgcolor: isMagna ? "#f7f6ee" : undefined }}
                    >
                      {[72, 92, 84, 65].map((width) => (
                        <Box
                          key={width}
                          sx={{
                            width: `${width}%`,
                            height: 5,
                            mb: 1,
                            borderRadius: 2,
                            bgcolor: "rgba(73,22,59,.14)",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>
                <Stack
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="space-between"
                  spacing={1}
                >
                  <Box>
                    <Typography variant="h6" fontWeight={900}>
                      {template.name[language]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {template.description[language]}
                    </Typography>
                  </Box>
                  {selected && <CheckCircleRoundedIcon color="primary" />}
                </Stack>
                {template.id === "sidebar" && (
                  <Chip
                    label={t.originalTemplate}
                    size="small"
                    sx={{ mt: 2 }}
                  />
                )}
              </CardActionArea>
            </Card>
          );
        })}
      </Box>

      <Stack direction="row" spacing={1.5} justifyContent="space-between">
        <Button variant="outlined" onClick={props.onBack}>
          {t.back}
        </Button>
        <Button
          variant="contained"
          onClick={props.onNext}
          disabled={!props.templateId}
        >
          {t.continueEditor}
        </Button>
      </Stack>
    </Stack>
  );
}
