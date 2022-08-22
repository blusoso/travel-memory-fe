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
  },
});
