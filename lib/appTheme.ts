import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    primary: { main: "#702457", dark: "#49163b", light: "#a85483" },
    secondary: { main: "#d43f78" },
    background: { default: "#f7f3f8", paper: "#fffdfd" },
    text: { primary: "#2e2230", secondary: "#716474" },
    divider: "rgba(73, 22, 59, 0.13)",
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "Inter, Arial, Helvetica, sans-serif",
    button: { textTransform: "none", fontWeight: 750, letterSpacing: 0 },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 10 } } },
    MuiCard: { styleOverrides: { root: { borderRadius: 16 } } },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: "12px !important",
          overflow: "hidden",
          "&:before": { display: "none" },
        },
      },
    },
    MuiToggleButton: { styleOverrides: { root: { fontWeight: 750 } } },
  },
});
