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

export const estimateDuration = (questionCount: number) => {
  const oneQuestionEstimate = 0.3; //minute
  const durationEstimate = Math.floor(oneQuestionEstimate * questionCount);

  return durationEstimate;
};
