import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { keyDownHandler } from "../../../utils/keyHandlers"; // Adjust the path as needed
import { StyledTitle } from "../../../components/text/styledTitle"; // Adjust the path as needed
import { StyledTitle2 } from "../../../components/text/styledTitle2"; // Adjust the path as needed
import { useTranslation } from "react-i18next";
import MerchantHeader from "../../../components/merchantHeader";
import BackButton from "../../../components/backButton";
import { styles } from "./styles"; // Adjust the import path as needed
import { fetchUserData, handleSubmit } from "./functions";
import InfoIcon from "../../../components/infoIcon";

const SetNewPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  const [errorMessage, setErrorMessage] = useState("");
  const [isPasswordChanged, setIsPasswordChanged] = useState(false); // New state to track code verification
  const [userData, setUserData] = useState({});

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
    setErrorMessage(""); // Reset error message on password change
  };
  const handleNewPasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage(""); // Reset error message on password change
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setErrorMessage(""); // Reset error message on password change
  };

  // Function to call handleSubmit with all needed arguments
  const onSubmit = async () => {
    await handleSubmit({
      userData,
      oldPassword,
      password,
      confirmPassword,
      t,
      setErrorMessage,
      setIsPasswordChanged,
    });
  };

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData(setUserData);
  }, []); // Empty dependency array means this effect runs once on mount

  const handleContinue = async () => {
    navigate("/merchantSecurityInfo");
  };

  const buttonStyle = {
    ...styles.button,
    backgroundColor: isHovered ? "rgba(0, 0, 0, 0.8)" : "black",
  };

  return (
    <div style={{ backgroundColor: "white", color: "#fff" }}>
      <MerchantHeader />

      <div style={styles.container}>
        {!isPasswordChanged && (
          <>
            <BackButton />
            <StyledTitle text={t("ResetPassword.title")} />

            <StyledTitle2 text={t("ResetPassword.insertCurrentPassTitle")} />

            <input
              placeholder={t("MerchantData.password")}
              type="password"
              style={styles.input}
              value={oldPassword}
              onChange={handleOldPasswordChange}
              onKeyDown={(event) => keyDownHandler("Enter", onSubmit)(event)}
            />

            <StyledTitle2 text={t("ResetPassword.insertNewPassTitle")} />

            <div
              style={{ display: "flex", alignItems: "center", width: "110%" }}
            >
              <input
                placeholder={t("MerchantData.newPassword")}
                type="password"
                style={styles.input}
                value={password}
                onChange={handleNewPasswordChange}
                onKeyDown={(event) => keyDownHandler("Enter", onSubmit)(event)}
              />
              <InfoIcon
                text={t("MerchantData.info.password")}
                stylesWidth="290px"
                stylesTransform="translateX(-100%)"
              />
            </div>
            <input
              placeholder={t("MerchantData.confirmNewPassword")}
              type="password"
              style={styles.input}
              value={confirmPassword}
              onChange={handleConfirmPassword}
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

export default SetNewPassword;
