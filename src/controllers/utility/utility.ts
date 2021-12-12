import { createTheme } from "@mui/material";

const mainColor = "#192a56";

export const theme = createTheme({
  palette: {
    primary: {
      main: mainColor,
      light: mainColor,
      dark: mainColor,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: mainColor,
        },
      },
    },
  },
});
