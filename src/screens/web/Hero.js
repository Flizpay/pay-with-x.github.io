import React from 'react';
import { useTranslation } from 'react-i18next';


function Hero() {
  const scrollToSection = (sectionID) => {
    document.getElementById(sectionID).scrollIntoView({ behavior: 'smooth' });
  };
    const { t } = useTranslation();
    const isMobile = window.innerWidth <= 768;
  
    const combinedContainerStyles = isMobile ? 
      { ...styles.container, ...styles.mobileContainer } : 
      styles.container;
  
    return (
      <div style={combinedContainerStyles}>
        <div style={styles.contentContainer}>
          <h1 style={styles.heroTitle}>{t('Hero.title')}</h1>
          <p style={styles.heroSubtitle}>{t('Hero.subtitle')}</p>
          <button onClick={() => scrollToSection('merchant')} style={styles.button}>
            {t('Hero.buttonText')}
          </button>
        </div>
        <div style={styles.logoContainer}>
          <img src="/mainIcon.png" alt="Mobile Payment Icon" style={styles.logoImage} />
        </div>
      </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '100px 100px',
        flexDirection: 'row',
        marginBottom: '50px'
    },
    mobileContainer: {
        flexDirection: 'column',
        padding: '50px 20px'
    },
    contentContainer: {
        flex: 1,
        paddingRight: '50px',
    },
    heroTitle: {
        fontSize: '3rem',
        fontWeight: 700,
        marginBottom: 20
    },
    heroSubtitle: {
        fontSize: '1.5rem',
        fontWeight: 300,
        marginBottom: 30
    },
    button: {
        backgroundColor: '#00D1B2',
        color: '#fff',
        border: 'none',
        padding: '15px 30px',
        fontSize: '1rem',
        borderRadius: 25,
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    logoContainer: {
        flex: 1,
        textAlign: 'right',
        paddingRight: '50px'
    },
    logoImage: {
        width: '79%',
        height: '100%',
    },
};

export default Hero;
