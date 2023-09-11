import React from 'react';
import { FaUserPlus, FaQrcode, FaMoneyCheckAlt, FaArrowRight, FaHandHoldingUsd, FaCut, FaEuroSign, FaShieldAlt, FaCreditCard, FaRegSmile } from 'react-icons/fa';

const styles = {
    container: {
        padding: '30px 5%',
        background: 'linear-gradient(to bottom right, black, #222 65%, #444)',
        color: 'white',
        padding: '50px 100px'
    },      
    title: {
        fontSize: '3rem',
        fontWeight: 700,
        marginBottom: '40px',
        textAlign: 'center',
        paddingBottom: '10px',
        color: '#00D1B2'
    },
    verticalBarContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '30px'
    },
    verticalBar: {
        width: '7px',
        height: '150px', // Setting a specific height for the bar
        backgroundColor: '#00D1B2',
        marginRight: '30px'
    },
    verticalBarText: {
        flex: 1,
        fontSize: '1.2rem',
        fontWeight: 400,
        color: '#dddddd',
        textAlign: 'justify'
    },
    subsection: {
        margin: '40px 0'
    },
    subsectionTitle: {
        fontSize: '1.7rem',
        fontWeight: 600,
        marginBottom: '60px',
        paddingBottom: '10px',
        textAlign: 'center'
    },
    stepsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px',
        margin: '50px 0'
    },
    step: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 209, 178, 0.00)', 
        padding: '20px',
        width: '230px',
        height: '230px',
        borderRadius: '90px',
        boxShadow: '0px 5px 15px rgba(0, 209, 178, 0.2)', 
        textAlign: 'center',
        transition: 'transform 0.3s, box-shadow 0.3s', 
    },
    stepDescription: {
        fontSize: '1rem',
        fontWeight: 400,
        color: '#dddddd',
        marginTop: '10px' // Adds a little space between the title and the description
    },    
    icon: {
        fontSize: '3rem',
        marginBottom: '15px',
        color: '#00D1B2'
    },
    arrowIcon: {
        fontSize: '2rem'
        },
    benefitsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 2fr)', 
        gap: '40px',
        padding: '60px 0', 
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Black with 50% opacity
        borderRadius: '20px',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.4)', // Made the shadow darker
        margin: '40px 0'
    },
    benefit: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px', // Added padding to give some space inside each benefit
        borderRadius: '10px', // Added border radius to round the edges a bit
        backgroundColor: 'rgba(0, 0, 0, 0.0)', // Black with 50% opacity
        transition: 'transform 0.3s, box-shadow 0.3s', // Added transitions for smoothness
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)', // Added a subtle shadow
        ':hover': { // Hover effect
            transform: 'scale(1.05)',
            boxShadow: '0px 5px 25px rgba(0, 0, 0, 0.2)', // Shadow gets slightly bigger on hover
        }
    },
    benefitIcon: {
        fontSize: '2.5rem',
        marginBottom: '15px',
        color: '#00D1B2'
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

function ForMerchants() {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Merchants</h2>
            <div style={styles.verticalBarContainer}>
                <div style={styles.verticalBar}></div>
                <p style={styles.verticalBarText}>
                We understand the frustrations of today's merchants. Payments are expensive and often 
                accompanied by opaque fees and complex rules. Additionally, it takes days 
                for funds to arrive in merchants' bank accounts. Consequently, some merchants opt for 
                cash-only transactions, even at the risk of missing out on business opportunities. 
                At PayX, we are revolutionizing how merchants conduct business. With our low fees, straightforward 
                onboarding process, and impeccable user experience, joining the PayX family has never been 
                easier. Make the switch and witness businesses truly thrive with cashless payments.
                </p>
            </div>
            <div style={styles.subsection}>
                {/* Introduction */}
                <h5 style={styles.subsectionTitle}>How it works </h5>
            </div>

            <div style={styles.subsection}>
                {/* How It Works */}
                <div style={styles.stepsContainer}>
                <div style={styles.step}>
                <FaUserPlus style={styles.icon} />
                <p style={styles.benefitTitle}>Sign Up</p>
                <p style={styles.stepDescription}>Swiftly create your merchant account and get going within a day.</p>
            </div>

            <FaArrowRight style={{ ...styles.icon, ...styles.arrowIcon }} />

            <div style={styles.step}>
                <FaQrcode style={styles.icon} />
                <p style={styles.benefitTitle}>Display QR-code</p>
                <p style={styles.stepDescription}>Display QR-codes in your store and webshop.</p>
            </div>

            <FaArrowRight style={{ ...styles.icon, ...styles.arrowIcon }} />

            <div style={styles.step}>
                <FaMoneyCheckAlt style={styles.icon} />
                <p style={styles.benefitTitle}>Get Paid</p>
                <p style={styles.stepDescription}>Instantly receive money on your bank account.</p>
            </div>

                </div>
            </div>

            <div style={styles.subsection}>
                {/* Benefits */}
                <p style={styles.subsectionTitle}>Your benefits </p>

                {/* Benefits Grid */}
                <div style={styles.benefitsContainer}>
                    <div style={styles.benefit}>
                        <FaHandHoldingUsd style={styles.benefitIcon} />
                        <p style={styles.benefitTitle}>Cut Fees</p>
                        <p style={styles.benefitDescription}>Pay substantially lower transaction fees by eliminating middlemen.</p>
                    </div>

                    <div style={styles.benefit}>
                        <FaCut style={styles.benefitIcon} />
                        <p style={styles.benefitTitle}>Cut Liquidity Costs</p>
                        <p style={styles.benefitDescription}>Enhance your liquidity with instant payments.</p>
                    </div>
                    <div style={styles.benefit}>
                        <FaEuroSign style={styles.benefitIcon} />
                        <p style={styles.benefitTitle}>No Fixed Fees</p>
                        <p style={styles.benefitDescription}>You only pay for the transactions you make.</p>
                    </div>

                    <div style={styles.benefit}>
                        <FaShieldAlt style={styles.benefitIcon} />
                        <p style={styles.benefitTitle}>Zero Hardware Costs</p>
                        <p style={styles.benefitDescription}>Begin with zero hardware costs thanks to our straightforward technical setup.</p>
                    </div>
                    
                    <div style={styles.benefit}>
                        <FaShieldAlt style={styles.benefitIcon} />
                        <p style={styles.benefitTitle}>Increased Security</p>
                        <p style={styles.benefitDescription}>Advanced security protocols to reduce fraudulent transactions..</p>
                    </div>


                    <div style={styles.benefit}>
                        <FaCreditCard style={styles.benefitIcon} />
                        <p style={styles.benefitTitle}>Simple Experience</p>
                        <p style={styles.benefitDescription}>Use our simple and fast customer experience for cashiers.</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ForMerchants;
