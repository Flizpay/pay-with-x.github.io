// src/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
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
          <img src="/logo.png" alt="PayX Logo" style={styles.logo} />
          <div style={styles.nav}>
            <div onClick={() => scrollToSection('home')} style={styles.footerLink}>{t('Footer.home')}</div>
            <a href="/contact" style={styles.footerLink}>{t('Footer.contact')}</a>
          </div>
        </div>
        <div style={styles.footerBottom}>
        <span>{t('Footer.copyright', { year: currentYear })}</span>
          <div style={styles.socialContainer}>
            <FaFacebook style={styles.socialIcon} />
            <FaTwitter style={styles.socialIcon} />
            <FaLinkedin style={styles.socialIcon} />
            <FaInstagram style={styles.socialIcon} />
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
        alignItems: 'center',
        borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
        paddingBottom: '20px',
        marginBottom: '20px',
    },
    logo: {
        height: '130px',  
        width: '140px',
        marginTop: '-3.5rem', // Adjust this value to keep the footer size the same
        marginBottom: '-2rem', // Adjust this value to keep the footer size the same
    },
    nav: {
        display: 'flex',
        gap: '30px',
    },
    footerLink: {
        color: 'white',
        textDecoration: 'none',
        transition: 'color 0.2s',
        cursor: 'pointer', // Makes it look clickable
        ':hover': {
            color: '#00D1B2',
        },
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
        ':hover': {
            color: '#00D1B2',
        },
    },
};

export default Footer;
