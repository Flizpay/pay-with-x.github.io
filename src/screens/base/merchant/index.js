import React from "react";
import {
  FaUserPlus,
  FaQrcode,
  FaTimesCircle,
  FaArrowRight,
  FaRocket,
  FaEuroSign,
  FaShieldAlt,
  FaArrowDown,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Merchants() {
  const { t } = useTranslation();

  const isMobile = window.innerWidth <= 768;

  const styles = isMobile ? mobileStyles : desktopStyles;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{t("Merchants.title")}</h2>
      <div style={styles.verticalBarContainer}>
        <p style={styles.verticalBarText}>{t("Merchants.verticalBarText")}</p>
      </div>

      <div style={styles.subsection}>
        <h5 style={styles.subsectionTitle}>{t("Merchants.HowItWorks")}</h5>
      </div>

      <div style={styles.stepsContainer}>
        <div style={styles.step}>
          <FaUserPlus style={styles.icon} />
          <p style={styles.benefitTitle}>{t("Merchants.steps.SignUp.title")}</p>
          <p style={styles.stepDescription}>
            {t("Merchants.steps.SignUp.description")}
          </p>
        </div>

        {isMobile ? (
          <FaArrowDown style={styles.icon} />
        ) : (
          <FaArrowRight style={{ ...styles.icon, ...styles.arrowIcon }} />
        )}

        <div style={styles.step}>
          <FaQrcode style={styles.icon} />
          <p style={styles.benefitTitle}>
            {t("Merchants.steps.DisplayQRCode.title")}
          </p>
          <p style={styles.stepDescription}>
            {t("Merchants.steps.DisplayQRCode.description")}
          </p>
        </div>

        {isMobile ? (
          <FaArrowDown style={mobileStyles.icon} />
        ) : (
          <FaArrowRight style={{ ...styles.icon, ...styles.arrowIcon }} />
        )}

        <div style={styles.step}>
          <FaEuroSign style={styles.icon} />
          <p style={styles.benefitTitle}>
            {t("Merchants.steps.GetPaid.title")}
          </p>
          <p style={styles.stepDescription}>
            {t("Merchants.steps.GetPaid.description")}
          </p>
        </div>
      </div>

      <h5 style={styles.subsectionTitle}>
        {t("Merchants.YourBenefits")}
      </h5>

        <div style={styles.benefitsContainer}>
          <div style={styles.benefit}>
            <FaEuroSign style={styles.icon} />
            <p style={styles.benefitTitle}>
              {t("Merchants.benefits.CutFees.title")}
            </p>
            <p style={styles.benefitDescription}>
              {t("Merchants.benefits.CutFees.description")}
            </p>
          </div>

          <div style={styles.benefit}>
            <FaRocket style={styles.icon} />
            <p style={styles.benefitTitle}>
              {t("Merchants.benefits.CutLiquidityCosts.title")}
            </p>
            <p style={styles.benefitDescription}>
              {t("Merchants.benefits.CutLiquidityCosts.description")}
            </p>
          </div>

          <div style={styles.benefit}>
            <FaTimesCircle style={styles.icon} />
            <p style={styles.benefitTitle}>
              {t("Merchants.benefits.NoFixedFees.title")}
            </p>
            <p style={styles.benefitDescription}>
              {t("Merchants.benefits.NoFixedFees.description")}
            </p>
          </div>

          <div style={styles.benefit}>
            <FaShieldAlt style={styles.icon} />
            <p style={styles.benefitTitle}>
              {t("Merchants.benefits.IncreasedSecurity.title")}
            </p>
            <p style={styles.benefitDescription}>
              {t("Merchants.benefits.IncreasedSecurity.description")}
            </p>
          </div>
      </div>
    </div>
  );
}

const desktopStyles = {
  container: {
    padding: "30px 5%",
    background: "linear-gradient(to bottom right, black, #222 65%, #444)",
    color: "white",
    padding: "50px 100px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 700,
    marginBottom: "40px",
    textAlign: "center",
    paddingBottom: "10px",
    color: "#00D1B2",
  },
  verticalBarContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
    marginRight: "100px",
    marginLeft: "100px",
  },
  verticalBar: {
    width: "7px",
    height: "150px", // Setting a specific height for the bar
    backgroundColor: "#00D1B2",
    marginRight: "30px",
  },
  verticalBarText: {
    flex: 1,
    fontSize: "1.2rem",
    fontWeight: 400,
    color: "#dddddd",
    textAlign: "justify",
  },
  subsection: {
    margin: "40px 0",
  },
  subsectionTitle: {
    fontSize: "1.7rem",
    fontWeight: 600,
    marginBottom: "60px",
    paddingBottom: "10px",
    textAlign: "center",
  },
  stepsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
    margin: "50px 0",
  },
  step: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 209, 178, 0.00)",
    padding: "20px",
    width: "230px",
    height: "230px",
    borderRadius: "90px",
    boxShadow: "0px 5px 15px rgba(0, 209, 178, 0.2)",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  stepDescription: {
    fontSize: "1rem",
    fontWeight: 400,
    color: "#dddddd",
    marginTop: "10px", // Adds a little space between the title and the description
  },
  icon: {
    fontSize: "3rem",
    marginBottom: "15px",
    color: "#00D1B2",
  },
  arrowIcon: {
    fontSize: "2rem",
  },
  benefitsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "40px",
    padding: "60px 40px", // Increased padding on the left and right
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: "20px",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)",
    margin: "40px 0",
  },
  benefit: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "20px", // Added padding to give some space inside each benefit
    borderRadius: "10px", // Added border radius to round the edges a bit
    backgroundColor: "rgba(0, 0, 0, 0.0)", // Black with 50% opacity
    transition: "transform 0.3s, box-shadow 0.3s", // Added transitions for smoothness
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)", // Added a subtle shadow
    ":hover": {
      // Hover effect
      transform: "scale(1.05)",
      boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.2)", // Shadow gets slightly bigger on hover
    },
  },
  // benefitIcon: {
  //      fontSize: '2.5rem',
  //     marginBottom: '15px',
  //     color: '#00D1B2'
  // },
  benefitTitle: {
    fontSize: "1.2rem",
    fontWeight: 600,
    marginBottom: "10px",
    color: "white",
  },
  benefitDescription: {
    fontSize: "1rem",
    fontWeight: 400,
    color: "#dddddd",
  },
};

const mobileStyles = {
  container: {
    padding: "20px",
    background: "linear-gradient(to bottom right, black, #222 65%, #444)",
    color: "white",
    overflow: "hidden",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: "10px",
    color: "#00D1B2",
  },
  verticalBarContainer: {
    marginBottom: "20px",
  },
  verticalBarText: {
    fontSize: "1rem",
    textAlign: "center",
    color: "#dddddd",
  },
  subsectionTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    textAlign: "center",
    paddingBottom: "10px",
    paddingTop: "20px",
  },
  stepsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
    margin: "30px 0",
  },
  step: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px",
    width: "250px",
    height: "180px",
    borderRadius: "75px",
    boxShadow: "0px 5px 15px rgba(0, 209, 178, 0.5)",
    textAlign: "center",
  },
  stepDescription: {
    fontSize: "0.9rem",
    color: "#dddddd",
    marginTop: "10px",
  },
  icon: {
    fontSize: "2.5rem",
    color: "#00D1B2",
  },
  benefitsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
    gap: "20px",
    padding: "15px 0",
    borderRadius: "10px",
  },
  benefit: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    transition: "transform 0.3s, box-shadow 0.3s",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
    minHeight: "180px", // Set a minimum height
    overflow: "auto", // Content will scroll if it overflows vertically
  },
  benefitTitle: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "white",
  },
  benefitDescription: {
    fontSize: "0.9rem",
    color: "#dddddd",
  },
};

export default Merchants;
