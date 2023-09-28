// src/Footer.js
import React from 'react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();
  
    const scrollToSection = (sectionID) => {
      document.getElementById(sectionID).scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <div style={styles.footer}>
        <div style={styles.footerTop}>
        <div onClick={() => scrollToSection('home')}>
          <img src="/Flizlogo.png" alt="Fliz Logo" style={styles.logo} />
          </div>
          <div style={styles.nav}>
    <div style={styles.footerLink}>
      info@flizpay.com<br />
      +44 7984262185
    </div>
  </div>

</div>
        <div style={styles.footerBottom}>
        <span>{t('Footer.copyright', { year: currentYear })}</span>
          <div style={styles.socialContainer}>
            <a href="https://twitter.com/FlizPay" target="_blank" rel="noopener noreferrer">
              <FaTwitter style={styles.socialIcon} />
            </a>
            <a href="https://www.linkedin.com/company/flizpay" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
    );
  }

const styles = {
    footer: {
        background: '#111',
        color: 'white',
        padding: '50px 10%',
    },
    footerTop: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',  // Changed back to 'center'
      borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
      paddingBottom: '20px',
      marginBottom: '20px',
    },
    logo: {
        height: '130px',  
        width: '140px',
        marginTop: '-3.5rem', 
        marginBottom: '-2rem', 
        cursor: 'pointer', 
        ':hover': {
            color: '#00D1B2',
        },
    },
    nav: {
        display: 'flex',
        gap: '30px',
    },
    footerLink: {
      color: 'white',
      textDecoration: 'none',
      transition: 'color 0.2s',
      lineHeight: '2',  // For more space between lines
      position: 'relative',  // Added
      top: '-10px',  // Move it 20px higher
    },
    footerBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px',
    },
    socialContainer: {
        display: 'flex',
        gap: '15px',
    },
    socialIcon: {
        fontSize: '1.5rem',
        transition: 'color 0.2s',
        cursor: 'pointer',
        color: 'white'
    },
};

export default Footer;
