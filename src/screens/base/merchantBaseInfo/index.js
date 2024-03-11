import React, { useState, useRef, useEffect } from "react";
import LeftMenu from "../../../components/leftMenu";
import { useNavigate } from "react-router-dom";
import MerchantHeader from "../../../components/merchantHeader";
import { StyledTitle } from "../../../components/text/styledTitle"; // Adjust the path as needed
import { useTranslation } from "react-i18next";
import { FaChevronRight } from "react-icons/fa";
import defaultUserImage from "../../../images/profilePicDefault.png"; // Import the image
import InfoIcon from "../../../components/infoIcon";
import { MdModeEdit } from 'react-icons/md'; // Importing the edit icon
import { styles } from "./styles"; // Adjust the import path as needed
import { fetchUserData, handleLogoUpload } from "./functions";

const MerchantBaseInfo = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;

  const fileInputRef = useRef(null);

  const [userData, setUserData] = useState({});

  const handleCustomFileUploadClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    fetchUserData(setUserData);
  }, []);
  
  const handleNavigate = () => {
    navigate("/resetBaseInfo"); // Replace '/next-screen-path' with your desired route
  };

  const handleResetEmail = () => {
    navigate("/resetEmail");
  };

  return (
    <div style={{ backgroundColor: "white", color: "#fff" }}>
      <MerchantHeader />

      <div style={styles.container}>
        <LeftMenu />

        <div style={styles.mainContent}>
          <div style={styles.settingSection}>
            <StyledTitle text={t("MerchantHome.baseInfo.title")} />
            <div>
              <div
              style={{...styles.imageContainer, cursor:'pointer'}}
                onClick={handleCustomFileUploadClick}
              >
                <img
                  src={userData.logo || defaultUserImage}
                  alt="User"
                  style={styles.userImage}
                />
                <MdModeEdit size={18} color="black" style={styles.editIcon} />
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleLogoUpload}
                style={{ display: "none" }} // Hide the file input element
                accept="image/jpeg,image/png,image/jpg" // Accept JPEG and PNG formats
              />
            </div>

            <div
              style={{ ...styles.settingItem, cursor: "pointer" }}
              onClick={handleNavigate}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ ...styles.settingLabel, fontWeight: "bold" }}>
                  {t("MerchantData.companyName")}
                </span>

                <InfoIcon
                  text={t("MerchantData.info.companyName")}
                  stylesWidth={isMobile ? "290px" : "500px"} // Example of passing different prop values
                  stylesTransform={
                    isMobile ? "translateX(-35%)" : "translateX(-15%)"
                  }
                />
              </div>

              <div style={styles.rightContainer}>
                <span
                  style={{
                    ...styles.input,
                    fontWeight: "normal",
                    marginLeft: "10px",
                  }}
                >
                  {userData.companyName}
                </span>
                <FaChevronRight style={styles.arrowIcon} />
              </div>
            </div>
            <div
              style={{ ...styles.settingItem, cursor: "pointer" }}
              onClick={handleNavigate}
            >
              <span style={{ ...styles.settingLabel, fontWeight: "bold" }}>
                {t("MerchantHome.baseInfo.user")}
              </span>
              <div style={styles.rightContainer}>
                <span
                  style={{
                    ...styles.input,
                    fontWeight: "normal",
                    marginLeft: "10px",
                  }}
                >
                  {userData.firstName} {userData.lastName}
                </span>
                <FaChevronRight style={styles.arrowIcon} />
              </div>
            </div>

            <div
              style={{ ...styles.settingItem}}
              
            >
              <span style={{ ...styles.settingLabel, fontWeight: "bold" }}>
                {t("MerchantData.email")}
              </span>
              <div style={styles.rightContainer}>
                <span
                  style={{
                    ...styles.input,
                    fontWeight: "normal",
                    marginLeft: "10px",
                  }}
                >
                  {userData.email}
                </span>
                <FaChevronRight style={styles.arrowIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default MerchantBaseInfo;
