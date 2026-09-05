"use client";

import Grid from "@mui/material/GridLegacy";
import { Button, Stack, Typography } from "@jlopvil/mui-kit";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DownloadIcon from "@mui/icons-material/Download";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import { Box, Card, CardActionArea, CardContent, Radio } from "@mui/material";
import type { ChangeEvent, RefObject } from "react";
import { createSampleCv, exportCvData } from "@/lib/cvData";
import { useI18n } from "@/lib/i18n";
import type { Language } from "@/lib/types";
import type { InitializationMode } from "./SetupStep";

export type StartOption = {
  mode: InitializationMode;
  title: string;
  detail: string;
};
type Props = {
  options: StartOption[];
  mode: InitializationMode | null;
  language: Language;
  inputRef: RefObject<HTMLInputElement>;
  onModeChange: (mode: InitializationMode) => void;
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function OptionIcon({ mode }: { mode: InitializationMode }) {
  if (mode === "resume") return <HistoryRoundedIcon />;
  if (mode === "sample") return <DescriptionRoundedIcon />;
  if (mode === "empty") return <AddRoundedIcon />;
  return <UploadFileRoundedIcon />;
}

export default function SetupStartOptions(props: Props) {
  const { t } = useI18n();
  return (
    <Box>
      <Typography variant="h6" fontWeight={850} gutterBottom>
        {t.howStart}
      </Typography>
      <Grid container spacing={2}>
        {props.options.map((option) => (
          <Grid item xs={12} sm={6} key={option.mode}>
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                borderColor:
                  props.mode === option.mode ? "primary.main" : "divider",
                borderWidth: 2,
                bgcolor:
                  props.mode === option.mode
                    ? "rgba(112,36,87,.045)"
                    : "rgba(255,255,255,.68)",
                transition:
                  "transform .2s ease, box-shadow .2s ease, border-color .2s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 14px 30px rgba(73,22,59,.10)",
                  borderColor: "primary.light",
                },
              }}
            >
              <CardActionArea
                sx={{ height: "100%" }}
                onClick={() =>
                  option.mode === "import"
                    ? props.inputRef.current?.click()
                    : props.onModeChange(option.mode)
                }
              >
                <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
                  <Stack
                    direction="row"
                    spacing={1.25}
                    alignItems="center"
                    sx={{ minWidth: 0 }}
                  >
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: 2,
                        flexShrink: 0,
                        display: "grid",
                        placeItems: "center",
                        color:
                          props.mode === option.mode ? "white" : "primary.main",
                        bgcolor:
                          props.mode === option.mode
                            ? "primary.main"
                            : "rgba(112,36,87,.08)",
                      }}
                    >
                      <OptionIcon mode={option.mode} />
                    </Box>
                    <Box sx={{ minWidth: 0 }}>
                      <Typography
                        fontWeight={850}
                        sx={{ overflowWrap: "anywhere" }}
                      >
                        {option.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ overflowWrap: "anywhere" }}
                      >
                        {option.detail}
                      </Typography>
                    </Box>
                    <Radio
                      checked={props.mode === option.mode}
                      tabIndex={-1}
                      sx={{ p: 0.5, ml: "auto !important" }}
                    />
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <input
        ref={props.inputRef}
        hidden
        type="file"
        accept="application/json,.json"
        onChange={props.onFileChange}
      />
      <Box
        sx={{
          mt: 2,
          p: { xs: 1.5, sm: 2 },
          border: "1px dashed",
          borderColor: "divider",
          borderRadius: 2,
          bgcolor: "rgba(112,36,87,.035)",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          alignItems={{ xs: "stretch", sm: "center" }}
          justifyContent="space-between"
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography fontWeight={850}>{t.jsonExampleTitle}</Typography>
            <Typography variant="body2" color="text.secondary">
              {t.jsonExampleDetail}
            </Typography>
          </Box>
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={() => exportCvData(createSampleCv(props.language))}
            sx={{ flexShrink: 0, minHeight: 44 }}
          >
            {t.downloadJsonExample}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
