import styles from "../assets/styles/landingPage.module.css";
import logo from "../assets/images/insurance-svgrepo-com.svg";
import CustomText from "./common/CustomText";
import CustomButton from "./common/CustomButton";
import { LangingPageProps } from "../types";

const LandingPage = (props: LangingPageProps) => {
  const buttonStyle = {
    backgroundColor: "black",
    height: "3rem",
    fontSize: "large",
    fontWeight: 600,
    marginTop: "10rem",
    marginBottom: "1rem",
  };

  return (
    <div className={styles.landingPage}>
      <img className={styles.logo} src={logo} alt="logo" />
      <CustomText variant="h3" text="Privathaftpflichtversicherung" />
      <CustomButton
        style={buttonStyle}
        variant="contained"
        text="Loslegen"
        clickHandler={() => props.goNext("questions")}
      />
      <CustomText variant="subtitle1" text="🕐 Dauert 2 Minuten" />
    </div>
  );
};

export default LandingPage;
