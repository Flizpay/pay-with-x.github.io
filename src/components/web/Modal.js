import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const Modal = ({ show, onClose }) => {
    const { t } = useTranslation();
    const [role, setRole] = useState('merchant');
    const [companyName, setCompanyName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const googleAppsScriptEndpoint = "https://script.google.com/macros/s/AKfycbwhVhquK4CsITJwCwTOqaBIwlfxFlyszKLGQzBZBxOfSH7t-yoOgbRS-_AkL3iqgKQq/exec";

    const handleSubmit = () => {
        const data = role === 'merchant' 
            ? { role, companyName, firstName, lastName, email, phone }
            : { role, firstName, lastName, email, phone };
        console.log(`Sending data to ${googleAppsScriptEndpoint}:`, data);

        setSubmissionStatus("Submitting your information...");

      
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
        setCompanyName('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
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
                    {role === 'merchant' && (
                        <input 
                            type="text"
                            value={companyName}
                            placeholder={t('Modal.inputCompanyName')}
                            style={modalStyles.inputField}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    )}
                    <input 
                        type="text" 
                        value={firstName} 
                        placeholder={t('Modal.inputFirstName')} 
                        style={modalStyles.inputField} 
                        onChange={(e) => setFirstName(e.target.value)}  
                    />
                    <input 
                        type="text" 
                        value={lastName} 
                        placeholder={t('Modal.inputLastName')} 
                        style={modalStyles.inputField} 
                        onChange={(e) => setLastName(e.target.value)}  
                    />
                    <input 
                        type="email" 
                        value={email} 
                        placeholder={t('Modal.inputEmail')} 
                        style={modalStyles.inputField} 
                        onChange={(e) => setEmail(e.target.value)}  
                    />
                    <input 
                        type="tel" 
                        value={phone} 
                        placeholder={t('Modal.inputPhone')} 
                        style={modalStyles.inputField} 
                        onChange={(e) => setPhone(e.target.value)}  
                    />
                </form>
                <button style={modalStyles.heroButton} onClick={handleSubmit}>
                    {t('Modal.actionButtonText')}
                </button>
                {submissionStatus && 
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
    width: '29.5%', 
    minHeight: '78%', 
    backgroundColor: 'black',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
  },
  modalTitle: {
    marginLeft: '39px', 
    marginTop: '34px', 
    marginBottom: '29px', 
    alignSelf: 'flex-start',
    fontSize: '1.58rem', 
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
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    zIndex: 1000,
  },
  modalClose: {
    display: 'none',
  },
  closeButton: {
    position: 'absolute',
    top: '34px', 
    right: '10px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '31px', 
  },
  inputField: {
    boxSizing: 'border-box',
    display: 'block',
    width: 'calc(100% - 68px)', 
    padding: '14.5px', 
    marginBottom: '24px', 
    margin: '14.5px 39px', 
    fontSize: '17.5px', 
    backgroundColor: '#000',
    color: '#fff',
    border: '2px solid #00D1B2',
    borderRadius: '25px',
  },
  heroButton: {
    backgroundColor: '#00D1B2',
    color: '#fff',
    border: 'none',
    padding: '14.5px 29px', 
    fontSize: '0.98rem', 
    borderRadius: '24.5px', 
    margin: '29px 29px 24px 39px', 
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  roleContainer: {
    alignSelf: 'flex-start',
    display: 'flex',
    justifyContent: 'center',
    margin: '14.5px 0px 29px 39px', 
  },
  activeRole: {
    padding: '14.5px 29px', 
    margin: '0 9.5px', 
    borderRadius: '24.5px', 
    backgroundColor: '#00D1B2',
    cursor: 'pointer',
    color: '#fff',
  },
  inactiveRole: {
    padding: '14.5px 29px', 
    margin: '0 9.5px', 
    borderRadius: '24.5px', 
    backgroundColor: '#111111',
    cursor: 'pointer',
    color: '#fff',
  },
  successMessage: {
    color: '#00D1B2',
    textAlign: 'center',
    marginTop: '5.5px', 
    fontSize: '0.98rem', 
    marginBottom: '10px', // Added more bottom margin
  },
};


  

export default Modal;
