import React from 'react';
import { FaQrcode, FaEuroSign, FaShieldAlt, FaRegSmile, FaArrowDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';



function Customers() {
    const { t } = useTranslation();
  
    return (
      <div style={mobileStyles.container}>
        <h2 style={mobileStyles.title}>{t('Customers.title')}</h2>
        
        <div style={mobileStyles.imageContainer}>
          <div style={mobileStyles.imageWrapper}>
            <div style={mobileStyles.imageTitle}>{t('Customers.imageTitles.Tap')}</div>
            <img src="/Lock-screen.png" alt="Lock screen" style={mobileStyles.imageStyle} />
          </div>
          <FaArrowDown style={mobileStyles.arrowStyle} />
          <div style={mobileStyles.imageWrapper}>
            <div style={mobileStyles.imageTitle}>{t('Customers.imageTitles.Scan')}</div>
            <img src="/Scan-screen.png" alt="Scan screen" style={mobileStyles.imageStyle} />
          </div>
          <FaArrowDown style={mobileStyles.arrowStyle} />
          <div style={mobileStyles.imageWrapper}>
            <div style={mobileStyles.imageTitle}>{t('Customers.imageTitles.Pay')}</div>
            <img src="/Paid-screen.png" alt="Paid screen" style={mobileStyles.imageStyle} />
          </div>
        </div>
        
        <div style={mobileStyles.subsection}>
          <p style={mobileStyles.subsectionTitle}>{t('Customers.subsectionTitle')}</p>
          
          <div style={mobileStyles.benefitsContainer}>
            <div style={mobileStyles.benefit}>
              <FaEuroSign style={mobileStyles.benefitIcon} />
              <p style={mobileStyles.benefitTitle}>{t('Customers.benefits.Cashback.title')}</p>
              <p style={mobileStyles.benefitDescription}>{t('Customers.benefits.Cashback.description')}</p>
            </div>
            <div style={mobileStyles.benefit}>
              <FaRegSmile style={mobileStyles.benefitIcon} />
              <p style={mobileStyles.benefitTitle}>{t('Customers.benefits.DataInEurope.title')}</p>
              <p style={mobileStyles.benefitDescription}>{t('Customers.benefits.DataInEurope.description')}</p>
            </div>
            <div style={mobileStyles.benefit}>
              <FaQrcode style={mobileStyles.benefitIcon} />
              <p style={mobileStyles.benefitTitle}>{t('Customers.benefits.TapScanPay.title')}</p>
              <p style={mobileStyles.benefitDescription}>{t('Customers.benefits.TapScanPay.description')}</p>
            </div>
            <div style={mobileStyles.benefit}>
              <FaShieldAlt style={mobileStyles.benefitIcon} />
              <p style={mobileStyles.benefitTitle}>{t('Customers.benefits.EnhancedSecurity.title')}</p>
              <p style={mobileStyles.benefitDescription}>{t('Customers.benefits.EnhancedSecurity.description')}</p>
            </div>
            {/* Add more benefits as needed */}
          </div>
        </div>
      </div>
    );
  }

const mobileStyles = {
    container: {
        padding: '15px 5%',
        background: '#00D1B2',
        color: 'white',    
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
        fontSize: '1.4rem',
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
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns
        justifyContent: 'center', // Center the items
        gridGap: '20px', // Space between grid items
        marginTop: '60px'
      },
    benefit: {
        textAlign: 'center',
        margin: '10px',
        flex: 1,
        minWidth: 'calc(50% - 20px)',
        flexDirection: 'column',  // Add this
        alignItems: 'center',  // Add this
        justifyContent: 'center'  // Add this
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
        fontSize: '0.8rem',
        minHeight: '40px'  // Adjust as needed
      }
};

export default Customers;
