import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MdLanguage } from "react-icons/md";

function Header({ showFullHeader = true }) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const isMobile = window.innerWidth <= 768;
  const [isHovered, setIsHovered] = useState(false);

  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("@jwtToken");
      setHasToken(!!token);
    };

    checkToken();
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const scrollToSection = (sectionID) => {
    document.getElementById(sectionID).scrollIntoView({ behavior: "smooth" });
    if (isMobile) {
      setShowDropdown(false);
    }
  };

  const handleProfile = () => {
    navigate("/merchantBaseInfo");
  };

  const navLink = isMobile ? styles.mobileNavLink : styles.navLink;

  return (
    <>
      <header style={isMobile ? styles.mobileHeader : styles.header}>
        <div style={styles.logoContainer} onClick={() => navigate("/")}>
          <img
            src="/Flizlogo.png"
            alt="Fliz Logo"
            style={isMobile ? styles.mobileLogoImage : styles.logoImage}
          />
        </div>

            {isMobile ? (
              <>
                <div style={styles.languageSwitcher} 
                onClick={() => changeLanguage(currentLanguage === "en" ? "de" : "en")}
                >
                  <MdLanguage style={{ verticalAlign: "middle", marginRight:'5px' }} />
                  <span>{currentLanguage === "en" ? t('header.language.english') : t('header.language.german')}</span>
                                  </div>

               {showFullHeader &&   (   
                 <>             
                <button style={styles.dropdown} onClick={toggleDropdown}>
                  ☰
                </button>
                </>
                )
               }
              </>
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                               {showFullHeader &&   (   
                 <>  
                <nav style={styles.nav}>
                  <div
                    onClick={() => scrollToSection("merchant")}
                    style={navLink}
                  >
                    {t("header.merchant")}
                  </div>
                  <div
                    onClick={() => scrollToSection("customer")}
                    style={navLink}
                  >
                    {t("header.customer")}
                  </div>
                  <div
                    onClick={() => scrollToSection("aboutUs")}
                    style={navLink}
                  >
                    {t("header.ourStory")}
                  </div>
                </nav>
                </> )}
                <div
                  style={styles.languageContainer}
                  onClick={() =>
                    changeLanguage(currentLanguage === "en" ? "de" : "en")
                  }
                >
                  <MdLanguage style={{ verticalAlign: "middle" }} />
                  <span>{currentLanguage === "en" ? t('header.language.english') : t('header.language.german')}</span>
                </div>

        
              </div>
            )}

      </header>
      {isMobile && showFullHeader && (
        <div
          style={{
            ...styles.slideInMenu,
            ...(showDropdown && styles.slideInMenuActive),
          }}
        >
          <div onClick={() => scrollToSection("merchant")} style={navLink}>
            {t("header.merchant")}
          </div>
          <div onClick={() => scrollToSection("customer")} style={navLink}>
            {t("header.customer")}
          </div>
          <div onClick={() => scrollToSection("aboutUs")} style={navLink}>
            {t("header.ourStory")}
          </div>

          <div onClick={() => navigate("/login")} style={navLink}>
            <button style={styles.mobileLoginButton}>Login</button>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  hoverTextContainer: {
    position: "absolute",
    top: "100%", // Positioning just below the icon
    left: "50%",
    transform: "translateX(-50%)",
    opacity: 0, // Initially hidden
    transition: "opacity 0.3s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // ... any other necessary styles ...
  },
  hoverText: {
    marginLeft: "8px", // Space between icon and text
    backgroundColor: "#333", // Dark grey background
    color: "#fff", // White text
    fontSize: "12px", // Font size
    padding: "4px 8px", // Padding around the text
    borderRadius: "8px", // Rounded corners
    marginTop: "20px",
  },
  iconContainer: {
    position: "relative", // Added to contain the absolute position of the hover text
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    // ... other styles ...
  },
  profileIcon: {
    cursor: "pointer",
    marginLeft: "50px",
    color: "white", // Set the icon color to white
    // You can add a slight shadow for better visibility on a black background
    textShadow: "0 0 3px black",
  },
  header: {
    backgroundColor: "#000",
    color: "#00C853",
    padding: "0px 100px", // Increased left padding from 30px to 50px
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "76px",
  },
  mobileHeader: {
    backgroundColor: "#000",
    color: "#00C853",
    padding: "0px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 2,
    position: "relative",
    overflow: "hidden",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: "auto",
    cursor: "pointer",
  },
  logoImage: {
    height: "110px",
    width: "120px",
    marginRight: "10px",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: 500,
    cursor: "pointer",
  },
  languageContainer: {
    marginLeft: "50px",
    display: "flex",
    gap: "5px",
    cursor: "pointer",
    color: "white",
    alignItems: "center",  // This line added to vertically center the contents
  },
  languageSwitcher: {
    cursor: "pointer",
    color: "white",
    marginRight: "20px",
    fontSize: "20px",
    alignItems: "center",  // This line added to vertically center the contents
  },
  mobileLogoImage: {
    height: "90px",
    width: "100px",
  },
  dropdown: {
    backgroundColor: "#000",
    border: "none",
    color: "#fff",
    fontSize: "42px",
    //marginRight: '-40px'
  },
  slideInMenu: {
    position: "fixed",
    top: 0,
    right: "-100%",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    transition: "right 0.3s ease-out",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  slideInMenuActive: {
    right: "0",
  },
  mobileNavLink: {
    color: "#00D1B2",
    textDecoration: "none",
    fontWeight: 500,
    cursor: "pointer",
    fontSize: "2rem",
    margin: "15px 0",
  },
 
  button: {
    backgroundColor: "#00D1B2",
    color: "#fff",
    border: "none",
    padding: "6px 25px",
    marginLeft: "15px",
    fontSize: "0.9rem",
    borderRadius: 25,
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  mobileLoginButton: {
    backgroundColor: "#00D1B2",
    color: "#fff",
    border: "none",
    padding: "6px 25px",
    marginLeft: "15px",
    fontSize: "2rem",
    borderRadius: 50,
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default Header;
