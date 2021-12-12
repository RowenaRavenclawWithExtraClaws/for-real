import { useState } from "react";
import styles from "../assets/styles/questionPage.module.css";
import CustomPagination from "./questionPage/CustomPagination";
import ProgressBar from "./questionPage/ProgressBar";
import TextForm from "./questionPage/textForm";

const QuestionPage = () => {
  // initialize to (1 / no.question) * 100
  const [progressValue, setProgressValue] = useState<number>(10);

  return (
    <>
      <ProgressBar progressValue={progressValue} />
      <div className={styles.questionPage}>
        <TextForm text="asdhkkabdjlfk" questionIndx={1} />
      </div>
      <CustomPagination />
    </>
  );
};

export default QuestionPage;
