import React, { useState, useRef, useEffect } from "react";
import LeftMenu from "../../../components/leftMenu";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import MerchantHeader from "../../../components/merchantHeader";
import { StyledTitle } from "../../../components/text/styledTitle"; // Adjust the path as needed
import { useTranslation } from "react-i18next";
import { FaChevronRight } from "react-icons/fa";
import InfoIcon from "../../../components/infoIcon";
import { styles } from "./styles"; // Adjust the import path as needed
import { fetchUserData, formatIban } from "./functions";

const MerchantSecurityInfo = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;
  const [userData, setUserData] = useState({});
  const [showToken, setShowToken] = useState(false);
  const [showFullIban, setShowFullIban] = useState(false);

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData(setUserData);
  }, []); // Empty dependency array means this effect runs once on mount

  const handleNavigate = () => {
    navigate("/setNewPassword"); // Replace '/next-screen-path' with your desired route
  };

  const toggleIbanVisibility = (event) => {
    event.stopPropagation();
    setShowFullIban(!showFullIban);
  };

  const toggleTokenVisibility = (event) => {
    event.stopPropagation();
    setShowToken(!showToken);
  };

  return (
    <div style={{ backgroundColor: "white", color: "#fff" }}>
      <MerchantHeader />

      <div style={styles.container}>
        <LeftMenu />

        <div style={styles.mainContent}>
          <div style={styles.settingSection}>
            <StyledTitle
              text={t("MerchantHome.securityInfo.title")}
              showBackButton={false}
            />

            <div
              style={{ ...styles.settingItem, cursor: "pointer" }}
              onClick={handleNavigate}
            >
              <span style={{ ...styles.settingLabel, fontWeight: "bold" }}>
                {t("MerchantData.password")}
              </span>
              <div style={styles.rightContainer}>
                <span
                  style={{
                    ...styles.input,
                    fontWeight: "normal",
                    marginLeft: "10px",
                  }}
                >
                  ••••••••••
                </span>
                <FaChevronRight style={styles.arrowIcon} />
              </div>
            </div>

            <div style={styles.settingItem}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ ...styles.settingLabel, fontWeight: "bold" }}>
                  {t("MerchantData.pluginToken")}
                </span>

                <InfoIcon
                  text={t("MerchantData.info.pluginToken")}
                  stylesWidth={isMobile ? "290px" : "500px"} // Example of passing different prop values
                  stylesTransform={
                    isMobile ? "translateX(-20%)" : "translateX(-15%)"
                  }
                />
              </div>
              <div
                style={{
                  ...styles.inputWrapper,
                  ...{ display: "flex", alignItems: "center" },
                }}
              >
                <span
                  style={{
                    ...styles.input,
                    fontWeight: "normal",
                    marginRight: "10px",
                  }}
                >
                  {showToken ? userData.pluginToken : "••••••••••"}
                </span>
                <div
                  style={styles.icon}
                  onClick={toggleTokenVisibility}
                >
                  {showToken ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <div style={{ marginTop: "70px" }}>
              <StyledTitle
                text={t("MerchantHome.bankInfo.title")}
                showBackButton={false}
              />

              <div
                style={{ ...styles.settingItem, cursor: "pointer" }}
                onClick={() => navigate("/resetIban")}
              >
                <span style={{ ...styles.settingLabel, fontWeight: "bold" }}>
                  {t("MerchantData.iban")}
                </span>
                <div style={styles.rightContainer}>
                  <span
                    style={{
                      ...styles.input,
                      fontWeight: "normal",
                      marginLeft: "10px",
                    }}
                  >
                    {formatIban(userData.iban, showFullIban)}
                  </span>
                  <div style={styles.icon} onClick={toggleIbanVisibility}>
                    {showFullIban ? <FaEyeSlash /> : <FaEye />}
                  </div>
                  <FaChevronRight style={styles.arrowIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default MerchantSecurityInfo;
