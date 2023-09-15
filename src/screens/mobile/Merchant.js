import React from 'react';
import { FaUserPlus, FaQrcode, FaTimesCircle, FaEuroSign, FaRocket, FaCut, FaPlug, FaShieldAlt, FaArrowDown,  FaArrowRight} from 'react-icons/fa';

const mobileStyles = {
  container: {
    padding: '20px',
    background: 'linear-gradient(to bottom right, black, #222 65%, #444)',
    color: 'white'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: '10px',
    color: '#00D1B2'
  },
  verticalBarContainer: {
    marginBottom: '20px'
  },
  verticalBarText: {
    fontSize: '1rem',
    textAlign: 'justify',
    color: '#dddddd'
  },
  subsectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom: '10px',
    paddingTop: '20px'
  },
  stepsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
    margin: '30px 0'
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px',
    width: '250px',
    height: '180px',
    borderRadius: '75px',
    boxShadow: '0px 5px 15px rgba(0, 209, 178, 0.5)',
    textAlign: 'center'
  },
  stepDescription: {
    fontSize: '0.9rem',
    color: '#dddddd',
    marginTop: '10px'
  },
  icon: {
    fontSize: '2.5rem',
    color: '#00D1B2'
  },
  benefitsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    padding: '15px 0',
    borderRadius: '10px'
  },
  benefit: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
  },
  benefitTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'white'
  },
  benefitDescription: {
    fontSize: '0.9rem',
    color: '#dddddd'
  }

};

function ForMerchantsMobile() {
  return (
    <div style={mobileStyles.container}>
      <h2 style={mobileStyles.title}>Merchants</h2>
      
      <div style={mobileStyles.verticalBarContainer}>
      <p style={mobileStyles.verticalBarText}>
                We understand the frustrations of today's merchants. Payments are expensive and often 
                accompanied by opaque fees and complex rules. Additionally, it takes days 
                for funds to arrive in merchants' bank accounts. Consequently, some merchants opt for 
                cash-only transactions, even at the risk of missing out on business opportunities. 
                At PayX, we are revolutionizing how merchants conduct business. With our low fees, straightforward 
                onboarding process, and impeccable user experience, joining the PayX family has never been 
                easier. Make the switch and witness businesses truly thrive with cashless payments.
      </p>
      </div>
      
      <h5 style={mobileStyles.subsectionTitle}>How It Works</h5>
      
      <div style={mobileStyles.stepsContainer}>
        <div style={mobileStyles.step}>
          <FaUserPlus style={mobileStyles.icon} />
          <p style={mobileStyles.benefitTitle}>Sign Up</p>
          <p style={mobileStyles.stepDescription}>Swiftly create your merchant account and get going within a day.</p>
        </div>
        
        <FaArrowDown style={mobileStyles.icon} />
        
        <div style={mobileStyles.step}>
          <FaQrcode style={mobileStyles.icon} />
          <p style={mobileStyles.benefitTitle}>Display QR-Code</p>
          <p style={mobileStyles.stepDescription}>Display QR-Codes in your store and webshop.</p>
        </div>
        
        <FaArrowDown style={mobileStyles.icon} />
        
        <div style={mobileStyles.step}>
          <FaEuroSign style={mobileStyles.icon} />
          <p style={mobileStyles.benefitTitle}>Get Paid</p>
          <p style={mobileStyles.stepDescription}>Instantly receive money on your bank account.</p>
        </div>
      </div>
      
      <h5 style={mobileStyles.subsectionTitle}>Your Benefits</h5>
      
      <div style={mobileStyles.benefitsContainer}>
        <div style={mobileStyles.benefit}>
            <FaEuroSign style={mobileStyles.icon} />
            <p style={mobileStyles.benefitTitle}>Cut Fees</p>
            <p style={mobileStyles.benefitDescription}>Pay substantially lower transaction fees as we eliminate middlemen.</p>
        </div>

        <div style={mobileStyles.benefit}>
            <FaRocket style={mobileStyles.icon} />
            <p style={mobileStyles.benefitTitle}>Boost Liquidiy</p>
            <p style={mobileStyles.benefitDescription}>Enhance your liquidity with instant payments.</p>
        </div>
        <div style={mobileStyles.benefit}>
            <FaTimesCircle style={mobileStyles.icon} />
            <p style={mobileStyles.benefitTitle}>No Fixed Fees</p>
            <p style={mobileStyles.benefitDescription}>You only pay for the transactions your customers make.</p>
        </div>

        <div style={mobileStyles.benefit}>
            <FaPlug style={mobileStyles.icon} />
            <p style={mobileStyles.benefitTitle}>Zero Hardware</p>
            <p style={mobileStyles.benefitDescription}>Begin with zero hardware costs thanks to our straightforward technical setup.</p>
        </div>
        
        <div style={mobileStyles.benefit}>
            <FaShieldAlt style={mobileStyles.icon} />
            <p style={mobileStyles.benefitTitle}>Safer</p>
            <p style={mobileStyles.benefitDescription}>Advanced security protocols reduce fraudulent transactions and chargebacks.</p>
        </div>

        <div style={mobileStyles.benefit}>
            <FaArrowRight style={mobileStyles.icon} />
            <p style={mobileStyles.benefitTitle}>Simple Process</p>
            <p style={mobileStyles.benefitDescription}>Use our simple and fast customer<br/> experience for cashiers.</p>
        </div>
    </div>
    </div>
  );
}

export default ForMerchantsMobile;
