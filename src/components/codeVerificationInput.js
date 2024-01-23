import React, { useState, useRef, useEffect } from 'react';
import { verifyEmailCode} from '../api/apiClient';
import { StyledTitle } from '../components/text/styledTitle'; // Adjust the path as needed
import { StyledTitle2 } from '../components/text/styledTitle2'; // Adjust the path as needed
import { useTranslation } from 'react-i18next';

const CodeVerificationInput = ({ errorMessage , email, handleCodeVerified,   handleErrorMessage}) => {
  const numberOfDigits = 6; // Assuming a fixed number of digits
  const [code, setCode] = useState(Array(numberOfDigits).fill(''));
  const inputRefs = useRef([...Array(numberOfDigits)].map(() => React.createRef()));
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  const handleTextChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (index < numberOfDigits - 1 && value) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, numberOfDigits).split('');
    setCode(pastedData);
    if (pastedData.length < numberOfDigits) {
      inputRefs.current[pastedData.length].focus();
    }
  };

  const buttonStyle = {
    ...styles.button,
    backgroundColor: isHovered ? "rgba(0, 0, 0, 0.8)" : "black",
  };


  const handleCodeVerification = async () => {
    const resetCode = code.join("");
    try {
      const lowercasedEmail = email.toLowerCase();
      await verifyEmailCode(lowercasedEmail, resetCode);
      handleCodeVerified(true); // Set the code as verified
      handleErrorMessage('');
    } catch (error) {
      handleErrorMessage(error.message); // Reset error message on password change
    }
  };

  useEffect(() => {
    // Check if all fields are filled, then trigger handleCodeVerification
    if (code.every(digit => digit !== '' && digit.length === 1) && code.length === 6) {
      handleCodeVerification();
    }
  }, [code]); // Dependency array includes 'code' to run the effect when 'code' changes
  
  
  
  return (
    <>
                <StyledTitle text={t('VerifyCode.title')} />

            <StyledTitle2 text={t('VerifyCode.text')} />

            <div style={styles.inputRow}>
        {code.map((digit, index) => (
          <input
            key={index}
            style={styles.inputBox}
            onChange={(e) => {
              if (e.target.value === '' || /^[0-9]$/.test(e.target.value)) {
                handleTextChange(e.target.value, index);
              }
            }}
            onPaste={index === 0 ? handlePaste : null}
            value={digit}
            maxLength={1}
            type="text"
            ref={el => inputRefs.current[index] = el}
          />
        ))}
      </div>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <button onClick={handleCodeVerification}               style={buttonStyle}> 
      {t('Button.verifyCode')} 
      </button>
    </>
  );
};

const styles={
  button: {
    color: "#fff",
    border: "none",
    padding: "15px",
    width: "320px", // Takes the full width of its container
    maxWidth: "320px", // Maximum width same as input fields
    marginTop: "20px",
    marginBottom: "8px",
    fontSize: "1rem",
    borderRadius: "10px", // Reduced for more rectangular look
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontWeight: "bold",
    width: "320px", // Takes the full width of its container
  },
  inputRow: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 20,
    width: "100%",
  },
  inputBox: {
    padding: "15px",
    height: "45px", // Set height explicitly
    boxSizing: "border-box",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#f0f0f0",
    color: "black",
    fontSize: "16px",
    marginBottom: "15px",
    width: "45px", // Adjust width for spacing
    marginRight: "10px",
  },
};

export default CodeVerificationInput;
