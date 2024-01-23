import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header";
import { keyDownHandler } from "../../../utils/keyHandlers"; // Adjust the path as needed
import { StyledTitle } from "../../../components/text/styledTitle"; // Adjust the path as needed
import { StyledTitle2 } from "../../../components/text/styledTitle2"; // Adjust the path as needed
import {
  requestEmailCode,
  setNewPassword,
} from "../../../api/apiClient";
import CodeVerificationInput from "../../../components/codeVerificationInput";
import { useTranslation } from 'react-i18next';
import MerchantHeader from "../../../components/merchantHeader";
import { getMerchant } from "../../../api/apiClient";

const SetNewPassword = () => {

  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  const [errorMessage, setErrorMessage] = useState("");
  const [isPasswordChanged, setIsPasswordChanged] = useState(false); // New state to track code verification

 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage(""); // Reset error message on password change
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setErrorMessage(""); // Reset error message on password change
  };

  const [userData, setUserData] = useState({});

  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      const response = await getMerchant();
      console.log(response);
      setUserData({
        email: response.data.email,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle error appropriately
    }
  };

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData();
  }, []); // Empty dependency array means this effect runs once on mount


  const buttonStyle = {
    ...styles.button,
    backgroundColor: isHovered ? "rgba(0, 0, 0, 0.8)" : "black",
  };

  const handleSubmit = async () => {
    if (password === confirmPassword) {
      try {

        await setNewPassword(userData.email, password);
        setIsPasswordChanged(true); // Set the code as verified

    } catch (error) {
        // Display error message using a method suitable for web
        setErrorMessage(error.message);
      }
    } else {
      setErrorMessage("Passwords do not match");
    }
  };

  const handleContinue = async () => {
    navigate("/merchantSecurityInfo");
  };



  return (
    <div style={{ backgroundColor: "white", color: "#fff" }}>
      <MerchantHeader />
  
      <div style={styles.container}>

      {!isPasswordChanged && (
            <>
        <StyledTitle text={t('ResetPassword.title')} />
  
        <StyledTitle2 text={t('ResetPassword.insertNewPassTitle')} />
  
        <input
          placeholder={t('MerchantData.password')}
          type="password"
          style={styles.input}
          value={password}
          onChange={handlePasswordChange}
          onKeyDown={(event) =>
            keyDownHandler("Enter", handleSubmit)(event)
          }
        />
        <input
          placeholder={t('MerchantData.confirmPassword')}
          type="password"
          style={styles.input}
          value={confirmPassword}
          onChange={handleConfirmPassword}
          onKeyDown={(event) =>
            keyDownHandler("Enter", handleSubmit)(event)
          }
        />
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
  
        <button
          onClick={handleSubmit}
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {t('ResetPassword.title')}
        </button>
        </>
        )}
        {isPasswordChanged && (
          <>
            <StyledTitle text={t('ResetPassword.confirmationTitle')} />
            <StyledTitle2 text={t('ResetPassword.confirmationText')} />

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
  arrowButton: {
    position: "absolute",
    right: "-30px", // Adjust as needed for correct alignment
    top: "50%",
    transform: "translateY(-50%)", // Center vertically
    backgroundColor: "transparent", // Transparent background
    border: "none",
    color: "#fff", // Match the color of your input text
    cursor: "pointer",
    fontSize: "20px", // Adjust as needed
  },
  inputContainer: {
    position: "relative", // Needed for absolute positioning of the arrow
    width: "100%",
    maxWidth: "400px", // Match the maxWidth of the input
    marginBottom: "15px", // Match the marginBottom of the input
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
  registerButton: {
    backgroundColor: "#fff", // Inverted background color
    color: "grey", // Inverted text color to match the original background
    padding: "15px",
    width: "100%",
    maxWidth: "320px",
    marginTop: "15px",
    marginBottom: "8px",
    fontSize: "1rem",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontWeight: "bold",
  },
  registerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "30px",
  },
  registerText: {
    fontSize: "16px",
  },
  forgotPasswordContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start", // Align items to the left
    marginTop: "-5px",
    width: "295px", // Match width of container
    maxWidth: "295px", // Match maxWidth of input fields
    alignSelf: "center", // Align the container itself to the center
    marginLeft: "-20px",
  },

  forgotPasswordLink: {
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
};

export default SetNewPassword;
