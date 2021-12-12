import { choice } from "../../types";

export const handleChoiceOkButton = (
  answer: choice,
  answerQuestion: (answer: choice) => void,
  nextQuestion: () => void
) => {
  answerQuestion(answer);
  nextQuestion();
};

export const handleTextOkButton = (
  answer: string,
  answerQuestion: (answer: string) => void,
  nextQuestion: () => void
) => {
  answerQuestion(answer);
  nextQuestion();
};
