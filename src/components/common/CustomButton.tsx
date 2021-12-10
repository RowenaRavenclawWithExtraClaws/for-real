import { Button } from "@mui/material";
import { ButtonProps } from "../../types";

const CustomButton = (props: ButtonProps) => {
  return (
    <Button
      sx={{ ...props.style }}
      variant={props.variant}
      onClick={props.clickHandler}
    >
      {props.text}
    </Button>
  );
};

export default CustomButton;
