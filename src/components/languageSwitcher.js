import { MdLanguage } from "react-icons/md";
import React from "react";
import { useTranslation } from "react-i18next";



const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const isMobile = window.innerWidth <= 768;

    const select = isMobile ? styles.selectMobile : styles.select;

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
      };


return (
    <div style={{...styles.languageSwitcher, backgroundColor: 'black', color: 'white' }}>
    <MdLanguage style={{ verticalAlign: "middle", marginRight: "0px"}} size={24} />
    <select
      value={currentLanguage}
      onChange={(e) => changeLanguage(e.target.value)}
      style={{
        ...select,
        backgroundColor: 'black',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      <option value="en">{t("header.language.english")}</option>
      <option value="de">{t("header.language.german")}</option>
      {/* Add more languages as needed */}
    </select>
  </div>
);

}

const styles = {
    mobileNavLink: {
        color: "#00D1B2",
        textDecoration: "none",
        fontWeight: 500,
        cursor: "pointer",
        fontSize: "2rem",
        margin: "15px 0",
      },
    languageSwitcher: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        // Assuming you want the entire switcher, including the icon, to have a black background
        backgroundColor: 'black',
      },
      select: {
        flexGrow: 1, // Ensure select element takes available space
        marginLeft: '0', // Space between icon and select
        backgroundColor: 'black',
        color: 'white',
        cursor: 'pointer',
        border: 'none', // Explicitly removing the border
        outline: 'none', // Removing the outline to prevent it from showing on focus
        // Additional styling to ensure visual integration with the design
        padding: '0px', // Adjusting padding for visual consistency
        borderRadius: '0px', // Optional: adds rounded corners to match your design aesthetic
        fontSize:'1rem'
    },
    selectMobile: {
        flexGrow: 1, // Ensure select element takes available space
        marginLeft: '0', // Space between icon and select
        backgroundColor: 'black',
        color: 'white',
        cursor: 'pointer',
        border: 'none', // Explicitly removing the border
        outline: 'none', // Removing the outline to prevent it from showing on focus
        // Additional styling to ensure visual integration with the design
        padding: '0px', // Adjusting padding for visual consistency
        borderRadius: '0px', // Optional: adds rounded corners to match your design aesthetic
        fontSize:'1rem'
    },
}
export default LanguageSwitcher; 
