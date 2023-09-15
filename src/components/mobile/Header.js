import React, { useState } from 'react';

const styles = {
  header: {
    backgroundColor: '#000',
    color: '#00C853',
    padding: '0px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2,
    position: 'relative',
  },
  logoImage: {
    height: '90px',
    width: '100px',
  },
  dropdown: {
    backgroundColor: '#000',
    border: 'none',
    color: '#00D1B2',
    fontSize: '42px',
    marginRight: '-40px'
  },
  slideInMenu: {
    position: 'fixed',
    top: 0,
    right: '-100%',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    transition: 'right 0.3s ease-out',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideInMenuActive: {
    right: '0',
  },
  navLink: {
    color: '#00D1B2',
    textDecoration: 'none',
    fontWeight: 500,
    cursor: 'pointer',
    fontSize: '2rem',
    margin: '15px 0',
  },
};

function MobileHeader() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const scrollToSection = (sectionID) => {
    document.getElementById(sectionID).scrollIntoView({ behavior: 'smooth' });
    setShowDropdown(false);
  };

  return (
    <>
      <header style={styles.header}>
        <img src="/logo.png" alt="PayX Logo" style={styles.logoImage} />
        <button style={styles.dropdown} onClick={toggleDropdown}>
          ☰
        </button>
      </header>
      <div style={{ ...styles.slideInMenu, ...(showDropdown && styles.slideInMenuActive) }}>
        <div onClick={() => scrollToSection('home')} style={styles.navLink}>Home</div>
        <div onClick={() => scrollToSection('merchant')} style={styles.navLink}>Merchant</div>
        <div onClick={() => scrollToSection('customer')} style={styles.navLink}>Customer</div>
        <div onClick={() => scrollToSection('aboutUs')} style={styles.navLink}>Our Story</div>
      </div>
    </>
  );
}

export default MobileHeader;
