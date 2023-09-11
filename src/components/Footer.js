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
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#00D1B2',
    },
    nav: {
        display: 'flex',
        gap: '30px',
    },
    footerLink: {
        color: 'white',
        textDecoration: 'none',
        transition: 'color 0.2s',
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
    return (
        <div style={styles.footer}>
            <div style={styles.footerTop}>
                <span style={styles.logo}>PayX</span>
                <div style={styles.nav}>
                    <a href="/about" style={styles.footerLink}>About</a>
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
