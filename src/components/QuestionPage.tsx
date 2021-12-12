import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../assets/styles/questionPage.module.css";
import { selectQuestions } from "../controllers/reduxSlices/questionaireSlice";
import { QuestionPageProps } from "../types";
import ChoiceForm from "./questionPage/ChoiceForm";
import CustomPagination from "./questionPage/CustomPagination";
import ProgressBar from "./questionPage/ProgressBar";
import TextForm from "./questionPage/textForm";

const QuestionPage = (props: QuestionPageProps) => {
  const questions = useSelector(selectQuestions);
  const [currentQuestionIndx, setCurrentQuestionIndx] = useState<number>(0);
  const [progressValue, setProgressValue] = useState<number>(
    (1 / props.questionCount) * 100
  );

  const nextQuestion = () => {
    if (currentQuestionIndx < props.questionCount - 1)
      setCurrentQuestionIndx(currentQuestionIndx + 1);
  };

  const previousQuestion = () => {
    if (currentQuestionIndx > 0)
      setCurrentQuestionIndx(currentQuestionIndx - 1);
  };

  const chooseForm = () => {
    if (questions[currentQuestionIndx].question_type === "multiple-choice")
      return (
        <ChoiceForm
          text={questions[currentQuestionIndx].headline}
          last={currentQuestionIndx === questions.length - 1}
          questionIndx={currentQuestionIndx}
          choices={questions[currentQuestionIndx].choices}
          multiple={questions[currentQuestionIndx].multiple}
          nextQuestion={nextQuestion}
        />
      );

    return (
      <TextForm
        text={questions[currentQuestionIndx].headline}
        last={currentQuestionIndx === questions.length - 1}
        questionIndx={currentQuestionIndx}
        multiline={questions[currentQuestionIndx].multiline}
        nextQuestion={nextQuestion}
      />
    );
  };

  return (
    <>
      <ProgressBar progressValue={progressValue} />
      <div className={styles.questionPage}>{chooseForm()}</div>
      <CustomPagination
        nextQuestion={nextQuestion}
        previousQuestion={previousQuestion}
      />
    </>
  );
};

export default QuestionPage;
