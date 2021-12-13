import { Dispatch } from "redux";
import { choice } from "../../types";
import {
  answerChooseQuestion,
  answerOpenQuestion,
} from "../reduxSlices/questionaireSlice";

const answerChoiceQuestion = (
  questionIndx: number,
  answer: Array<choice>,
  dispatch: Dispatch<any>
) =>
  dispatch(
    answerChooseQuestion({
      questionIndx: questionIndx,
      answer: answer,
    })
  );

const answerTextQuestion = (
  questionIndx: number,
  answer: string,
  dispatch: Dispatch<any>
) =>
  dispatch(
    answerOpenQuestion({
      questionIndx: questionIndx,
      answer: answer,
    })
  );

export const handleChoiceOkButton = (
  questionIndx: number,
  answer: Array<choice>,
  dispatch: Dispatch<any>,
  nextQuestion: () => void
) => {
  answerChoiceQuestion(questionIndx, answer, dispatch);
  nextQuestion();
};

export const handleTextOkButton = (
  questionIndx: number,
  answer: string,
  dispatch: Dispatch<any>,
  nextQuestion: () => void
) => {
  answerTextQuestion(questionIndx, answer, dispatch);
  nextQuestion();
};
