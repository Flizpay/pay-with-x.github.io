import React from 'react';
import { FaUserPlus, FaQrcode, FaMoneyCheckAlt, FaArrowRight, FaHandHoldingUsd, FaCut, FaEuroSign, FaShieldAlt, FaCreditCard, FaRegSmile } from 'react-icons/fa';

const styles = {
    container: {
        padding: '30px 5%',
        background: 'linear-gradient(to bottom right, #444, #1f6865 30%, #00D1B2)',
        color: 'white'
    },      
    title: {
        fontSize: '3rem',
        fontWeight: 700,
        marginBottom: '40px',
        textAlign: 'center',
        paddingBottom: '10px',
        color: 'white'
    },
    imageWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: '10px',  // Add some right margin for space between images
        marginLeft: '10px',   // Add some left margin for space between images
    },
    imageTitle: {
        marginBottom: '10px', // Space between the title and image
        fontWeight: 600,      // Making it bold
        fontSize: '1.5rem',
        color: 'white'
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '20px 0'
    },
    imageStyle: {
        width: '330px', // Adjust the width to desired value
        height: '570px', // Restricting the max height
        borderRadius: '10px',
        marginRight: '10px',  // Add some right margin for space between images
        marginLeft: '10px',   // Add some left margin for space between images
    },
    arrowStyle: {
        fontSize: '4rem', // Adjust size as needed
        color: 'white',   // White color for the arrow
        margin: '0 20px'  // Margins to provide spacing between the arrows and images
    },
    subsection: {
        margin: '40px 0'
    },
    subsectionTitle: {
        fontSize: '1.7rem',
        fontWeight: 600,
        paddingTop: '90px',
        paddingBottom: '10px',
        textAlign: 'center'
    },   
    icon: {
        fontSize: '3rem',
        marginBottom: '15px',
        color: '#00D1B2'
    },
    benefitsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', // Increased min-width for better spacing
        gap: '40px',
        padding: '30px 0', // Added more padding
        borderRadius: '20px',
        margin: '40px 0'
    },
    benefit: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px', // Added padding to give some space inside each benefit
        borderRadius: '10px', // Added border radius to round the edges a bit
    },
    benefitIcon: {
        fontSize: '2.5rem',
        marginBottom: '15px',
        color: 'white'
    },
    benefitTitle: {
        fontSize: '1.2rem',
        fontWeight: 600,
        marginBottom: '10px',
        color: 'white'
    },
    benefitDescription: {
        fontSize: '1rem',
        fontWeight: 400,
        color: '#dddddd'
    }
};

function Customers() {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Customers</h2>
            <div style={styles.imageContainer}>
                <div style={styles.imageWrapper}>
                    <span style={styles.imageTitle}>Tap</span>
                    <img src="/Lock-screen.png" alt="Lock screen " style={styles.imageStyle} />
                </div>
                <FaArrowRight style={styles.arrowStyle} />
                <div style={styles.imageWrapper}>
                    <span style={styles.imageTitle}>Scan</span>
                    <img src="/Scan-screen.png" alt="Scan screen" style={styles.imageStyle} />
                </div>
                <FaArrowRight style={styles.arrowStyle} />
                <div style={styles.imageWrapper}>
                    <span style={styles.imageTitle}>Pay</span>
                    <img src="/Paid-screen.png" alt="Paid screen" style={styles.imageStyle} />
                </div>
            </div>

            <div style={styles.subsection}>
                {/* Benefits */}
                <p style={styles.subsectionTitle}>Your benefits </p>

                {/* Benefits Grid */}
                <div style={styles.benefitsContainer}>
                <div style={styles.benefit}>
                    <FaEuroSign style={styles.benefitIcon} />
                    <p style={styles.benefitTitle}>Cashback</p>
                    <p style={styles.benefitDescription}>Get a cashback on par with the most popular cashback systems.</p>
                </div>
                <div style={styles.benefit}>
                    <FaRegSmile style={styles.benefitIcon} />
                    <p style={styles.benefitTitle}>Data in Europe</p>
                    <p style={styles.benefitDescription}>All our data servers are based in Europe.</p>
                </div>
                <div style={styles.benefit}>
                    <FaQrcode style={styles.benefitIcon} />
                    <p style={styles.benefitTitle}>Tap. Scan. Paid.</p>
                    <p style={styles.benefitDescription}>Enjoy the ease of “Tap. Scan. Pay.” for both online and offline.</p>
                </div>
                <div style={styles.benefit}>
                    <FaShieldAlt style={styles.benefitIcon} />
                    <p style={styles.benefitTitle}>Enhanced Security</p>
                    <p style={styles.benefitDescription}>Increase security with our state-of-the-art technology.</p>
                </div>
                <div style={styles.benefit}>
                    <FaCreditCard style={styles.benefitIcon} />
                    <p style={styles.benefitTitle}>Universal Cashless</p>
                    <p style={styles.benefitDescription}>Pay cashless everywhere. PayX appeals even to the smallest corner shop.</p>
                </div>
                </div>

            </div>
        </div>
    );
}

export default Customers;
