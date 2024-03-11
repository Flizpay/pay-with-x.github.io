
export const StyledTitle = ({ text}) => {
    return (
      <div style={styles.textStyle}>
        <h2 style={{ color: 'black', fontWeight: 'normal', fontSize: '1.4rem', lineHeight: '1.3' }}>
          {text}
        </h2>
      </div>
    );
  };

  // Default Props
  const styles = {
    textStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      textAlign: 'left',
      color: 'black',
      maxWidth: '100%', // Ensure it takes full width of its parent
      fontSize: '1.2rem',
      lineHeight: '0.6',
      fontWeight: '300',
  },
  }