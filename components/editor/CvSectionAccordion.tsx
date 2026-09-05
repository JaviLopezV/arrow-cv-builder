"use client";

import Grid from "@mui/material/GridLegacy";
import { IconButton, Stack, TextField, Typography } from "@jlopvil/mui-kit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";
import BodyItemsEditor from "./BodyItemsEditor";
import CardsEditor from "./CardsEditor";
import ChipGroupsEditor from "./ChipGroupsEditor";
import ItemsEditor from "./ItemsEditor";
import { useI18n } from "@/lib/i18n";
import type { CvSection } from "@/lib/types";

type Props = {
  section: CvSection;
  pageCount: number;
  onPatch: (updater: (section: CvSection) => CvSection) => void;
  onRemove: () => void;
};

export default function CvSectionAccordion({
  section,
  pageCount,
  onPatch,
  onRemove,
}: Props) {
  const { t } = useI18n();
  return (
    <Accordion sx={{ minWidth: 0 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          px: { xs: 1, sm: 2 },
          minWidth: 0,
          "& .MuiAccordionSummary-content": { minWidth: 0 },
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "stretch", sm: "center" }}
          spacing={1}
          sx={{ width: "100%", minWidth: 0, pr: 0.5 }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
            sx={{ minWidth: 0 }}
          >
            <Switch
              checked={section.enabled}
              onClick={(event) => event.stopPropagation()}
              onChange={(event) =>
                onPatch((current) => ({
                  ...current,
                  enabled: event.target.checked,
                }))
              }
            />
            <Typography
              fontWeight={800}
              sx={{ flex: 1, minWidth: 0, overflowWrap: "anywhere" }}
            >
              {section.title}
            </Typography>
          </Stack>
          <Chip
            size="small"
            label={`${t.page} ${section.page} · ${section.column === "main" ? t.main : t.sidebar}`}
            sx={{
              alignSelf: { xs: "flex-start", sm: "center" },
              maxWidth: "100%",
              "& .MuiChip-label": {
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            }}
          />
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: { xs: 1, sm: 2 } }}>
        <Stack spacing={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <TextField
                fullWidth
                size="small"
                label={t.title}
                value={section.title}
                onChange={(event) =>
                  onPatch((current) => ({
                    ...current,
                    title: event.target.value,
                  }))
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth size="small">
                <InputLabel>{t.page}</InputLabel>
                <Select
                  label={t.page}
                  value={section.page}
                  onChange={(event) =>
                    onPatch((current) => ({
                      ...current,
                      page: Number(event.target.value),
                    }))
                  }
                >
                  {Array.from(
                    { length: pageCount },
                    (_, index) => index + 1,
                  ).map((page) => (
                    <MenuItem value={page} key={page}>
                      {page}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth size="small">
                <InputLabel>{t.column}</InputLabel>
                <Select
                  label={t.column}
                  value={section.column}
                  onChange={(event) =>
                    onPatch((current) => ({
                      ...current,
                      column: event.target.value as CvSection["column"],
                    }))
                  }
                >
                  <MenuItem value="sidebar">{t.sidebar}</MenuItem>
                  <MenuItem value="main">{t.main}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={1}
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-end", md: "center" },
              }}
            >
              <IconButton
                aria-label={t.deleteSection}
                color="error"
                onClick={onRemove}
                sx={{ minWidth: 44, minHeight: 44 }}
              >
                <DeleteOutlineIcon />
              </IconButton>
            </Grid>
          </Grid>
          {section.body && (
            <BodyItemsEditor
              items={section.body}
              onChange={(body) => onPatch((current) => ({ ...current, body }))}
            />
          )}
          {section.chipGroups && (
            <ChipGroupsEditor
              groups={section.chipGroups}
              onChange={(chipGroups) =>
                onPatch((current) => ({ ...current, chipGroups }))
              }
            />
          )}
          {section.cards && (
            <CardsEditor
              cards={section.cards}
              onChange={(cards) =>
                onPatch((current) => ({ ...current, cards }))
              }
            />
          )}
          {section.items && (
            <ItemsEditor
              items={section.items}
              onChange={(items) =>
                onPatch((current) => ({ ...current, items }))
              }
            />
          )}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
