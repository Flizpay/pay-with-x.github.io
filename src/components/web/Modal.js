import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const Modal = ({ show, onClose }) => {
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
      <div style={show ? modalStyles.modalOpen : modalStyles.modalClose}>
        <div style={modalStyles.modalContent}>
        <button 
          onClick={closeAndResetModal} 
          style={modalStyles.closeButton}
        >
            <MdClose />
          </button>
          <h2 style={modalStyles.modalTitle}>{t('Modal.title')}</h2>
          <div style={modalStyles.roleContainer}>
            <div 
              onClick={() => setRole('merchant')} 
              style={role === 'merchant' ? modalStyles.activeRole : modalStyles.inactiveRole}
            >
              {t('Modal.merchantButton')}
            </div>
            <div 
              onClick={() => setRole('customer')} 
              style={role === 'customer' ? modalStyles.activeRole : modalStyles.inactiveRole}
            >
              {t('Modal.payerButton')}
            </div>
          </div>
          <form>
            <input 
              type="text" 
              value={name}  // Add this line
              placeholder={role === 'customer' ? t('Modal.inputPayerName') : t('Modal.inputMerchantName')} 
              style={modalStyles.inputField} 
              onChange={(e) => setName(e.target.value)}
            />
            <input 
              type="email" 
              value={email}  // Add this line
              placeholder={t('Modal.inputEmail')} 
              style={modalStyles.inputField} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
          <button style={modalStyles.heroButton} onClick={() => {  handleSubmit(); }}>
            {t('Modal.actionButtonText')}
          </button>
          {
            submissionStatus && 
            <div style={modalStyles.successMessage}>
            {submissionStatus}
            </div>
           }
        </div>
      </div>
    );
  };

  const modalStyles = {
    modalContent: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        minHeight: '80%',
        backgroundColor: 'black',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)', // Updated boxShadow
        
    },
      modalTitle: {
        marginLeft: '40px',
        marginTop: '35px',
        marginBottom: '30px',
        alignSelf: 'flex-start', // added
        fontSize: '1.6rem',  // Increase this value as needed

      },
      modalOpen: {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',  // Increased opacity
        zIndex: 1000,
      },
    modalClose: {
      display: 'none',
    },
    closeButton: {
        position: 'absolute',
        top: '35px', // Aligned with the title's top margin
        marginRight: '15px',
        right: '10px',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        color: 'white',
        fontSize: '32px' // Increase the font size here if the above doesn't make it big enough
      },
    actionButton: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    inputField: {
        boxSizing: 'border-box',
        display: 'block',
        width: 'calc(100% - 70px)', // Reduces width by 40px
        padding: '15px',
        marginBottom: '25px',
        margin: '15px 40px 25px 40px', // Keeps the 40px left margin
        fontSize: '18px',
        backgroundColor: '#000',
        color: '#fff',
        border: '2px solid #00D1B2',
        outline: 'none',
        borderRadius: '25px',
    },
      heroButton: {
        backgroundColor: '#00D1B2',
        color: '#fff',
        border: 'none',
        padding: '15px 30px',
        fontSize: '1rem',
        borderRadius: 25,
        margin: '30px 30px 25px 40px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      },
      roleContainer: {
        alignSelf: 'flex-start', // added
        display: 'flex',
        justifyContent: 'center',
        margin: '15px 0px 30px 30px',
      },
      activeRole: {
        padding: '15px 30px',
        margin: '0 10px',
        borderRadius: '25px',
        backgroundColor: '#00D1B2',
        cursor: 'pointer',
        color: '#fff',
        width: '50px', // Explicit width
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      inactiveRole: {
        padding: '15px 30px',
        margin: '0 10px',
        borderRadius: '25px',
        backgroundColor: '#111111',
        cursor: 'pointer',
        color: '#fff',
        width: '50px', // Explicit width
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      successMessage: {
        color: '#00D1B2',
        textAlign: 'center',
        marginTop: '20px',
      },
        
    };
  

export default Modal;
