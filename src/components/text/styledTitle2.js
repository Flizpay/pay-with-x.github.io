export const StyledTitle2 = ({ text }) => {
    return (
      <div style={styles.textStyle}>
        <h2 style={{ color: '#666', fontWeight: '200', fontSize: '1rem', lineHeight: '1.3' }}>
          {text}
        </h2>
      </div>
    );
};

const styles = {
    textStyle: {
      marginTop: '-10px',
      textAlign: 'left',
      color: '#666', // Lighter color
      maxWidth: '320px',
      fontSize: '1rem',
      fontWeight: '200', // Even lighter weight
    },
};
