import { LinearProgress } from "@mui/material";
import styles from "../../assets/styles/questionPage/progressBar.module.css";
import { ProgressBarProps } from "../../types";

const ProgressBar = (props: ProgressBarProps) => {
  return (
    <LinearProgress
      className={styles.progressBar}
      variant="determinate"
      value={props.progressValue}
    />
  );
};

export default ProgressBar;
