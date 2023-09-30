import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const MobileModal = ({ show, onClose }) => {
    const { t } = useTranslation();
    const [role, setRole] = useState('merchant');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submissionStatus, setSubmissionStatus] = useState(null);

  
    const googleAppsScriptEndpoint = "https://script.google.com/macros/s/AKfycbwCfvZ5tG5D5GiLJ96UExuPgsbp2xTVg7hM3V3zTyR15gRh_JbaFnacCRCXQhb23ezh/exec";
  
    const handleSubmit = () => {
        const data = { role, name, email };  
        console.log(`Sending data to ${googleAppsScriptEndpoint}:`, data);
      
        fetch(googleAppsScriptEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),  
          mode: 'no-cors',
        })
        .then((response) => {
            if (response.type === 'opaque') {
              console.log('Sent data, but no readable response due to no-cors');
              setSubmissionStatus("Successfully submitted! Thank you for joining the revolution.");
            } else {
              console.log('Response:', response);
            }
          })
          .catch((error) => {
            console.log('Error:', error);
          });
      };
    
      const closeAndResetModal = () => {
        setRole('merchant');
        setName('');
        setEmail('');
        setSubmissionStatus('');
        onClose();
      };

      return (
        <div style={show ? mobileModalStyles.modalOpen : mobileModalStyles.modalClose}>
          <div style={mobileModalStyles.modalContent}>
            <button 
              onClick={closeAndResetModal} 
              style={mobileModalStyles.closeButton}
            >
            <MdClose />

            </button>
            <h2 style={mobileModalStyles.modalTitle}>{t('Modal.title')}</h2>
            <div style={mobileModalStyles.roleContainer}>
              <div 
                onClick={() => setRole('merchant')} 
                style={role === 'merchant' ? mobileModalStyles.activeRole : mobileModalStyles.inactiveRole}
              >
                {t('Modal.merchantButton')}
              </div>
              <div 
                onClick={() => setRole('payer')} 
                style={role === 'payer' ? mobileModalStyles.activeRole : mobileModalStyles.inactiveRole}
              >
                {t('Modal.payerButton')}
              </div>
            </div>
            <form>
              <input 
                type="text" 
                value={name} // Added this line
                placeholder={role === 'payer' ? t('Modal.inputPayerName') : t('Modal.inputMerchantName')} 
                style={mobileModalStyles.inputField} 
                onChange={(e) => setName(e.target.value)}  // Added this line
              />
              <input 
                type="email" 
                value={email} 
                placeholder={t('Modal.inputEmail')} 
                style={mobileModalStyles.inputField} 
                onChange={(e) => setEmail(e.target.value)}  // Added this line
              />
            </form>
            <button style={mobileModalStyles.heroButton} onClick={handleSubmit}>{t('Modal.actionButtonText')}</button>
            {
            submissionStatus && 
            <div style={mobileModalStyles.successMessage}>
                {submissionStatus}
            </div>
            }
          </div>
        </div>
      );
    };

const mobileModalStyles = {
  modalOpen: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    zIndex: 1000,
  },
  modalClose: {
    display: 'none',
  },
  modalContent: {
    width: '90%',
    minHeight: '82%',
    backgroundColor: 'black',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)', // Updated boxShadow
    flexDirection: 'column',
    display: 'flex',
  },
  modalTitle: {
    margin: '20px',
    fontSize: '1.5rem',
  },
  closeButton: {
    position: 'absolute',
    top: '120px',
    right: '10px',
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '32px',
    cursor: 'pointer',
  },
  roleContainer: {
    display: 'flex',
    margin: '15px 30px 30px 15px',
  },
  activeRole: {
    padding: '10px 20px',
    margin: '0 10px',
    borderRadius: '25px',
    backgroundColor: '#00D1B2',
    width: '60px',
    cursor: 'pointer',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
  },
  inactiveRole: {
    padding: '10px 20px',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '0 10px',
    width: '60px',
    borderRadius: '25px',
    backgroundColor: '#111111',
    cursor: 'pointer',
    color: '#fff',
  },
  inputField: {
    width: 'calc(100% - 75px)',
    padding: '15px',
    margin: '15px 20px',
    fontSize: '16px',
    backgroundColor: '#000',
    color: '#fff',
    border: '2px solid #00D1B2',
    borderRadius: '25px',
  },
  heroButton: {
    backgroundColor: '#00D1B2',
    color: '#fff',
    border: 'none',
    padding: '15px 30px',
    fontSize: '1rem',
    borderRadius: 25,
    margin: '30px 20px',
    cursor: 'pointer',
  },
  successMessage: {
    margin: '20px',
    color: '#00D1B2',
    fontSize: '16px',
    textAlign: 'center',  // centers text horizontally
    display: 'flex',
    justifyContent: 'center',  // centers container content horizontally
    alignItems: 'center',  // centers container content vertically
  }
};

export default MobileModal;
