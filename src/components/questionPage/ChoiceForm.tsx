import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleChoiceOkButton } from "../../controllers/eventHandlers/eventHandlers";
import { choice, ChoiceFormProps } from "../../types";
import CustomButton from "../common/CustomButton";
import CustomText from "../common/CustomText";
import styles from "../../assets/styles/questionPage/textForm.module.css";

const ChoiceForm = (props: ChoiceFormProps) => {
  const [choices, setChoices] = useState<Array<choice>>([]);
  const dispatch = useDispatch();

  useEffect(() => setChoices(props.choices), [props.choices]);

  const buttonStyle = {
    height: "3rem",
    fontSize: "large",
    fontWeight: 600,
    marginTop: "2rem",
  };

  return (
    <div>
      <div>
        <CustomText variant="h5" text={props.text} />
        <br />
        {props.multiple ? (
          <FormGroup>
            {choices.map((choice, indx) => (
              <FormControlLabel
                key={indx}
                control={<Checkbox />}
                label={choice.label}
                value={choice.value}
                checked={choice.selected}
                onChange={(_, checked) =>
                  setChoices([
                    ...choices.slice(0, indx),
                    { ...choice, selected: checked },
                    ...choices.slice(indx + 1, choices.length),
                  ])
                }
              />
            ))}
          </FormGroup>
        ) : (
          <RadioGroup aria-label="question" name="radio-buttons-group">
            {choices.map((choice, indx) => (
              <FormControlLabel
                key={indx}
                control={<Radio />}
                label={choice.label}
                value={choice.value}
                checked={choice.selected}
                onChange={(_, checked) =>
                  setChoices([
                    ...choices.slice(0, indx),
                    { ...choice, selected: checked },
                    ...choices.slice(indx + 1, choices.length),
                  ])
                }
              />
            ))}
          </RadioGroup>
        )}
      </div>
      <CustomButton
        className={styles.okButton}
        style={buttonStyle}
        variant="contained"
        text={props.last ? "vorlegen" : "ok"}
        clickHandler={() =>
          handleChoiceOkButton(
            props.last,
            props.questionIndx,
            choices,
            dispatch,
            props.nextQuestion,
            props.nextPage
          )
        }
      />
    </div>
  );
};

export default ChoiceForm;
