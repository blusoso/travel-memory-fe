import { createTheme } from "@mui/material";

export const muiTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          letterSpacing: 1,
          borderRadius: "0.6em",
          padding: "0.35em 1.3em",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(16 18 27 / 40%)",
          color: "#f9fafb",
          borderRadius: "0.8em",
        },
      },
    },
  },
});
