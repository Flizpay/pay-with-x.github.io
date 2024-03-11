import React, { useState } from "react";
import { keyDownHandler } from "../../../utils/keyHandlers"; // Adjust the path as needed
import { StyledTitle } from "../../../components/text/styledTitle"; // Adjust the path as needed
import { StyledTitle2 } from "../../../components/text/styledTitle2"; // Adjust the path as needed
import Header from "../../../components/header";
import CodeVerificationInput from "../../../components/codeVerificationInput";
import { useTranslation } from "react-i18next";
import BackButton from "../../../components/backButton";
import InfoIcon from "../../../components/infoIcon";
import { styles } from "./styles"; // Adjust the import path as needed
import {
  handleRegister,
  handleFieldChange,
} from "./functions";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    iban: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState("");
  const [isAccountCreated, setIsAccountCreated] = useState(false); // New state to track email verification
  const [isCodeVerified, setIsCodeVerified] = useState(false); // New state to track code verification
  const navigate = useNavigate();

  // Simplify handling of field changes
  const updateField = (field) => handleFieldChange(
    (value) => setUserData(prev => ({...prev, [field]: value})),
    setErrorMessage // Passing setErrorMessage to reset error messages on change
  );

  // Pass userData and setter functions as needed to handleRegister
  const handleRegisterClick = () =>
    handleRegister(userData, setErrorMessage, setIsAccountCreated, t, navigate);

  const handleCodeVerified = (verified) => {
    setIsCodeVerified(verified);
  };

  const handleErrorMessage = (message) => {
    setErrorMessage(message);
  };

  const handleContinue = async () => {
    navigate("/login");
  };

  const buttonStyle = {
    ...styles.button,
    backgroundColor: isHovered ? "rgba(0, 0, 0, 0.8)" : "black",
  };

  const handleEnterKeyDown = keyDownHandler("Enter", handleRegisterClick);

  return (
    <div style={{ backgroundColor: "white", color: "#fff" }}>
      <Header showFullHeader={false} />

      <div style={styles.container}>
        {!isAccountCreated && (
          <>
            <BackButton />
            <StyledTitle text={t("Register.title")} />
            <div
              style={{ display: "flex", alignItems: "center", width: "110%" }}
            >
              <input
                placeholder={t("MerchantData.companyName")}
                value={userData.companyName}
                onChange={updateField("companyName")}
                style={styles.input}
              />

              <InfoIcon
                text={t("MerchantData.info.companyName")}
                stylesWidth="290px"
                stylesTransform="translateX(-100%)"
              />
            </div>
            <input
              placeholder={t("MerchantData.firstName")}
              value={userData.firstName}
              onChange={updateField('firstName')}
              style={styles.input}
            />
            <input
              placeholder={t("MerchantData.lastName")}
              value={userData.lastName}
              onChange={updateField('lastName')}
              style={styles.input}
            />
            <input
              placeholder={t("MerchantData.email")}
              value={userData.email}
              onChange={updateField('email')}
              style={styles.input}
            />
            <input
              placeholder={t("MerchantData.iban")}
              value={userData.iban}
              onChange={updateField('iban')}
              style={styles.input}
            />
            <div
              style={{ display: "flex", alignItems: "center", width: "110%" }}
            >
            <input
              type="password"
              placeholder={t("MerchantData.password")}
              value={userData.password}
              onChange={updateField('password')}
              style={styles.input}
            />
              <InfoIcon
                text={t("MerchantData.info.password")}
                stylesWidth="290px"
                stylesTransform="translateX(-100%)"
              />
              </div>
            <input
              type="password"
              placeholder={t("MerchantData.confirmPassword")}
              value={userData.confirmPassword}
              onChange={updateField('confirmPassword')}
              style={styles.input}
              onKeyDown={handleEnterKeyDown}
            />
            {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
            <button
              onClick={handleRegisterClick}
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {t("Button.register")}
            </button>

            <button onClick={handleContinue} style={styles.loginButton}>
              {t("Register.loginText")}
            </button>
          </>
        )}

        {isAccountCreated && !isCodeVerified && (
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
            <StyledTitle text={t("Register.confirmationTitle")} />
            <StyledTitle2 text={t("Register.confirmationText")} />

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

export default Register;
