"use client";

import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
  Stack,
  Typography,
} from "@jlopvil/mui-kit";
import NextLink from "next/link";
import { Box, DialogContentText } from "@mui/material";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { deleteApplicationLocalData } from "@/lib/localData";

export default function LegalFooter() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    deleteApplicationLocalData();
    setOpen(false);
  };

  return (
    <Box
      component="footer"
      className="screen-only"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: "rgba(255,253,253,.72)",
        backdropFilter: "blur(14px)",
        py: 2.5,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 1.5, sm: 2.5, md: 3 } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Javier López Villanueva
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            flexWrap="wrap"
            useFlexGap
          >
            <Link component={NextLink} href="/privacy" underline="hover">
              {t.privacy}
            </Link>
            <Button
              variant="text"
              color="inherit"
              size="small"
              onClick={() => setOpen(true)}
            >
              {t.deleteLocalData}
            </Button>
          </Stack>
        </Stack>
      </Container>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="delete-local-data-title"
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle id="delete-local-data-title">
          {t.deleteLocalDataTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{t.deleteLocalDataMessage}</DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 2, pt: 1 }}>
          <Button onClick={() => setOpen(false)}>{t.cancel}</Button>
          <Button color="error" variant="contained" onClick={handleDelete}>
            {t.delete}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
