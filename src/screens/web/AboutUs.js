// src/AboutUs.js
import React from 'react';

const styles = {
    container: {
        padding: '30px 0',
        textAlign: 'center',
        background: 'radial-gradient(circle at center, #1a1a1a, black 65%)'
    },
    imagesContainer: {
        display: 'flex',
        justifyContent: 'center',  // Center the images
        marginBottom: '40px',
        alignItems: 'center',
    },
    imageBox: {
        position: 'relative',
        width: '300px',
        height: '300px',
        margin: '0 80px',  // Reduced margin for spacing to bring images closer
        marginBottom:'50px'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: '150px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    title: {
        color: '#00D1B2',
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: '10px'  // Added space above the title
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop:20,
        marginBottom: '10px'  // Space below the name
    },
    storyBox: {
        padding: '20px',
        borderRadius: '15px',
        width: '65%', // Adjusted width
        margin: '0 auto',
        marginBottom: '40px',  // Space between the story and images
        },
    header: {
        color: '#00D1B2',
        fontSize: '3rem',
        fontWeight: 700,
        marginBottom: '20px',
    },
    text: {
        color: 'white',
        fontSize: '1.2rem',
        fontWeight: 300,
        marginTop:20,
        lineHeight: '1.6', // Increase distance between each line
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
                
                <a href="https://www.linkedin.com/in/konrad-holtkamp-38484822b/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <div style={styles.imageBox}>
                        <div style={{...styles.image, backgroundImage: `url(/konrad.jpeg)`}}></div>
                        <div style={styles.name}>Konrad Holtkamp</div>
                        <div style={styles.title}>Business</div>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/robertoammirata/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <div style={styles.imageBox}>
                        <div style={{...styles.image, backgroundImage: `url(/roberto.jpg)`}}></div>
                        <div style={styles.name}>Roberto Ammirata</div>
                        <div style={styles.title}>Technology</div>
                    </div>
                </a>

            </div>
        </div>
    );
}

export default AboutUs;
