import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
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
                label={choice}
              />
            ))}
          </FormGroup>
        ) : (
          <RadioGroup aria-label="question" name="radio-buttons-group">
            {props.choices.map((choice, indx) => (
              <FormControlLabel
                key={indx}
                value={choice}
                control={<Radio />}
                label={choice}
              />
            ))}
          </RadioGroup>
        )}
      </div>
      <CustomButton style={buttonStyle} variant="contained" text="Ok" />
    </div>
  );
};

export default ChoiceForm;
