import React from "react";
import {
  FaQrcode,
  FaArrowRight,
  FaEuroSign,
  FaShieldAlt,
  FaMobileAlt,
  FaRegSmile,
  FaArrowDown
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Customers() {
  const { t } = useTranslation();
  const isMobile = window.innerWidth <= 768;

  const styles = isMobile ? mobileStyles : desktopStyles;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{t("Customers.title")}</h2>
      <div style={styles.imageContainer}>
        <div style={styles.imageWrapper}>
          <div style={styles.imageTitle}>
            {t("Customers.imageTitles.Tap")}
          </div>
          <img
            src="/Lock-screen.png"
            alt="Lock screen"
            style={styles.imageStyle}
          />
        </div>

        {isMobile ? (
          <FaArrowDown style={styles.arrowStyle} />
          ) : (
          <FaArrowRight style={styles.arrowStyle} />
          )}

        <div style={styles.imageWrapper}>
          <div style={styles.imageTitle}>
            {t("Customers.imageTitles.Scan")}
          </div>
          <img
            src="/Scan-screen.png"
            alt="Scan screen"
            style={styles.imageStyle}
          />
        </div>
        {isMobile ? (
          <FaArrowDown style={styles.arrowStyle} />
          ) : (
          <FaArrowRight style={styles.arrowStyle} />
          )}      
            <div style={styles.imageWrapper}>
          <div style={styles.imageTitle}>
            {t("Customers.imageTitles.Pay")}
          </div>
          <img
            src="/Paid-screen.png"
            alt="Paid screen"
            style={styles.imageStyle}
          />
        </div>
      </div>
      <div style={styles.subsection}>
        <p style={styles.subsectionTitle}>{t("Customers.subsectionTitle")}</p>
        <div style={styles.benefitsContainer}>
          <div style={styles.benefit}>
            <FaEuroSign style={styles.benefitIcon} />
            <p style={styles.benefitTitle}>
              {t("Customers.benefits.Cashback.title")}
            </p>
            <p style={styles.benefitDescription}>
              {t("Customers.benefits.Cashback.description")}
            </p>
          </div>
          <div style={styles.benefit}>
            <FaRegSmile style={styles.benefitIcon} />
            <p style={styles.benefitTitle}>
              {t("Customers.benefits.DataInEurope.title")}
            </p>
            <p style={styles.benefitDescription}>
              {t("Customers.benefits.DataInEurope.description")}
            </p>
          </div>
          <div style={styles.benefit}>
            <FaQrcode style={styles.benefitIcon} />
            <p style={styles.benefitTitle}>
              {t("Customers.benefits.TapScanPay.title")}
            </p>
            <p style={styles.benefitDescription}>
              {t("Customers.benefits.TapScanPay.description")}
            </p>
          </div>
          <div style={styles.benefit}>
            <FaShieldAlt style={styles.benefitIcon} />
            <p style={styles.benefitTitle}>
              {t("Customers.benefits.EnhancedSecurity.title")}
            </p>
            <p style={styles.benefitDescription}>
              {t("Customers.benefits.EnhancedSecurity.description")}
            </p>
          </div>
          <div style={styles.benefit}>
            <FaMobileAlt style={styles.benefitIcon} />
            <p style={styles.benefitTitle}>
              {t("Customers.benefits.UniversalCashless.title")}
            </p>
            <p style={styles.benefitDescription}>
              {t("Customers.benefits.UniversalCashless.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const desktopStyles = {
  container: {
    padding: "30px 5%",
    background: "linear-gradient(to bottom right, #444, #1f6865 30%, #00D1B2)",
    color: "white",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 700,
    marginBottom: "40px",
    textAlign: "center",
    paddingBottom: "10px",
    color: "white",
  },
  imageWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "10px", // Add some right margin for space between images
    marginLeft: "10px", // Add some left margin for space between images
  },
  imageTitle: {
    marginBottom: "10px", // Space between the title and image
    fontWeight: 600, // Making it bold
    fontSize: "1.5rem",
    color: "white",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 0",
  },
  imageStyle: {
    width: "300px", // Adjust the width to desired value
    height: "570px", // Restricting the max height
    borderRadius: "10px",
    marginRight: "10px", // Add some right margin for space between images
    marginLeft: "10px", // Add some left margin for space between images
  },
  arrowStyle: {
    fontSize: "4rem", // Adjust size as needed
    color: "white", // White color for the arrow
    margin: "0 20px", // Margins to provide spacing between the arrows and images
  },
  subsection: {
    margin: "40px 0",
  },
  subsectionTitle: {
    fontSize: "1.7rem",
    fontWeight: 600,
    paddingTop: "90px",
    paddingBottom: "10px",
    textAlign: "center",
  },
  benefitsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", // Increased min-width for better spacing
    gap: "30px",
    padding: "30px 0", // Added more padding
    borderRadius: "20px",
    margin: "40px 0",
  },
  benefit: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "20px", // Added padding to give some space inside each benefit
    borderRadius: "10px", // Added border radius to round the edges a bit
  },
  benefitIcon: {
    fontSize: "2.5rem",
    marginBottom: "15px",
    color: "white",
  },
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
      padding: '15px 5%',
      background: '#00D1B2',
      color: 'white',    
  },
  title: {
      fontSize: '2rem',
      textAlign: 'center',
      marginBottom: '20px',
      color: 'white'
  },
  imageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
  },
  imageStyle: {
      width: '80%',
      marginBottom: '20px'
  },
  arrowStyle: {
      fontSize: '2rem',
      margin: '10px'
  },
  imageWrapper: {
      textAlign: 'center', // Center-aligns inline-level or inline-block children
  },
  imageTitle: {
      marginBottom: '10px',
      fontWeight: 600,
      fontSize: '1.4rem',
      color: 'white',
      textAlign: 'center' // Centering the text
  },
  subsection: {
      marginTop: '20px'
  },
  subsectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      textAlign: 'center',
      paddingBottom: '10px',
      paddingTop: '20px'
    },
    benefitsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns
      justifyContent: 'center', // Center the items
      gridGap: '20px', // Space between grid items
      marginTop: '60px'
    },
  benefit: {
      textAlign: 'center',
      margin: '10px',
      flex: 1,
      minWidth: 'calc(50% - 20px)',
      flexDirection: 'column',  // Add this
      alignItems: 'center',  // Add this
      justifyContent: 'center'  // Add this
    },
  benefitIcon: {
      fontSize: '2rem',
      marginBottom: '10px'
  },
  benefitTitle: {
      fontSize: '1rem',
      fontWeight: 600
  },
  benefitDescription: {
      fontSize: '0.8rem',
      minHeight: '40px'  // Adjust as needed
    }
};


export default Customers;
