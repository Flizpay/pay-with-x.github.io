import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { keyDownHandler } from "../../../utils/keyHandlers"; // Adjust the path as needed
import { StyledTitle } from "../../../components/text/styledTitle"; // Adjust the path as needed
import { StyledTitle2 } from "../../../components/text/styledTitle2"; // Adjust the path as needed
import { useTranslation } from "react-i18next";
import MerchantHeader from "../../../components/merchantHeader";
import CodeVerificationInput from "../../../components/codeVerificationInput";
import BackButton from "../../../components/backButton";
import { styles } from "./styles"; // Adjust the import path as needed
import { fetchUserData, handleSubmit, handleContinue } from "./functions";

const ResetIban = () => {
  const navigate = useNavigate();
  const [iban, setIban] = useState("");
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState("");
  const [isFieldChanged, setIsFieldChanged] = useState(false); // New state to track code verification
  const [isHovered, setIsHovered] = useState(false); // New state to track code verification
  const [isCodeVerified, setIsCodeVerified] = useState(false); // New state to track code verification
  const [userData, setUserData] = useState({});

  const handleIbanChange = (e) => {
    setIban(e.target.value);
    setErrorMessage(""); // Reset error message on password change
  };

  const handleCodeVerified = (verified) => {
    setIsCodeVerified(verified);
  };

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData(setUserData);
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    // This effect runs only once on component mount because of an empty dependency array
    // It initializes the state with userData if present
    if (!iban && userData.iban) {
      setIban(userData.iban);
    }
  }, [userData]); // Only re-run this effect if userData changes

 // Example usage of handleSubmit
 const onSubmit = () => {
  handleSubmit({
    iban,
    userData,
    setErrorMessage,
    setIsFieldChanged,
    t
  });
};

// Example usage of handleContinue
const onContinue = () => {
  handleContinue({
    userData,
    iban,
    setErrorMessage,
    navigate
  });
};

  const handleErrorMessage = (message) => {
    setErrorMessage(message);
  };
  
  const buttonStyle = {
    ...styles.button,
    backgroundColor: isHovered ? "rgba(0, 0, 0, 0.8)" : "black",
  };

  return (
    <div style={{ backgroundColor: "white", color: "#fff" }}>
      <MerchantHeader />

      <div style={styles.container}>
        {!isFieldChanged && (
          <>
            <BackButton />
            <StyledTitle text={t("resetIban.title")} />

            <StyledTitle2 text={t("resetIban.text")} />

            <span style={styles.label}>{t("MerchantData.iban")}</span>
            <input
              style={styles.input}
              value={iban}
              onChange={handleIbanChange}
              onKeyDown={(event) =>
                keyDownHandler("Enter", onSubmit)(event)
              }
            />
            {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}

            <button
              onClick={onSubmit}
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {t("Button.update")}
            </button>
          </>
        )}
        {isFieldChanged && !isCodeVerified && (
          <>
            <CodeVerificationInput
              errorMessage={errorMessage}
              email={userData.email}
              handleCodeVerified={handleCodeVerified}
              handleErrorMessage={handleErrorMessage}
            />
          </>
        )}
        {isCodeVerified && (
          <>
            <StyledTitle text={t("resetIban.confirmationTitle")} />
            <StyledTitle2 text={t("resetIban.confirmationText")} />

            <button
              onClick={onContinue}
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {t("Button.continue")}
            </button>
          </>
        )}
      </div>
    </div>
  );
};


export default ResetIban;
