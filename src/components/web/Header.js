import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t, i18n } = useTranslation();
  
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    };
  

    const scrollToSection = (sectionID) => {
      document.getElementById(sectionID).scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
        <header style={styles.header}>
          <div style={styles.logoContainer}>
            <img src="/Flizlogo.png" alt="Fliz Logo" style={styles.logoImage} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <nav style={styles.nav}>
              <div onClick={() => scrollToSection('merchant')} style={styles.navLink}>
                {t('header.merchant')}
              </div>
              <div onClick={() => scrollToSection('customer')} style={styles.navLink}>
                {t('header.customer')}
              </div>
              <div onClick={() => scrollToSection('aboutUs')} style={styles.navLink}>
                {t('header.ourStory')}
              </div>
            </nav>
            <div style={styles.languageContainer}>
              <span onClick={() => changeLanguage('en')}>{t('header.language.english')}</span>
              <span>|</span>
              <span onClick={() => changeLanguage('de')}>{t('header.language.german')}</span>
            </div>
          </div>
        </header>
      );
    }

const styles = {
  header: {
      backgroundColor: '#000',
      color: '#00C853',
      padding: '0px 100px',  // Increased left padding from 30px to 50px
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  logoContainer: {
      display: 'flex',
      alignItems: 'center',
      marginRight: 'auto'  
  },
  logoImage: {
      height: '130px',
      width: '140px',
      marginRight: '10px'
  },
  nav: {
      display: 'flex',
      gap: '20px'
  },
  navLink: {
      color: '#00D1B2',
      textDecoration: 'none',
      fontWeight: 500,
      cursor: 'pointer'
  },
  languageContainer: {
      marginLeft: '50px',
      display: 'flex',
      gap: '10px',
      cursor: 'pointer',
      color: 'white'
    }
};

export default Header;
