import { Button } from "@mui/material";
import { ButtonProps } from "../../types";

const CustomButton = (props: ButtonProps) => {
  return (
    <Button
      className={props.className}
      sx={{ ...props.style }}
      variant={props.variant}
      disableElevation={true}
      onClick={props.clickHandler}
    >
      {props.text}
    </Button>
  );
};

export default CustomButton;
