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
  variant: "text" | "outlined" | "contained";
  text: string;
  style: object;
  clickHandler: any;
}

export interface LangingPageProps {
  goNext: (param: AppState) => void;
}

export type AppState = "landing" | "questions" | "thanks";
