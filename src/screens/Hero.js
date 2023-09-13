import React from 'react';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '100px 100px',
        marginBottom: '50px'  // Add this line
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
    logoIconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: '#00C853', // for icon color
    }
};

function Hero() {
    return (
        <div style={styles.container}>
            <div style={styles.contentContainer}>
                <h1 style={styles.heroTitle}>We Make Payments for Everyone!</h1>
                <p style={styles.heroSubtitle}>Mobile payments made instant, easy, and secure.</p>
                <button style={styles.button}>Learn More</button>
            </div>
            <div style={styles.logoContainer}>
                <img src="/mainIcon.png" alt="Mobile Payment Icon" style={styles.logoImage} />
            </div>
        </div>
    );
}

export default Hero;
