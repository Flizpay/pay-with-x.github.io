import React from 'react';

const styles = {
    footer: {
        background: '#111',
        color: 'white',
        padding: '20px 10px',
    },
    footerTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',  // Align items to the top
        borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
        paddingBottom: '10px',
        marginBottom: '10px',
    },
    logo: {
        height: '80px',
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
    },
};

function Footer() {
    const scrollToSection = (sectionID) => {
        document.getElementById(sectionID).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div style={styles.footer}>
            <div style={styles.footerTop}>
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
