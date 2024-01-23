import React, { useState } from "react"; // import useState
import { useNavigate,useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const LeftMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const isActive = (route) => {
    return location.pathname.includes(route);
  };

  const menuItemStyle = (route, index) => ({
    ...styles.menuItem,
    backgroundColor: 
    index === hoveredIndex
    ? "rgba(0, 209, 178, 0.1)" // Hovered color
    : isActive(route) ? "rgba(0, 209, 178, 0.3)" : "transparent",
  });
    
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to keep track of the hovered menu item
  const { t, i18n } = useTranslation();
  

  return (
    <div style={styles.sidebar}>

      <div
        style={menuItemStyle('merchantBaseInfo',0)}
        onMouseEnter={() => setHoveredIndex(0)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={() => {
          navigate("/merchantBaseInfo");
        }}
      >
        <span>{t('MerchantHome.baseInfo.title')}</span>
      </div>
      <div
        style={menuItemStyle('merchantBankInfo',1)}
        onMouseEnter={() => setHoveredIndex(1)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={() => {
          navigate("/merchantBankInfo");
        }}
      >
        <span>{t('MerchantHome.bankInfo.title')}</span>
      </div>
      <div
        style={menuItemStyle('merchantSecurityInfo',2)}
        onMouseEnter={() => setHoveredIndex(2)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={() => {
          navigate("/merchantSecurityInfo");
        }}
      >
        <span>{t('MerchantHome.securityInfo.title')}</span>
      </div>
      <div
        style={menuItemStyle(3)}
        onMouseEnter={() => setHoveredIndex(3)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={() => {
          navigate("/merchantBenefits");
        }}
      >
      </div>
    </div>
  );
};

const styles = {

sidebar: {
  width:"20%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  backgroundColor: "white",
  height: "100vh",
  // ... other styles ...
},

  menuItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "left", // Vertically aligns items in the center
    justifyContent: "center", // Horizontally aligns items in the center
    marginBottom: "20px",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "10px",
color: "#333333",
    width: "93%",
    transition: "background-color 0.3s",
  },
  menuIcon: {
    marginRight: "15px",
  },
};

export default LeftMenu;
