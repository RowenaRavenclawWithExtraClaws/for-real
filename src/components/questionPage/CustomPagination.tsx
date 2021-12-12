import { ArrowCircleDown, ArrowCircleUp } from "@mui/icons-material";
import { ButtonGroup, Button } from "@mui/material";
import styles from "../../assets/styles/questionPage/pagination.module.css";

const CustomPagination = () => {
  return (
    <ButtonGroup
      className={styles.customPagination}
      variant="contained"
      aria-label="outlined secondary button group"
    >
      <Button startIcon={<ArrowCircleUp />} />
      <Button endIcon={<ArrowCircleDown />} />
    </ButtonGroup>
  );
};

export default CustomPagination;
