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
import { fetchUserData, handleEmailCheck } from "./functions";

const ResetEmail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState("");
  const [isFieldChanged, setIsFieldChanged] = useState(false); // New state to track code verification
  const [isHovered, setIsHovered] = useState(false); // New state to track code verification
  const [isCodeVerified, setIsCodeVerified] = useState(false); // New state to track code verification
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const handleErrorMessage = (message) => {
    setErrorMessage(message);
  };

  const handleCodeVerified = (verified) => {
    setIsCodeVerified(verified);
  };

  const handleContinue = async () => {
    navigate("/merchantBaseInfo");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage(""); // Reset error message on password change
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage(""); // Reset error message on password change
  };

  const onCheckEmail = async () => {
    // Prepare to call handleEmailCheck with all necessary arguments
    await handleEmailCheck({
      userData,
      email,
      password,
      setIsFieldChanged,
      setErrorMessage,
      t
    });
  };
  
  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData(setUserData);
  }, []); // Empty dependency array means this effect runs once on mount


  useEffect(() => {
    // This effect runs only once on component mount because of an empty dependency array
    // It initializes the state with userData if present
    if (!email && userData.email) {
      setEmail(userData.email);
    }
  }, [userData]); //

  
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
            <StyledTitle text={t("resetEmail.title")} />

            <StyledTitle2 text={t("ResetPassword.insertCurrentPassTitle")} />

            <input
              placeholder={t("MerchantData.password")}
              type="password"
              style={styles.input}
              value={password}
              onChange={handlePasswordChange}
              onKeyDown={(event) =>
                keyDownHandler("Enter", onCheckEmail)(event)
              }
            />

            <StyledTitle2 text={t("resetEmail.text")} />

            <span style={styles.label}>{t("MerchantData.email")}</span>
            <input
              style={styles.input}
              value={email}
              onChange={handleEmailChange}
              onKeyDown={(event) =>
                keyDownHandler("Enter", onCheckEmail)(event)
              }
            />
            {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
            <button
              onClick={onCheckEmail}
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
              email={email}
              handleCodeVerified={handleCodeVerified}
              handleErrorMessage={handleErrorMessage}
            />
          </>
        )}
        {isCodeVerified && (
          <>
            <StyledTitle text={t("resetEmail.confirmationTitle")} />
            <StyledTitle2 text={t("resetEmail.confirmationText")} />

            <button
              onClick={handleContinue}
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

export default ResetEmail;
