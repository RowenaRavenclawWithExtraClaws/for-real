import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { ButtonGroup, Button } from "@mui/material";
import styles from "../../assets/styles/questionPage/pagination.module.css";
import { PaginationProps } from "../../types";

const CustomPagination = (props: PaginationProps) => {
  return (
    <div className={styles.paginationDiv}>
      <ButtonGroup
        variant="contained"
        aria-label="outlined secondary button group"
      >
        <Button
          disabled={props.first}
          startIcon={<ArrowUpward />}
          onClick={props.previousQuestion}
        />
        <Button
          disabled={props.last}
          endIcon={<ArrowDownward />}
          onClick={props.nextQuestion}
        />
      </ButtonGroup>
    </div>
  );
};

export default CustomPagination;
