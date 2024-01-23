import React, { useState} from "react";
import {
  register,
  requestEmailCode,
} from "../../../api/apiClient";
import { useNavigate } from "react-router-dom";
import { keyDownHandler } from "../../../utils/keyHandlers"; // Adjust the path as needed
import { StyledTitle } from "../../../components/text/styledTitle"; // Adjust the path as needed
import { StyledTitle2 } from "../../../components/text/styledTitle2"; // Adjust the path as needed
import Header from "../../../components/header";
import CodeVerificationInput from "../../../components/codeVerificationInput";
import { useTranslation } from 'react-i18next';

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState("");
  const [isAccountCreated, setIsAccountCreated] = useState(false); // New state to track email verification
  const [isCodeVerified, setIsCodeVerified] = useState(false); // New state to track code verification

  const handleRegister = async () => {
    if (password === confirmPassword) {
      setErrorMessage(""); // Clear any existing error message
      try {
        const lowercasedEmail = email.toLowerCase(); // Transform email to lowercase

        await register(
          firstName,
          lastName,
          companyName,
          lowercasedEmail,
          password
        );
        await requestEmailCode(lowercasedEmail);

        setIsAccountCreated(true);
      } catch (error) {
        console.log("Error during registration:", error.message);
        // Check if the error is a badRequest error
        const isBadRequest =
          error.status === 400 ||
          (error.response && error.response.status === 400);
        console.log(error);
        if (isBadRequest) {
          // Handle badRequest error
          setErrorMessage(error.message);
        } else {
          // Handle other types of errors
          setErrorMessage(error.message);
        }
      }
    } else {
      setErrorMessage("Passwords do not match");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage(""); // Reset error message on password change
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage(""); // Reset error message on password change
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setErrorMessage(""); // Reset error message on confirm password change
  };

  const handleContinue = async () => {
    navigate("/login");
  };

  const handleCodeVerified = (verified) => {
    setIsCodeVerified(verified);
  };

  const handleErrorMessage = (message) => {
    setErrorMessage(message);
  };

  const buttonStyle = {
    ...styles.button,
    backgroundColor: isHovered ? "rgba(0, 0, 0, 0.8)" : "black",
  };

  const handleEnterKeyDown = keyDownHandler("Enter", handleRegister);

  return (
    <div style={{ backgroundColor: "white", color: "#fff" }}>
      <Header showFullHeader={false} />

      <div style={styles.container}>
        {!isAccountCreated && (
          <>
            <StyledTitle text={t('Register.title')} />

            <input
              placeholder={t('MerchantData.firstName')}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={styles.input}
            />
            <input
              placeholder={t('MerchantData.lastName')}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={styles.input}
            />
            <input
              placeholder={t('MerchantData.companyName')}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              style={styles.input}
            />
            <input
              placeholder={t('MerchantData.email')}
              value={email}
              onChange={handleEmailChange}
              style={styles.input}
            />
            <input
              type="password"
              placeholder={t('MerchantData.password')}
              value={password}
              onChange={handlePasswordChange}
              style={styles.input}
            />
            <input
              type="password"
              placeholder={t('MerchantData.confirmPassword')}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              style={styles.input}
              onKeyDown={handleEnterKeyDown}
            />
            {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
            <button
              onClick={handleRegister}
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {t('Button.register')}
            </button>

            <button onClick={handleContinue} style={styles.loginButton}>
            {t('Register.loginText')}
            </button>
          </>
        )}

        {isAccountCreated && !isCodeVerified && (
          <>
            <CodeVerificationInput
              errorMessage={errorMessage}
              email={email}
              handleCodeVerified={handleCodeVerified}
              handleErrorMessage={handleErrorMessage}
            />
          </>
        )}

        {isCodeVerified && (
          <>
            <StyledTitle text={t('Register.confirmationTitle')} />
            <StyledTitle2 text={t('Register.confirmationText')} />

            <button
              onClick={handleContinue}
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {t('Button.continue')}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  loginButton: {
      backgroundColor: '#fff', // Inverted background color
      color: 'grey', // Inverted text color to match the original background
      padding: '15px',
      width: '100%',
      maxWidth: '320px',
      marginTop: '0px',
      marginBottom: '8px',
      fontSize: '1rem',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      fontWeight: 'bold',
      border: 'none', // Remove border
      textAlign: 'center', // Align text to the left
    },
  registerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start", // Align items to the left
    marginTop: "20px",
    width: "295px", // Match width of container
    maxWidth: "295px", // Match maxWidth of input fields
    alignSelf: "center", // Align the container itself to the center
    marginLeft: "-20px",
  },

  registerLink: {
    fontSize: "12px",
    background: "none",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    border: "none",
    transition: "color 0.3s",
    color: "lightlack",
    textAlign: "left", // Align text to the left
    padding: 0, // Remove padding if any
    width: "100%", // Use full width of the container
  },
  textStyle: {
    marginTop: "80px",
    textAlign: "justify",
    color: "black",
    maxWidth: "320px",
    marginLeft: "0",
    marginRight: "0",
    fontSize: "1.2rem",
    lineHeight: "0.6",
    fontWeight: "300", // Set font-weight to lighter (normal is usually 400)
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "white",
    //background: 'linear-gradient(315deg, #354896 0%, #000000 100%)',
    fontFamily: "Arial, sans-serif",
    color: "#fff",
    maxWidth: "320px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop:'80px',

  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px",
  },
  logo: {
    width: "250px",
    height: "250px",
  },
  input: {
    padding: "15px",
    marginBottom: "15px",
    width: "290px",
    maxWidth: "295px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#f0f0f0", // A lighter shade of grey
    color: "black",
    fontSize: "16px",
  },
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
};

export default Register;
