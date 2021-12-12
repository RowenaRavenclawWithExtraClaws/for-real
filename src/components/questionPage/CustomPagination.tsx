import { ArrowCircleDown, ArrowCircleUp } from "@mui/icons-material";
import { ButtonGroup, Button } from "@mui/material";
import styles from "../../assets/styles/questionPage/pagination.module.css";
import { PaginationProps } from "../../types";

const CustomPagination = (props: PaginationProps) => {
  return (
    <ButtonGroup
      className={styles.customPagination}
      variant="contained"
      aria-label="outlined secondary button group"
    >
      <Button startIcon={<ArrowCircleUp />} onClick={props.previousQuestion} />
      <Button endIcon={<ArrowCircleDown />} onClick={props.nextQuestion} />
    </ButtonGroup>
  );
};

export default CustomPagination;
