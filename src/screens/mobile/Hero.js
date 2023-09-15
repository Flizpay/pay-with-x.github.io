import React from 'react';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '100px 100px',
    flexDirection: 'row',
  },
  mobileContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px 20px',
  },
  contentContainer: {
    textAlign: 'center',
    flex: 1,
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 700,
    marginBottom: 20,
  },
  mobileHeroTitle: {
    fontSize: '2rem',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    fontWeight: 300,
    marginBottom: 30,
  },
  mobileHeroSubtitle: {
    fontSize: '1rem',
  },
  button: {
    backgroundColor: '#00D1B2',
    color: '#fff',
    border: 'none',
    padding: '15px 30px',
    fontSize: '1rem',
    borderRadius: 25,
    cursor: 'pointer',
  },
  logoContainer: {
    textAlign: 'center',
    flex: 1,
    marginTop: '50px'
  },
  logoImage: {
    maxWidth: '75%',
    height: 'auto',
  },
};

function Hero() {
  const isMobile = window.innerWidth <= 768;

  const combinedContainerStyles = isMobile 
    ? { ...styles.container, ...styles.mobileContainer } 
    : styles.container;

  const combinedHeroTitle = isMobile 
    ? { ...styles.heroTitle, ...styles.mobileHeroTitle } 
    : styles.heroTitle;

  const combinedHeroSubtitle = isMobile 
    ? { ...styles.heroSubtitle, ...styles.mobileHeroSubtitle } 
    : styles.heroSubtitle;

  return (
    <div style={combinedContainerStyles}>
      <div style={styles.contentContainer}>
        <h1 style={combinedHeroTitle}>We Make Payments for Everyone!</h1>
        <p style={combinedHeroSubtitle}>Mobile payments made instant, easy, and secure.</p>
        <button style={styles.button}>Contact Us</button>
      </div>
      <div style={styles.logoContainer}>
        <img src="/mainIcon.png" alt="Mobile Payment Icon" style={styles.logoImage} />
      </div>
    </div>
  );
}

export default Hero;
