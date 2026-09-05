"use client";

import { Alert, Button, Stack } from "@jlopvil/mui-kit";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RestoreIcon from "@mui/icons-material/Restore";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useI18n } from "@/lib/i18n";
import type { ThemePreset } from "@/lib/types";

type Props = {
  themeId: string;
  themes: ThemePreset[];
  pageCount: number;
  onThemeChange: (id: string) => void;
  onAddPage: () => void;
  onRemoveLastPage: () => void;
  onAddSection: () => void;
  onReset: () => void;
};

export default function CvEditorToolbar(props: Props) {
  const { t } = useI18n();
  return (
    <>
      <Alert severity="info">{t.helper}</Alert>
      <FormControl fullWidth size="small">
        <InputLabel>{t.style}</InputLabel>
        <Select
          label={t.style}
          value={props.themeId}
          onChange={(event) => props.onThemeChange(event.target.value)}
        >
          {props.themes.map((theme) => (
            <MenuItem value={theme.id} key={theme.id}>
              {theme.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1}
        flexWrap={{ sm: "wrap" }}
        useFlexGap
      >
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={props.onAddPage}
          sx={{ minHeight: 44 }}
        >
          {t.addPage}
        </Button>
        {props.pageCount > 1 && (
          <Button
            color="error"
            variant="outlined"
            startIcon={<DeleteOutlineIcon />}
            onClick={props.onRemoveLastPage}
            sx={{ minHeight: 44 }}
          >
            {t.deleteLastPage}
          </Button>
        )}
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={props.onAddSection}
          sx={{ minHeight: 44 }}
        >
          {t.addSection}
        </Button>
        <Button
          color="warning"
          variant="text"
          startIcon={<RestoreIcon />}
          onClick={props.onReset}
          sx={{ minHeight: 44 }}
        >
          {t.resetSample}
        </Button>
      </Stack>
    </>
  );
}
