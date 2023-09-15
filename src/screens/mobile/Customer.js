import React from 'react';
import { FaQrcode, FaArrowRight, FaEuroSign, FaShieldAlt, FaCreditCard, FaRegSmile, FaArrowDown } from 'react-icons/fa';

const mobileStyles = {
    container: {
        padding: '15px 5%',
        background: '#00D1B2',
        color: 'white'
    },
    title: {
        fontSize: '2rem',
        textAlign: 'center',
        marginBottom: '20px',
        color: 'white'
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    imageStyle: {
        width: '80%',
        marginBottom: '20px'
    },
    arrowStyle: {
        fontSize: '2rem',
        margin: '10px'
    },
    imageWrapper: {
        textAlign: 'center', // Center-aligns inline-level or inline-block children
    },
    imageTitle: {
        marginBottom: '10px',
        fontWeight: 600,
        fontSize: '1.3rem',
        color: 'white',
        textAlign: 'center' // Centering the text
    },
    subsection: {
        marginTop: '20px'
    },
    subsectionTitle: {
        fontSize: '1.5rem',
        fontWeight: '600',
        textAlign: 'center',
        paddingBottom: '10px',
        paddingTop: '20px'
      },
      benefitsContainer: {
        display: 'flex',
        flexDirection: 'row',  // Change to row for side by side
        flexWrap: 'wrap',      // Wrap onto next line when out of space
        alignItems: 'center',
        justifyContent: 'center'  // Center the items
    },
    benefit: {
        textAlign: 'center',
        margin: '10px',
        flex: 1,  // Allows item to take up equal space
        minWidth: 'calc(50% - 20px)'  // Ensures at least two items per row
    },
    benefitIcon: {
        fontSize: '2rem',
        marginBottom: '10px'
    },
    benefitTitle: {
        fontSize: '1rem',
        fontWeight: 600
    },
    benefitDescription: {
        fontSize: '0.8rem'
    }
};

function Customers() {
    return (
        <div style={mobileStyles.container}>
            <h2 style={mobileStyles.title}>Customers</h2>
            <div style={mobileStyles.imageContainer}>
            <div style={mobileStyles.imageWrapper}>
                <div style={mobileStyles.imageTitle}>Tap</div>
                <img src="/Lock-screen.png" alt="Lock screen" style={mobileStyles.imageStyle} />
            </div>
            <FaArrowDown style={mobileStyles.arrowStyle} />
            <div style={mobileStyles.imageWrapper}>
                <div style={mobileStyles.imageTitle}>Scan</div>
                <img src="/Scan-screen.png" alt="Scan screen" style={mobileStyles.imageStyle} />
            </div>
            <FaArrowDown style={mobileStyles.arrowStyle} />
            <div style={mobileStyles.imageWrapper}>
                <div style={mobileStyles.imageTitle}>Pay</div>
                <img src="/Paid-screen.png" alt="Paid screen" style={mobileStyles.imageStyle} />
            </div>
            </div>
            <div style={mobileStyles.subsection}>
                <p style={mobileStyles.subsectionTitle}>Your Benefits</p>
                <div style={mobileStyles.benefitsContainer}>
                    {/* Each benefit can be generated similarly */}
                    <div style={mobileStyles.benefit}>
                        <FaEuroSign style={mobileStyles.benefitIcon} />
                        <p style={mobileStyles.benefitTitle}>Cashback</p>
                        <p style={mobileStyles.benefitDescription}>Cashback on par with top systems.</p>
                    </div>
                    <div style={mobileStyles.benefit}>
                        <FaRegSmile style={mobileStyles.benefitIcon} />
                        <p style={mobileStyles.benefitTitle}>Data in Europe</p>
                        <p style={mobileStyles.benefitDescription}>All data servers are based in Europe.</p>
                    </div>
                    <div style={mobileStyles.benefit}>
                        <FaQrcode style={mobileStyles.benefitIcon} />
                        <p style={mobileStyles.benefitTitle}>Tap. Scan. Paid.</p>
                        <p style={mobileStyles.benefitDescription}>Ease of payment both online and offline.</p>
                    </div>
                    <div style={mobileStyles.benefit}>
                        <FaShieldAlt style={mobileStyles.benefitIcon} />
                        <p style={mobileStyles.benefitTitle}>Enhanced Security</p>
                        <p style={mobileStyles.benefitDescription}>State-of-the-art security technology.</p>
                    </div>
                    {/* More benefits here */}
                </div>
            </div>
        </div>
    );
}

export default Customers;
