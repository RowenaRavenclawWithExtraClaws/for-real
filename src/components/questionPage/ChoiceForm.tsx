import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import { handleChoiceOkButton } from "../../controllers/eventHandlers/eventHandlers";
import { ChoiceFromProps } from "../../types";
import CustomButton from "../common/CustomButton";
import CustomText from "../common/CustomText";

const ChoiceForm = (props: ChoiceFromProps) => {
  const buttonStyle = {
    height: "3rem",
    fontSize: "large",
    fontWeight: 600,
    marginTop: "2rem",
    width: "100%",
  };

  return (
    <div>
      <div>
        <CustomText variant="h5" text={props.text} />
        <br />
        {props.multiple ? (
          <FormGroup>
            {props.choices.map((choice, indx) => (
              <FormControlLabel
                key={indx}
                control={<Checkbox />}
                label={choice.label}
                value={choice.value}
              />
            ))}
          </FormGroup>
        ) : (
          <RadioGroup aria-label="question" name="radio-buttons-group">
            {props.choices.map((choice, indx) => (
              <FormControlLabel
                key={indx}
                control={<Radio />}
                label={choice.label}
                value={choice.value}
              />
            ))}
          </RadioGroup>
        )}
      </div>
      <CustomButton
        style={buttonStyle}
        variant="contained"
        text={props.last ? "einreichen" : "ok"}
        clickHandler={() =>
          handleChoiceOkButton(props.choices[1], () => {}, props.nextQuestion)
        }
      />
    </div>
  );
};

export default ChoiceForm;
