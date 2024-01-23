export const StyledTitle = ({ text }) => {
    return (
      <div style={styles.textStyle}>
        <h2 style={{ color: 'black', fontWeight: 'normal', fontSize: '1.4rem', lineHeight: '1.3' }}>
          {text}
        </h2>
      </div>
    );
  };

  const styles = {
    textStyle:{
      textAlign: 'left',
      color: 'black',
      maxWidth: '320px',
      fontSize: '1.2rem',
      lineHeight: '0.6',
      fontWeight: '300', // Set font-weight to lighter (normal is usually 400)
    },
  }