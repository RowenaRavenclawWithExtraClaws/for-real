import { Typography } from "@mui/material";
import { TextProps } from "../../types";
import styles from "../../assets/styles/common/text.module.css";

const CustomText = (props: TextProps) => {
  return (
    <Typography className={styles.customText} variant={props.variant}>
      {props.text}
    </Typography>
  );
};

export default CustomText;
