import { Dispatch } from "redux";
import { AppState, choice } from "../../types";
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
  last: boolean,
  questionIndx: number,
  answer: Array<choice>,
  dispatch: Dispatch<any>,
  nextQuestion: () => void,
  nextPage: (newState: AppState) => void
) => {
  answerChoiceQuestion(questionIndx, answer, dispatch);

  if (last) nextPage("thanks");
  else nextQuestion();
};

export const handleTextOkButton = (
  last: boolean,
  questionIndx: number,
  answer: string,
  dispatch: Dispatch<any>,
  nextQuestion: () => void,
  nextPage: (newState: AppState) => void
) => {
  answerTextQuestion(questionIndx, answer, dispatch);

  if (last) nextPage("thanks");
  else nextQuestion();
};
