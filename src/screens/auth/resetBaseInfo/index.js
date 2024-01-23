import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header";
import { keyDownHandler } from "../../../utils/keyHandlers"; // Adjust the path as needed
import { StyledTitle } from "../../../components/text/styledTitle"; // Adjust the path as needed
import { StyledTitle2 } from "../../../components/text/styledTitle2"; // Adjust the path as needed
import {
  resetBaseInfo,
} from "../../../api/apiClient";
import CodeVerificationInput from "../../../components/codeVerificationInput";
import { useTranslation } from 'react-i18next';
import MerchantHeader from "../../../components/merchantHeader";
import { getMerchant } from "../../../api/apiClient";

const ResetBaseInfo = () => {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState(false);
  const [mobilePhone, setMobilePhone] = useState(false);

  const { t } = useTranslation();

  const [errorMessage, setErrorMessage] = useState("");
  const [isNameChanged, setIsNameChanged] = useState(false); // New state to track code verification
  const [isHovered, setIsHovered] = useState(false); // New state to track code verification
 
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setErrorMessage(""); // Reset error message on password change
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setErrorMessage(""); // Reset error message on password change
  };

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
    setErrorMessage(""); // Reset error message on password change
  };
  const handleMobilePhoneChange = (e) => {
    setMobilePhone(e.target.value);
    setErrorMessage(""); // Reset error message on password change
  };

  const [userData, setUserData] = useState({});

  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      const response = await getMerchant();
      console.log(response);
      setUserData({
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        companyName:response.data.companyName,
        email:response.data.email,
        mobilePhone:response.data.mobilePhone
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
      try {

        await resetBaseInfo(userData.email, 
          (firstName || userData.firstName), 
          (lastName || userData.lastName), 
          (companyName || userData.companyName),
          (mobilePhone || userData.mobilePhone));
        setIsNameChanged(true); // Set the code as verified

    } catch (error) {
        // Display error message using a method suitable for web
        setErrorMessage(error.message);
      }
  };

  const handleContinue = async () => {
    navigate("/merchantBaseInfo");
  };



  return (
    <div style={{ backgroundColor: "white", color: "#fff" }}>
      <MerchantHeader />
  
      <div style={styles.container}>

      {!isNameChanged && (
            <>
        <StyledTitle text={t('ResetBaseInfo.title')} />
  
        <StyledTitle2 text={t('ResetBaseInfo.text')}/>
        
        <span style={styles.label}>{t('MerchantData.companyName')}</span>
        <input
          style={styles.input}
          value={companyName || userData.companyName}
          onChange={handleCompanyNameChange}
          onKeyDown={(event) =>
            keyDownHandler("Enter", handleSubmit)(event)
          }
        />
        <span style={styles.label}>{t('MerchantData.firstName')}</span>
        <input
          style={styles.input}
          value={firstName || userData.firstName }
          onChange={handleFirstNameChange}
          onKeyDown={(event) =>
            keyDownHandler("Enter", handleSubmit)(event)
          }
        />
         <span style={styles.label}>{t('MerchantData.lastName')}</span>
       <input
          style={styles.input}
          value={lastName || userData.lastName}
          onChange={handleLastNameChange}
          onKeyDown={(event) =>
            keyDownHandler("Enter", handleSubmit)(event)
          }
        />

<span style={styles.label}>{t('MerchantData.mobilePhone')}</span>
       <input
          style={styles.input}
          value={mobilePhone || userData.mobilePhone}
          onChange={handleMobilePhoneChange}
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
          {t('Button.update')}
        </button>
        </>
        )}
        {isNameChanged && (
          <>
            <StyledTitle text={t('ResetBaseInfo.confirmationTitle')} />
            <StyledTitle2 text={t('ResetBaseInfo.confirmationText')} />

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
  label: {
    fontSize: "1rem",
    color: "rgba(0, 0, 0, 0.7)", // Adjust the opacity to make it lighter
    fontWeight: "bold",
  },
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

export default ResetBaseInfo;
