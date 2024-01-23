const BlueButton = ({ text, onClick, backgroundColor }) => {
    const buttonStyles = {
        marginTop: '30px',
        padding: '8px 20px',
        background: backgroundColor || 'linear-gradient(90deg, #6a11cb 0%, #2575fc 74%)', // Use prop value or default
        border: 'none',
        color: '#fff',
        borderRadius: '25px',
        cursor: 'pointer',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        fontWeight: '600',
        fontSize: '15px',
        letterSpacing: '1px',
    };

    return (
        <button style={buttonStyles} onClick={onClick}>
        {text}
        </button>
    );
};
  
export default BlueButton;