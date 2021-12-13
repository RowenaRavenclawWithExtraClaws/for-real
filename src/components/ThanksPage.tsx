import styles from "../assets/styles/landingPage.module.css";
import CustomText from "./common/CustomText";
import secondLogo from "../assets/images/insurance.svg";

const ThanksPage = () => {
  return (
    <div className={styles.landingPage}>
      <div>
        <img className={styles.secondLogo} src={secondLogo} />
      </div>
      <br />
      <CustomText
        variant="h4"
        text={`Sie sind bereit! Seien Sie versichert, 
      dass Ihre Antworten für uns wertvoll sind`}
      />
      <br />
      <CustomText
        variant="subtitle1"
        text="Sie können dieses Fenster jetzt schließen"
      />
    </div>
  );
};

export default ThanksPage;
