import { useState } from "react";
import styles from "../assets/styles/questionPage.module.css";
import ProgressBar from "./questionPage/ProgressBar";

const QuestionPage = () => {
  // initialize to (1 / no.question) * 100
  const [progressValue, setProgressValue] = useState<number>(10);

  return (
    <>
      <ProgressBar progressValue={progressValue} />
      <div className={styles.questionPage}></div>
    </>
  );
};

export default QuestionPage;
