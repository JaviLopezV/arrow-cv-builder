"use client";

import { Button, IconButton, Stack, TextField } from "@jlopvil/mui-kit";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Paper, Tooltip } from "@mui/material";
import { useI18n } from "@/lib/i18n";

type Props = {
  items: string[];
  onChange: (items: string[]) => void;
};

export default function BodyItemsEditor({ items, onChange }: Props) {
  const { t } = useI18n();
  const patchItem = (index: number, value: string) => {
    onChange(
      items.map((item, itemIndex) => (itemIndex === index ? value : item)),
    );
  };

  const addItem = () => onChange([...items, ""]);
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
          <Stack
            direction="row"
            spacing={1}
            alignItems="flex-start"
            sx={{ minWidth: 0 }}
          >
            <TextField
              fullWidth
              multiline
              minRows={2}
              label={t.item}
              value={item}
              onChange={(event) => patchItem(index, event.target.value)}
            />
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
