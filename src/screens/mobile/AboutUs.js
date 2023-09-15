// src/AboutUs.js
import React from 'react';

const styles = {
    container: {
        padding: '10px 0',
        textAlign: 'center',
        background: 'radial-gradient(circle at center, #1a1a1a, black 65%)'
    },
    imagesContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
    },
    imageBox: {
        position: 'relative',
        width: '150px',
        height: '150px',
        margin: '10px 0',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: '75px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    title: {
        position: 'absolute',
        bottom: '-25px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#00D1B2',
        fontWeight: 'bold',
        fontSize: 16
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
        textAlign: 'justify'
    }
};

function AboutUs() {
    return (
        <div style={styles.container} id="about">
            <div style={styles.storyBox}>
                <h3 style={styles.header}>Our Story</h3>
                <p style={styles.text}>
                We're a dedicated team with over 10+ years of experience in payments and cutting-edge 
                technology. For too long, we have witnessed the complexities and steep fees synonymous 
                with transactions. That's why we came together to change the narrative. Our mission is 
                straightforward: reduce socialized payment costs and facilitate the transition to a 
                cashless society. By cutting out middle-men, we aim to lower expenses not just for 
                large corporations, but also make it feasible for small businesses to offer 
                cheap cashless payments.  At PayX, we are more than just experts in our 
                fields – we are innovators fueled by a shared passion to redefine the world of 
                transactions. Join us as we pave the way to a new era in payments.
                </p>
            </div>
            <div style={styles.imagesContainer}>
                <div style={styles.imageBox}>
                    <div style={{...styles.image, backgroundImage: `url(/konrad.jpeg)`}}></div>
                    <div style={styles.title}>Business</div>
                </div>
                <div style={styles.imageBox}>
                    <div style={{...styles.image, backgroundImage: `url(/roberto.jpg)`}}></div>
                    <div style={styles.title}>Technology</div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
