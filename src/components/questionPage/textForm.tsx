import { TextField } from "@mui/material";
import { TextFromProps } from "../../types";
import CustomButton from "../common/CustomButton";
import CustomText from "../common/CustomText";
import styles from "../../assets/styles/questionPage/textForm.module.css";

const TextForm = (props: TextFromProps) => {
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
          placeholder="Type your answer here..."
        />
      </div>
      <CustomButton
        className={styles.okButton}
        style={buttonStyle}
        variant="contained"
        text="Ok"
      />
    </div>
  );
};

export default TextForm;
