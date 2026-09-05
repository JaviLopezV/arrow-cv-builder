"use client";

import { Button, IconButton, Stack, TextField } from "@jlopvil/mui-kit";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Paper, Tooltip } from "@mui/material";
import type { CvCard } from "@/lib/types";
import { useI18n } from "@/lib/i18n";

type Props = {
  cards: CvCard[];
  onChange: (cards: CvCard[]) => void;
};

export default function CardsEditor({ cards, onChange }: Props) {
  const { t } = useI18n();
  const patchCard = (index: number, patch: Partial<CvCard>) => {
    onChange(
      cards.map((card, cardIndex) =>
        cardIndex === index ? { ...card, ...patch } : card,
      ),
    );
  };

  const addCard = () => onChange([...cards, { title: "", text: "" }]);
  const removeCard = (index: number) =>
    onChange(cards.filter((_, cardIndex) => cardIndex !== index));

  return (
    <Stack spacing={1.25}>
      {cards.map((card, index) => (
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
              <TextField
                fullWidth
                size="small"
                label={t.title}
                value={card.title}
                onChange={(event) =>
                  patchCard(index, { title: event.target.value })
                }
              />
              <Tooltip title={t.deleteItem}>
                <IconButton
                  aria-label={t.deleteItem}
                  color="error"
                  onClick={() => removeCard(index)}
                  sx={{ minWidth: 44, minHeight: 44 }}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </Tooltip>
            </Stack>
            <TextField
              fullWidth
              multiline
              minRows={2}
              label={t.text}
              value={card.text}
              onChange={(event) =>
                patchCard(index, { text: event.target.value })
              }
            />
          </Stack>
        </Paper>
      ))}

      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={addCard}
        sx={{ minHeight: 44 }}
      >
        {t.addItem}
      </Button>
    </Stack>
  );
}
