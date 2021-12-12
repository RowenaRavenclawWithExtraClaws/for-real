import { useState } from "react";
import LandingPage from "./components/LandingPage";
import QuestionPage from "./components/QuestionPage";
import ThanksPage from "./components/ThanksPage";
import { AppState } from "./types";
import styles from "./assets/styles/app.module.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./controllers/utility/utility";

function App() {
  const [currentState, setCurrentState] = useState<AppState>("landing");

  const goNext = (newState: AppState) => setCurrentState(newState);

  const states = {
    landing: <LandingPage goNext={goNext} />,
    questions: <QuestionPage />,
    thanks: <ThanksPage />,
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>{states[currentState]}</div>
    </ThemeProvider>
  );
}

export default App;
