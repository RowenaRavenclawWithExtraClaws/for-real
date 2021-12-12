import { useState } from "react";
import LandingPage from "./components/LandingPage";
import QuestionPage from "./components/QuestionPage";
import ThanksPage from "./components/ThanksPage";
import { AppState } from "./types";
import styles from "./assets/styles/app.module.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./controllers/utility/utility";
import { useSelector } from "react-redux";
import { selectMetadata } from "./controllers/reduxSlices/questionaireSlice";

function App() {
  const questionaireMetadata = useSelector(selectMetadata);
  const [currentState, setCurrentState] = useState<AppState>("landing");

  const goNext = (newState: AppState) => setCurrentState(newState);

  const states = {
    landing: (
      <LandingPage
        questionaireMetadata={questionaireMetadata}
        goNext={goNext}
      />
    ),
    questions: (
      <QuestionPage
        questionCount={questionaireMetadata.questionCount}
        goNext={goNext}
      />
    ),
    thanks: <ThanksPage />,
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>{states[currentState]}</div>
    </ThemeProvider>
  );
}

export default App;
