import React from 'react';
import { FaUserPlus, FaQrcode, FaTimesCircle, FaEuroSign, FaRocket, FaCut, FaPlug, FaShieldAlt, FaArrowDown,  FaArrowRight} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Merchants() {
  const { t } = useTranslation();

  return (
    <div style={mobileStyles.container}>
      <h2 style={mobileStyles.title}>{t('Merchants.title')}</h2>

      <div style={mobileStyles.verticalBarContainer}>
        <p style={mobileStyles.verticalBarText}>{t('Merchants.verticalBarText')}</p>
      </div>

      <h5 style={mobileStyles.subsectionTitle}>{t('Merchants.HowItWorks')}</h5>
      
      <div style={mobileStyles.stepsContainer}>
        <div style={mobileStyles.step}>
          <FaUserPlus style={mobileStyles.icon} />
          <p style={mobileStyles.benefitTitle}>{t('Merchants.steps.SignUp.title')}</p>
          <p style={mobileStyles.stepDescription}>{t('Merchants.steps.SignUp.description')}</p>
        </div>
        
        <FaArrowDown style={mobileStyles.icon} />
        
        <div style={mobileStyles.step}>
          <FaQrcode style={mobileStyles.icon} />
          <p style={mobileStyles.benefitTitle}>{t('Merchants.steps.DisplayQRCode.title')}</p>
          <p style={mobileStyles.stepDescription}>{t('Merchants.steps.DisplayQRCode.description')}</p>
        </div>
        
        <FaArrowDown style={mobileStyles.icon} />
        
        <div style={mobileStyles.step}>
          <FaEuroSign style={mobileStyles.icon} />
          <p style={mobileStyles.benefitTitle}>{t('Merchants.steps.GetPaid.title')}</p>
          <p style={mobileStyles.stepDescription}>{t('Merchants.steps.GetPaid.description')}</p>
        </div>
      </div>
      
      <h5 style={mobileStyles.subsectionTitle}>{t('Merchants.YourBenefits')}</h5>
      
      <div style={mobileStyles.benefitsContainer}>
        <div style={mobileStyles.benefit}>
            <FaEuroSign style={mobileStyles.icon} />
            <p style={mobileStyles.benefitTitle}>{t('Merchants.benefits.CutFees.title')}</p>
            <p style={mobileStyles.benefitDescription}>{t('Merchants.benefits.CutFees.description')}</p>
        </div>

        <div style={mobileStyles.benefit}>
            <FaRocket style={mobileStyles.icon} />
            <p style={mobileStyles.benefitTitle}>{t('Merchants.benefits.CutLiquidityCosts.title')}</p>
            <p style={mobileStyles.benefitDescription}>{t('Merchants.benefits.CutLiquidityCosts.description')}</p>
        </div>

        <div style={mobileStyles.benefit}>
            <FaTimesCircle style={mobileStyles.icon} />
            <p style={mobileStyles.benefitTitle}>{t('Merchants.benefits.NoFixedFees.title')}</p>
            <p style={mobileStyles.benefitDescription}>{t('Merchants.benefits.NoFixedFees.description')}</p>
        </div>

        <div style={mobileStyles.benefit}>
            <FaPlug style={mobileStyles.icon} />
            <p style={mobileStyles.benefitTitle}>{t('Merchants.benefits.ZeroHardwareCosts.title')}</p>
            <p style={mobileStyles.benefitDescription}>{t('Merchants.benefits.ZeroHardwareCosts.description')}</p>
        </div>
        
        <div style={mobileStyles.benefit}>
            <FaShieldAlt style={mobileStyles.icon} />
            <p style={mobileStyles.benefitTitle}>{t('Merchants.benefits.IncreasedSecurity.title')}</p>
            <p style={mobileStyles.benefitDescription}>{t('Merchants.benefits.IncreasedSecurity.description')}</p>
        </div>

        <div style={mobileStyles.benefit}>
            <FaArrowRight style={mobileStyles.icon} />
            <p style={mobileStyles.benefitTitle}>{t('Merchants.benefits.SimpleProcess.title')}</p>
            <p style={mobileStyles.benefitDescription}>{t('Merchants.benefits.SimpleProcess.description')}</p>
        </div>
      </div>
    </div>
  );
}

const mobileStyles = {
  container: {
    padding: '20px',
    background: 'linear-gradient(to bottom right, black, #222 65%, #444)',
    color: 'white',
    overflow: 'hidden'
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
    textAlign: 'center',
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
    gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns
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
    minHeight: '180px', // Set a minimum height
    overflow: 'auto'  // Content will scroll if it overflows vertically
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

export default Merchants;
