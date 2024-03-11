import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { keyDownHandler } from "../../../utils/keyHandlers"; // Adjust the path as needed
import { StyledTitle } from "../../../components/text/styledTitle"; // Adjust the path as needed
import { StyledTitle2 } from "../../../components/text/styledTitle2"; // Adjust the path as needed
import { useTranslation } from "react-i18next";
import MerchantHeader from "../../../components/merchantHeader";
import BackButton from "../../../components/backButton";
import InfoIcon from "../../../components/infoIcon";
import { styles } from "./styles"; // Adjust the import path as needed
import { fetchUserData, handleSubmit } from "./functions";

const ResetBaseInfo = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState("");
  const [isNameChanged, setIsNameChanged] = useState(false); // New state to track code verification
  const [isHovered, setIsHovered] = useState(false); // New state to track code verification
  const [userData, setUserData] = useState({});

  const handleFieldChange = (setter, resetError = () => {}) => (event) => {
    setter(event.target.value);
    resetError(); // Optionally reset the error message on change
};

  const onFormSubmit = () => {
    handleSubmit(userData.email, firstName, lastName, companyName, setErrorMessage, setIsNameChanged, t);
  };

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData(setUserData);
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    // This effect runs only once on component mount because of an empty dependency array
    // It initializes the state with userData if present
    if (!lastName && userData.lastName) {
      setLastName(userData.lastName);
    }
    if (!firstName && userData.firstName) {
      setFirstName(userData.firstName);
    }
    if (!companyName && userData.companyName) {
      setCompanyName(userData.companyName);
    }
  }, [userData]); // Only re-run this effect if userData changes

  const handleContinue = async () => {
    navigate("/merchantBaseInfo");
  };

  const buttonStyle = {
    ...styles.button,
    backgroundColor: isHovered ? "rgba(0, 0, 0, 0.8)" : "black",
  };

  return (
    <div style={{ backgroundColor: "white", color: "#fff" }}>
      <MerchantHeader />

      <div style={styles.container}>
        {!isNameChanged && (
          <>
            <BackButton />
            <StyledTitle text={t("ResetBaseInfo.title")} />

            <StyledTitle2 text={t("ResetBaseInfo.text")} />

            <span style={styles.label}>{t("MerchantData.companyName")}</span>
            <div
              style={{ display: "flex", alignItems: "center", width: "110%" }}
            >
              <input
                style={styles.input}
                value={companyName}
                onChange={handleFieldChange(setCompanyName,() => setErrorMessage(''))}
                onKeyDown={(event) =>
                  keyDownHandler("Enter", onFormSubmit)(event)
                }
              />
              <InfoIcon
                text={t("MerchantData.info.companyName")}
                stylesWidth="290px"
                stylesTransform="translateX(-100%)"
              />
            </div>

            <span style={styles.label}>{t("MerchantData.firstName")}</span>
            <input
              style={styles.input}
              value={firstName}
              onChange={handleFieldChange(setFirstName,() => setErrorMessage(''))}
              onKeyDown={(event) =>
                keyDownHandler("Enter", onFormSubmit)(event)
              }
            />
            <span style={styles.label}>{t("MerchantData.lastName")}</span>
            <input
              style={styles.input}
              value={lastName}
              onChange={handleFieldChange(setLastName,() => setErrorMessage(''))}
              onKeyDown={(event) =>
                keyDownHandler("Enter", onFormSubmit)(event)
              }
            />
            {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
            <button
              onClick={onFormSubmit}
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {t("Button.update")}
            </button>
          </>
        )}
        {isNameChanged && (
          <>
            <StyledTitle text={t("ResetBaseInfo.confirmationTitle")} />
            <StyledTitle2 text={t("ResetBaseInfo.confirmationText")} />

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

export default ResetBaseInfo;
