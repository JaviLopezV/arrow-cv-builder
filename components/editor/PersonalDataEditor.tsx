"use client";

import Grid from "@mui/material/GridLegacy";
import { Button, Stack, TextField, Typography } from "@jlopvil/mui-kit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Avatar,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { useI18n } from "@/lib/i18n";
import type { CvData } from "@/lib/types";

type Personal = CvData["personal"];
type Props = {
  personal: Personal;
  onChange: <Field extends keyof Personal>(
    field: Field,
    value: Personal[Field],
  ) => void;
  onPhotoChange: (photo: string, showPhoto: boolean) => void;
};

export default function PersonalDataEditor({
  personal,
  onChange,
  onPhotoChange,
}: Props) {
  const { t } = useI18n();
  const [tagsInput, setTagsInput] = useState(personal.tags.join(", "));
  const [isEditingTags, setIsEditingTags] = useState(false);
  const [photoError, setPhotoError] = useState("");
  const photoInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isEditingTags) {
      setTagsInput(personal.tags.join(", "));
    }
  }, [isEditingTags, personal.tags]);

  const parseTags = (value: string) =>
    value
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

  const handlePhoto = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    setPhotoError("");
    if (!file.type.startsWith("image/")) {
      setPhotoError(t.photoInvalid);
      return;
    }
    if (file.size > 1_500_000) {
      setPhotoError(t.photoTooLarge);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== "string") return;
      onPhotoChange(reader.result, true);
    };
    reader.onerror = () => setPhotoError(t.photoReadError);
    reader.readAsDataURL(file);
  };

  return (
    <Accordion defaultExpanded sx={{ minWidth: 0 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography fontWeight={800}>{t.personalData}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack spacing={1.25}>
              <FormControlLabel
                control={
                  <Switch
                    checked={personal.showPhoto}
                    onChange={(event) =>
                      onChange("showPhoto", event.target.checked)
                    }
                  />
                }
                label={t.showPhoto}
              />
              <Stack direction="row" spacing={1.25} alignItems="center">
                <Avatar
                  src={personal.photo || undefined}
                  alt={personal.photo ? t.personPhoto : ""}
                  sx={{ width: 56, height: 56, bgcolor: "action.hover" }}
                />
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<AddAPhotoOutlinedIcon />}
                  onClick={() => photoInputRef.current?.click()}
                >
                  {personal.photo ? t.changePhoto : t.addPhoto}
                </Button>
                {personal.photo && (
                  <Button
                    color="error"
                    size="small"
                    startIcon={<DeleteOutlineIcon />}
                    onClick={() => onPhotoChange("", false)}
                  >
                    {t.removePhoto}
                  </Button>
                )}
                <input
                  ref={photoInputRef}
                  hidden
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handlePhoto}
                />
              </Stack>
              <Typography variant="caption" color="text.secondary">
                {t.photoHelp}
              </Typography>
              {photoError && <Alert severity="error">{photoError}</Alert>}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label={t.name}
              value={personal.name}
              onChange={(event) => onChange("name", event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label={t.role}
              value={personal.role}
              onChange={(event) => onChange("role", event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label={t.commaTags}
              value={tagsInput}
              onFocus={() => setIsEditingTags(true)}
              onChange={(event) => {
                const value = event.target.value;
                setTagsInput(value);
                onChange("tags", parseTags(value));
              }}
              onBlur={(event) => {
                const tags = parseTags(event.target.value);
                setIsEditingTags(false);
                setTagsInput(tags.join(", "));
                onChange("tags", tags);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              label="Email"
              value={personal.email}
              onChange={(event) => onChange("email", event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              label={t.phone}
              value={personal.phone}
              onChange={(event) => onChange("phone", event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              label="GitHub"
              value={personal.github}
              onChange={(event) => onChange("github", event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              label="LinkedIn"
              value={personal.linkedin}
              onChange={(event) => onChange("linkedin", event.target.value)}
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
