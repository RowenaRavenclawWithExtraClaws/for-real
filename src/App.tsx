import { useState } from "react";
import LandingPage from "./components/LandingPage";
import QuestionPage from "./components/QuestionPage";
import ThanksPage from "./components/ThanksPage";
import { AppState } from "./types";

function App() {
  const [currentState, setCurrentState] = useState<AppState>("landing");

  const states = {
    landing: <LandingPage />,
    questions: <QuestionPage />,
    thanks: <ThanksPage />,
  };

  return <div>{states[currentState]}</div>;
}

export default App;
