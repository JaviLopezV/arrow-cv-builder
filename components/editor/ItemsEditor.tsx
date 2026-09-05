"use client";

import Grid from "@mui/material/GridLegacy";
import { Button, IconButton, Stack, TextField } from "@jlopvil/mui-kit";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Paper, Tooltip } from "@mui/material";
import type { CvItem } from "@/lib/types";
import { useI18n } from "@/lib/i18n";

type Props = {
  items: CvItem[];
  onChange: (items: CvItem[]) => void;
};

const splitLines = (value: string) =>
  value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

export default function ItemsEditor({ items, onChange }: Props) {
  const { t } = useI18n();
  const patchItem = (index: number, patch: Partial<CvItem>) => {
    onChange(
      items.map((item, itemIndex) =>
        itemIndex === index ? { ...item, ...patch } : item,
      ),
    );
  };

  const addItem = () =>
    onChange([
      ...items,
      { title: "", subtitle: "", date: "", description: "", bullets: [] },
    ]);
  const removeItem = (index: number) =>
    onChange(items.filter((_, itemIndex) => itemIndex !== index));

  return (
    <Stack spacing={1.25}>
      {items.map((item, index) => (
        <Paper
          key={index}
          variant="outlined"
          sx={{
            p: 1.5,
            borderRadius: 1.5,
            backgroundColor: "background.default",
          }}
        >
          <Stack spacing={1.25}>
            <Stack
              direction="row"
              spacing={1}
              alignItems="flex-start"
              sx={{ minWidth: 0 }}
            >
              <Grid container spacing={1.5} sx={{ minWidth: 0 }}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label={t.companyTitle}
                    value={item.title}
                    onChange={(event) =>
                      patchItem(index, { title: event.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label={t.positionSubtitle}
                    value={item.subtitle ?? ""}
                    onChange={(event) =>
                      patchItem(index, { subtitle: event.target.value })
                    }
                  />
                </Grid>
              </Grid>
              <Tooltip title={t.deleteItem}>
                <IconButton
                  aria-label={t.deleteItem}
                  color="error"
                  onClick={() => removeItem(index)}
                  sx={{ minWidth: 44, minHeight: 44 }}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </Tooltip>
            </Stack>

            <Grid container spacing={1.5}>
              <Grid item xs={12} md={5}>
                <TextField
                  fullWidth
                  multiline
                  minRows={2}
                  label={t.dateLocation}
                  value={item.date ?? ""}
                  onChange={(event) =>
                    patchItem(index, { date: event.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} md={7}>
                <TextField
                  fullWidth
                  multiline
                  minRows={2}
                  label={t.description}
                  value={item.description ?? ""}
                  onChange={(event) =>
                    patchItem(index, { description: event.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  minRows={2}
                  label={t.bullets}
                  value={(item.bullets ?? []).join("\n")}
                  onChange={(event) =>
                    patchItem(index, {
                      bullets: splitLines(event.target.value),
                    })
                  }
                />
              </Grid>
            </Grid>
          </Stack>
        </Paper>
      ))}

      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={addItem}
        sx={{ minHeight: 44 }}
      >
        {t.addItem}
      </Button>
    </Stack>
  );
}
