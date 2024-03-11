import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header";
import { keyDownHandler } from "../../../utils/keyHandlers"; // Adjust the path as needed
import { StyledTitle } from "../../../components/text/styledTitle"; // Adjust the path as needed
import { StyledTitle2 } from "../../../components/text/styledTitle2"; // Adjust the path as needed
import CodeVerificationInput from "../../../components/codeVerificationInput";
import { useTranslation } from "react-i18next";
import BackButton from "../../../components/backButton";
import { styles } from "./styles"; // Adjust the import path as needed
import { handleFieldChange, handleSubmit, handleEmailCheck } from "./functions";
import InfoIcon from "../../../components/infoIcon";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  const [errorMessage, setErrorMessage] = useState("");
  const [isEmailChecked, setIsEmailChecked] = useState(false); // New state to track email verification
  const [isCodeVerified, setIsCodeVerified] = useState(false); // New state to track code verification
  const [isPasswordChanged, setIsPasswordChanged] = useState(false); // New state to track code verification
  const [emailCode, setEmailCode] = useState('');
  
  const handleContinue = async () => {
    navigate("/login");
  };

  const handleCodeVerified = (verified) => {
    setIsCodeVerified(verified);
  };

  const handleErrorMessage = (message) => {
    setErrorMessage(message);
  };

  // Wrap the handler to pass in required arguments
  const onEmailCheck = () =>
    handleEmailCheck(email, setIsEmailChecked, setErrorMessage, t);
    
  const onSubmit = () =>
    handleSubmit(password, confirmPassword, emailCode, setIsPasswordChanged, setErrorMessage, t);

  const buttonStyle = {
    ...styles.button,
    backgroundColor: isHovered ? "rgba(0, 0, 0, 0.8)" : "black",
  };

  return (
    <div style={{ backgroundColor: "white", color: "#fff" }}>
      <Header showFullHeader={false} />

      <div style={styles.container}>
        {!isEmailChecked && (
          <>
            <BackButton />
            <StyledTitle text={t("ResetPassword.title")} />

            <StyledTitle2 text={t("ResetPassword.emailRequestTitle")} />

            <input
              placeholder={t("MerchantData.email")}
              value={email}
              onChange={handleFieldChange(setEmail, setErrorMessage)}
              style={styles.input}
              onKeyDown={(event) =>
                keyDownHandler("Enter", onEmailCheck)(event)
              }
            />
            {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <button
                onClick={onEmailCheck}
                style={buttonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {t("Button.continue")}
              </button>
            </div>
          </>
        )}
        {isEmailChecked && !isCodeVerified && (
          <>
            <CodeVerificationInput
              errorMessage={errorMessage}
              email={email}
              handleCodeVerified={handleCodeVerified}
              handleErrorMessage={handleErrorMessage}
              setEmailCode={setEmailCode}
            />
          </>
        )}
        {isCodeVerified && !isPasswordChanged && (
          <>
            <StyledTitle text={t("ResetPassword.title")} />

            <StyledTitle2 text={t("ResetPassword.insertNewPassTitle")} />

            <div
              style={{ display: "flex", alignItems: "center", width: "110%" }}
            >
              <input
                placeholder={t("MerchantData.password")}
                type="password"
                style={{ ...styles.input, cursor: 'text' }} 
                value={password}
                onChange={handleFieldChange(setPassword, setErrorMessage)}
                onKeyDown={(event) => keyDownHandler("Enter", onSubmit)(event)}
              />
              <InfoIcon
                text={t("MerchantData.info.password")}
                stylesWidth="290px"
                stylesTransform="translateX(-100%)"
              />
            </div>
            <input
              placeholder={t("MerchantData.confirmPassword")}
              type="password"
              style={styles.input}
              value={confirmPassword}
              onChange={handleFieldChange(setConfirmPassword, setErrorMessage)}
              onKeyDown={(event) => keyDownHandler("Enter", onSubmit)(event)}
            />
            {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}

            <button
              onClick={onSubmit}
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {t("ResetPassword.title")}
            </button>
          </>
        )}
        {isPasswordChanged && (
          <>
            <StyledTitle text={t("ResetPassword.confirmationTitle")} />
            <StyledTitle2 text={t("ResetPassword.confirmationText")} />

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

export default ResetPassword;
