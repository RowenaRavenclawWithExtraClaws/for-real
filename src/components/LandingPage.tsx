import styles from "../assets/styles/landingPage.module.css";
import logo from "../assets/images/insurance-svgrepo-com.svg";
import CustomText from "./common/CustomText";
import CustomButton from "./common/CustomButton";
import { LangingPageProps } from "../types";
import { useSelector } from "react-redux";
import { selectMetadata } from "../controllers/reduxSlices/questionaireSlice";
import { estimateDuration } from "../controllers/utility/utility";
import secondLogo from "../assets/images/insurance.svg";

const LandingPage = (props: LangingPageProps) => {
  const questionaireMetadata = useSelector(selectMetadata);

  const buttonStyle = {
    height: "3rem",
    fontSize: "large",
    fontWeight: 600,
    marginTop: "10rem",
    marginBottom: "1rem",
  };

  return (
    <div className={styles.landingPage}>
      <div>
        <img className={styles.logo} src={logo} alt="logo" />
        <CustomText variant="h3" text={questionaireMetadata.name} />
        <CustomText
          variant="subtitle2"
          text={questionaireMetadata.description}
        />
        <img className={styles.secondLogo} src={secondLogo} />
      </div>
      <div>
        <CustomButton
          className={styles.startButton}
          style={buttonStyle}
          variant="contained"
          text="Loslegen"
          clickHandler={() => props.goNext("questions")}
        />
        <CustomText
          variant="subtitle1"
          text={`🕐 Dauert ${estimateDuration(
            questionaireMetadata.questionCount
          )} Minuten`}
        />
      </div>
    </div>
  );
};

export default LandingPage;
