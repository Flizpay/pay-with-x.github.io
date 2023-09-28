import React from 'react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

const styles = {
    footer: {
        background: '#111',
        color: 'white',
        padding: '20px 10px',
    },
    footerTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',  // This should already center the items vertically.
        borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
        paddingBottom: '20px',
        marginBottom: '20px',
    },
    logo: {
        height: '110px',
        width: '90px',
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '10px',
    },
    footerLink: {
        color: 'white',
        textDecoration: 'none',
        transition: 'color 0.2s',
        cursor: 'pointer',
        lineHeight: '2',
        position: 'relative',
        top: '-10px',
      },
    footerBottom: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10px',
    },
    socialContainer: {
        display: 'flex',
        gap: '10px',
    },
    socialIcon: {
        fontSize: '1.2rem',
        transition: 'color 0.2s',
        cursor: 'pointer',
        color: 'white'
    },
};

function Footer() {
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
          <span>&copy; {new Date().getFullYear()} Fliz. All Rights Reserved.</span>
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
  
export default Footer;
