// src/Footer.js
import React from 'react';

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
        // Removed fontSize and fontWeight, as they're not relevant for an image
        height: '130px',   // Increased logo size from 40px to 50px
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

function Footer() {
    const scrollToSection = (sectionID) => {
        document.getElementById(sectionID).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div style={styles.footer}>
            <div style={styles.footerTop}>
                {/* Replace the "PayX" text with your logo */}
                <img src="/logo.png" alt="PayX Logo" style={styles.logo} />
                <div style={styles.nav}>
                    <div onClick={() => scrollToSection('home')} style={styles.footerLink}>Home</div>
                    <a href="/services" style={styles.footerLink}>Services</a>
                    <a href="/contact" style={styles.footerLink}>Contact</a>
                </div>
            </div>
            <div style={styles.footerBottom}>
                <span>&copy; {new Date().getFullYear()} PayX. All Rights Reserved.</span>
                <div style={styles.socialContainer}>
                    <span className="fa fa-facebook" style={styles.socialIcon}></span>
                    <span className="fa fa-twitter" style={styles.socialIcon}></span>
                    <span className="fa fa-linkedin" style={styles.socialIcon}></span>
                    <span className="fa fa-instagram" style={styles.socialIcon}></span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
