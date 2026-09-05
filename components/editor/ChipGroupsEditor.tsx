"use client";

import { Button, IconButton, Stack, TextField } from "@jlopvil/mui-kit";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, Chip, Paper, Tooltip } from "@mui/material";
import type { KeyboardEvent } from "react";
import { useState } from "react";
import type { ChipGroup } from "@/lib/types";
import { useI18n } from "@/lib/i18n";

type Props = {
  groups: ChipGroup[];
  onChange: (groups: ChipGroup[]) => void;
};

export default function ChipGroupsEditor({ groups, onChange }: Props) {
  const { t } = useI18n();
  const [drafts, setDrafts] = useState<Record<number, string>>({});

  const patchGroup = (index: number, patch: Partial<ChipGroup>) => {
    onChange(
      groups.map((group, groupIndex) =>
        groupIndex === index ? { ...group, ...patch } : group,
      ),
    );
  };

  const addGroup = () => onChange([...groups, { label: "", chips: [] }]);

  const removeGroup = (index: number) => {
    onChange(groups.filter((_, groupIndex) => groupIndex !== index));
    setDrafts((current) => {
      const next: Record<number, string> = {};
      Object.entries(current).forEach(([key, value]) => {
        const numericKey = Number(key);
        if (numericKey < index) next[numericKey] = value;
        if (numericKey > index) next[numericKey - 1] = value;
      });
      return next;
    });
  };

  const setDraft = (index: number, value: string) => {
    setDrafts((current) => ({ ...current, [index]: value }));
  };

  const addChip = (index: number) => {
    const nextChip = (drafts[index] ?? "").trim();
    if (!nextChip) return;

    const group = groups[index];
    const exists = group.chips.some(
      (chip) => chip.toLocaleLowerCase() === nextChip.toLocaleLowerCase(),
    );
    if (exists) {
      setDraft(index, "");
      return;
    }

    patchGroup(index, { chips: [...group.chips, nextChip] });
    setDraft(index, "");
  };

  const removeChip = (groupIndex: number, chipIndex: number) => {
    const group = groups[groupIndex];
    patchGroup(groupIndex, {
      chips: group.chips.filter((_, index) => index !== chipIndex),
    });
  };

  const handleDraftKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (event.key !== "Enter") return;

    event.preventDefault();
    addChip(index);
  };

  return (
    <Stack spacing={1.25}>
      {groups.map((group, index) => (
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
              alignItems="center"
              sx={{ minWidth: 0 }}
            >
              <TextField
                fullWidth
                size="small"
                label={t.groupName}
                value={group.label}
                onChange={(event) =>
                  patchGroup(index, { label: event.target.value })
                }
              />
              <Tooltip title={t.deleteGroup}>
                <IconButton
                  aria-label={t.deleteGroup}
                  color="error"
                  onClick={() => removeGroup(index)}
                  sx={{ minWidth: 44, minHeight: 44 }}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </Tooltip>
            </Stack>

            {!!group.chips.length && (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {group.chips.map((chip, chipIndex) => (
                  <Chip
                    key={`${chip}-${chipIndex}`}
                    label={chip}
                    size="small"
                    onDelete={() => removeChip(index, chipIndex)}
                    sx={{
                      maxWidth: "100%",
                      height: "auto",
                      minHeight: 32,
                      "& .MuiChip-label": {
                        whiteSpace: "normal",
                        overflowWrap: "anywhere",
                        py: 0.5,
                      },
                    }}
                  />
                ))}
              </Box>
            )}

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
              <TextField
                fullWidth
                size="small"
                label={t.newTechnology}
                value={drafts[index] ?? ""}
                onChange={(event) => setDraft(index, event.target.value)}
                onKeyDown={(event) =>
                  handleDraftKeyDown(
                    event as KeyboardEvent<HTMLInputElement>,
                    index,
                  )
                }
              />
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={() => addChip(index)}
                sx={{ flexShrink: 0, minHeight: 44 }}
              >
                {t.add}
              </Button>
            </Stack>
          </Stack>
        </Paper>
      ))}

      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={addGroup}
        sx={{ minHeight: 44 }}
      >
        {t.addGroup}
      </Button>
    </Stack>
  );
}
