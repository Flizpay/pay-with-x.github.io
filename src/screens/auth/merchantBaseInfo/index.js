import React, { useState, useRef, useEffect } from "react";
import LeftMenu from "../../../components/leftMenu";
import { getPresignedUrl, updateLogoUrl } from "../../../api/apiClient";
import { getMerchant } from "../../../api/apiClient";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import MerchantHeader from "../../../components/merchantHeader";
import { StyledTitle } from "../../../components/text/styledTitle"; // Adjust the path as needed
import { StyledTitle2 } from "../../../components/text/styledTitle"; // Adjust the path as needed
import { useTranslation } from "react-i18next";
import { FaChevronRight } from "react-icons/fa";
import defaultUserImage from '../../../images/profilePicDefault.png'; // Import the image

const MerchantBaseInfo = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const fileInputRef = useRef(null);



  const [userData, setUserData] = useState({});

  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      const response = await getMerchant();
      console.log(response);
      setUserData({
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        companyName: response.data.companyName,
        logo: response.data.logo,
        pluginToken: response.data.pluginToken,
        mobilePhone:response.data.mobilePhone,
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

  // const handleSaveSettings = () => {
  //   setCompanyName(newCompanyName);
  //   alert("Settings saved successfully!");
  // };

  const handleLogoUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const presignedUrlData = await getPresignedUrl(file.name);
      const presignedUrl = presignedUrlData.data.url;

      await fetch(presignedUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "image/jpeg",
        },
        body: file,
      });

      const logoUrl = presignedUrl.split("?")[0];
      await updateLogoUrl(logoUrl);

      alert("Logo uploaded successfully!");
    } catch (error) {
      console.error("Error uploading logo:", error);
      alert("Error uploading logo.");
    }
  };

  const handleCustomFileUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleNavigate = () => {
    navigate('/resetBaseInfo'); // Replace '/next-screen-path' with your desired route
  };

  return (
    <div style={{ backgroundColor: "white", color: "#fff" }}>
      <MerchantHeader />

      <div style={styles.container}>
        <LeftMenu />

        <div style={styles.mainContent}>
          <div style={styles.settingSection}>
            <StyledTitle text={t("MerchantHome.baseInfo.title")} />

            <img src={defaultUserImage} alt="Default User" style={styles.userImage} />

            <div style={{...styles.settingItem, cursor:'pointer'}} onClick={handleNavigate}>
              <span style={{ ...styles.settingLabel, fontWeight: "bold" }}>
                {t("MerchantData.companyName")}
              </span>

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
            <div style={{...styles.settingItem, cursor:'pointer'}} onClick={handleNavigate}>
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

            <div style={styles.settingItem}>
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
          <div style={{...styles.settingItem, cursor:'pointer'}} onClick={handleNavigate}>
              <span style={{ ...styles.settingLabel, fontWeight: "bold" }}>
                {t("MerchantData.mobilePhone")}
              </span>
              <div style={styles.rightContainer}>
                <span
                  style={{
                    ...styles.input,
                    fontWeight: "normal",
                    marginLeft: "10px",
                  }}
                >
                  {userData.mobilePhone}
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

const styles = {
  userImage: {
    width: '100px', // Adjust the size as needed
    height: '100px', // Adjust the size as needed
    borderRadius: '50%', // Makes the image circular
    marginTop: '20px', // Space above the image
    marginBottom:'20px'
    // Additional styling if needed
  },
  rightContainer: {
    display: "flex",
    alignItems: "center",
    // Add any additional styling as needed
  },
  arrowIcon: {
    cursor: "pointer",
    marginLeft: "10px", // Space between the icon and the preceding text
    color: "#333",
  },
  inputWrapper: {
    display: "flex",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    backgroundColor: "white",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "flex-start",
    padding: "0px",
    minHeight: "100vh",
    width: "80%",
    marginLeft: "20px",
  },
  title: {
    color: "white",
    fontSize: "2.2rem",
    fontWeight: "bold",
  },
  settingSection: {
    marginTop: "20px",
    width: "100%",
    maxWidth: "700px",
    marginBottom: "25px",
  },
  sectionTitle: {
    fontSize: "1.6rem",
    color: "#ddd",
    borderBottom: "2px solid #00D1B2",
    paddingBottom: "8px",
    marginBottom: "18px",
  },
  settingItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "28px",
    borderBottom: "1px solid #ccc", // Add a grey underline
  },
  settingLabel: {
    fontSize: "1rem",
    color: "rgba(0, 0, 0, 0.7)", // Adjust the opacity to make it lighter
    fontWeight: "bold",
  },
  input: {
    borderRadius: "5px",
    padding: "10px",
    fontSize: "1rem",
    color: "black",
    backgroundColor: "transparent",
    // Removed flex: 1
  },

  select: {
    border: "2px solid #00D1B2",
    borderRadius: "5px",
    padding: "10px",
    fontSize: "1rem",
    color: "#a9a9a9",
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  customFileUploadButton: {
    border: "2px solid #00D1B2",
    borderRadius: "5px",
    padding: "15px",
    fontSize: "1.2rem",
    color: "#a9a9a9",
    backgroundColor: "transparent",
    cursor: "pointer",
    textAlign: "center",
    minWidth: "80px",
    minHeight: "80px",
  },
  buttonContainer: {
    marginTop: "-30px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  icon: {
    cursor: "pointer",
    color: "black",
  },
};

export default MerchantBaseInfo;
