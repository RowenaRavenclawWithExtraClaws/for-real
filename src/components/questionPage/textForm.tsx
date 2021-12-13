import { TextField } from "@mui/material";
import { TextFormProps } from "../../types";
import CustomButton from "../common/CustomButton";
import CustomText from "../common/CustomText";
import styles from "../../assets/styles/questionPage/textForm.module.css";
import { handleTextOkButton } from "../../controllers/eventHandlers/eventHandlers";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const TextForm = (props: TextFormProps) => {
  const [answer, setAnswer] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    setAnswer(props.answer ? props.answer : "");
  }, [props.questionIndx]); // eslint-disable-line react-hooks/exhaustive-deps

  const buttonStyle = {
    height: "3rem",
    fontSize: "large",
    fontWeight: 600,
    marginTop: "2rem",
  };

  return (
    <div className={styles.textForm}>
      <div>
        <CustomText variant="h5" text={props.text} />
        <br />
        <TextField
          className={styles.textField}
          variant="standard"
          autoFocus
          multiline={props.multiline}
          rows={props.multiline ? 5 : 1}
          value={answer}
          placeholder="Type your answer here..."
          onChange={(e) => setAnswer(e.currentTarget.value)}
        />
      </div>
      <CustomButton
        className={styles.okButton}
        style={buttonStyle}
        variant="contained"
        text={props.last ? "einreichen" : "ok"}
        clickHandler={() =>
          handleTextOkButton(
            props.last,
            props.questionIndx,
            answer,
            dispatch,
            props.nextQuestion,
            props.nextPage
          )
        }
      />
    </div>
  );
};

export default TextForm;
