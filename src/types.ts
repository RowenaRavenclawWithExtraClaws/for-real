export interface TextProps {
  variant:
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2";

  text: string;
}

export interface ButtonProps {
  variant?: "text" | "outlined" | "contained";
  text: string;
  className?: string;
  style: object;
  clickHandler?: any;
}

export interface LangingPageProps {
  questionaireMetadata: MetaData;
  goNext: (param: AppState) => void;
}

export interface QuestionPageProps {
  questionCount: number;
  goNext: (param: AppState) => void;
}

export interface ProgressBarProps {
  progressValue: number;
}

export interface TextFormProps {
  text: string;
  answer: string;
  questionIndx: number;
  last: boolean;
  multiline: boolean;
  nextQuestion: () => void;
  nextPage: (newState: AppState) => void;
}

export interface ChoiceFormProps {
  text: string;
  choices: Array<choice>;
  questionIndx: number;
  last: boolean;
  multiple: boolean;
  nextQuestion: () => void;
  nextPage: (newState: AppState) => void;
}

export interface PaginationProps {
  nextQuestion: () => void;
  previousQuestion: () => void;
}

export type AppState = "landing" | "questions" | "thanks";

export type MetaData = {
  name: string;
  description: string;
  questionCount: number;
};

export type choice = {
  label: string;
  value: string;
  selected: boolean;
};
