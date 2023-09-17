// src/AboutUs.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutUs() {
    const { t } = useTranslation();
    
    return (
        <div style={styles.container} id="about">
            <div style={styles.storyBox}>
                <h3 style={styles.header}>{t('AboutUs.header')}</h3>
                <p style={styles.text}>{t('AboutUs.text')}</p>
            </div>
            <div style={styles.imagesContainer}>
                <a href="https://www.linkedin.com/in/konrad-holtkamp-38484822b/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <div style={styles.imageBox}>
                        <div style={{...styles.image, backgroundImage: `url(/konrad.jpeg)`}}></div>
                        <div style={styles.name}>{t('AboutUs.KonradName')}</div>
                        <div style={styles.title}>{t('AboutUs.KonradTitle')}</div>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/robertoammirata/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <div style={styles.imageBox}>
                        <div style={{...styles.image, backgroundImage: `url(/roberto.jpg)`}}></div>
                        <div style={styles.name}>{t('AboutUs.RobertoName')}</div>
                        <div style={styles.title}>{t('AboutUs.RobertoTitle')}</div>
                    </div>
                </a>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '10px 0',
        textAlign: 'center',
        background: 'radial-gradient(circle at center, #1a1a1a, black 65%)',
        overflow: 'hidden'  

    },
    imagesContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
    },
    imageBox: {
        position: 'relative',
        width: '200px',
        height: '200px',
        margin: '0 100px 130px 100px',  // Increased marginBottom from 50px to 80px
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: '75px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    title: {
        color: '#00D1B2',
        fontWeight: 'bold',
        fontSize: '1.3rem',
        marginTop: '10px',  // Added space above the title
        marginBottom:'10px'
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        marginTop:20,
        whiteSpace: 'nowrap',  // This will ensure the name stays in a single line

    },
    storyBox: {
        padding: '10px',
        borderRadius: '10px',
        width: '90%',
        margin: '0 auto',
        marginBottom: '20px',
    },
    header: {
        color: '#00D1B2',
        fontSize: '2rem',
        fontWeight: 600,
        marginBottom: '10px',
    },
    text: {
        color: 'white',
        fontSize: '1rem',
        fontWeight: 300,
        lineHeight: '1.4',
        textAlign: 'center'
    }
};

export default AboutUs;
