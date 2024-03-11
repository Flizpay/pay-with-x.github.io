// src/Footer.js
import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const isMobile = window.innerWidth <= 768;
  const navigate = useNavigate();

  const combinedFooterStyles = isMobile ? styles.mobileFooter : styles.footer;
  const combinedFooterTopStyles = isMobile
    ? styles.mobileFooterTop
    : styles.footerTop;
  const combinedNavStyles = isMobile ? styles.mobileNav : styles.nav;
  const combinedFooterBottomStyles = isMobile
    ? styles.mobileFooterBottom
    : styles.footerBottom;
  const combinedSocialIconStyles = isMobile
    ? styles.mobileSocialIcon
    : styles.socialIcon;
  const combinedFooterLink = isMobile
    ? styles.mobileFooterLink
    : styles.footerLink;
  const navLink = isMobile ? styles.mobileNavLink : styles.navLink;

  return (
    <div style={combinedFooterStyles}>
      <div style={combinedFooterTopStyles}>
        <div onClick={() => navigate("/imprint")} style={navLink}>
          Imprint
        </div>
        <div style={combinedNavStyles}>
          <div style={combinedFooterLink}>
            info@flizpay.de
            <br />
          </div>
        </div>
        {isMobile && (
          <div style={styles.iconContainer}>
            <a
              href="https://twitter.com/FlizPay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter style={combinedSocialIconStyles} />
            </a>
            <a
              href="https://www.linkedin.com/company/flizpay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={combinedSocialIconStyles} />
            </a>
          </div>
        )}
      </div>
      <div style={combinedFooterBottomStyles}>
        <span>&copy; {currentYear} {t('Footer.copyright')}</span>
      </div>
    </div>
  );
}

const styles = {
  mobileNavLink: {
    color: "white",
    textDecoration: "none",
    transition: "color 0.2s",
    cursor: "pointer",
    lineHeight: "2",
    position: "relative",
    marginLeft: "5px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: 500,
    cursor: "pointer",
  },
  footer: {
    background: "black",
    color: "white",
    padding: "50px 10%",
  },
  footerTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // Changed back to 'center'
    borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
    paddingBottom: "20px",
    marginBottom: "20px",
  },
  logo: {
    height: "130px",
    width: "140px",
    marginTop: "-3.5rem",
    marginBottom: "-2rem",
    cursor: "pointer",
    ":hover": {
      color: "#00D1B2",
    },
  },
  nav: {
    display: "flex",
    gap: "30px",
  },
  footerLink: {
    color: "white",
    textDecoration: "none",
    transition: "color 0.2s",
    lineHeight: "2", // For more space between lines
    position: "relative", // Added
    top: "-10px", // Move it 20px higher
  },
  footerBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
  },
  socialContainer: {
    display: "flex",
    gap: "15px",
  },
  socialIcon: {
    fontSize: "1.5rem",
    transition: "color 0.2s",
    cursor: "pointer",
    color: "white",
  },

  mobileFooter: {
    background: "#111",
    color: "white",
    padding: "20px 10px",
  },
  mobileFooterTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
    paddingBottom: "20px",
    marginBottom: "20px",
    position: "relative", // Added this line
  },
  IconContainer: {
    position: "absolute",
    right: "0",
    bottom: "0",
  },
  mobileLogo: {
    height: "110px",
    width: "90px",
  },
  mobileNav: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "10px",
  },
  mobileFooterLink: {
    color: "white",
    textDecoration: "none",
    transition: "color 0.2s",
    cursor: "pointer",
    lineHeight: "2",
    position: "relative",
  },
  mobileFooterBottom: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10px",
  },
  mobileSocialIcon: {
    fontSize: "1.2rem",
    transition: "color 0.2s",
    cursor: "pointer",
    color: "white",
    marginRight: "10px", // Added this line
  },
};

export default Footer;
