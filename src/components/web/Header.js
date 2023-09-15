import React from 'react';

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
        height: '130px',   // Increased logo size from 40px to 50px
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
    }
};

function Header() {
    const scrollToSection = (sectionID) => {
        document.getElementById(sectionID).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header style={styles.header}>
            <div style={styles.logoContainer}>
                <img src="/logo.png" alt="PayX Logo" style={styles.logoImage} />
            </div>
            <nav style={styles.nav}>
                <div onClick={() => scrollToSection('home')} style={styles.navLink}>Home</div>
                <div onClick={() => scrollToSection('merchant')} style={styles.navLink}>Merchant</div>
                <div onClick={() => scrollToSection('customer')} style={styles.navLink}>Customer</div>
                <div onClick={() => scrollToSection('aboutUs')} style={styles.navLink}>Our Story</div>
            </nav>
        </header>
    );
}


export default Header;
