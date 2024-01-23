import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigate } from "react-router-dom";

function Popup  () {
  const navigate = useNavigate();

      // Updated the handleLogout function
      const handleLogout = async () => {
        try {
          await AsyncStorage.removeItem('@jwtToken'); // Remove the token from storage
          navigate('/login'); // Navigate to the login screen or any other appropriate screen
          console.log('Successfully logged out');
        } catch (error) {
          console.log('Error during logout:', error.message);
        }
      };

      return(
    <div style={styles.popup}>
      <div style={styles.popupContent}>
        <div style={styles.logoutOption} onClick={handleLogout}>Log Out</div>
      </div>
    </div>
  );
      }

  const styles={
    popup : {
      position: 'absolute',
      top: '100%', // Position below the icon
      left: '50%',
      transform: 'translateX(-50%)', // Center align horizontally
      marginTop: '8px', // Space between the icon and popup
      backgroundColor: '#333', // Dark grey background
      color: 'white', // Text color
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      borderRadius: '5px',
      padding: '10px',
      zIndex: 1000,
      width: '100px', // Adjust the width as needed
      padding: '20px', // Increase padding for more internal space
      // You can also set a min-height if necessary
  },
  popupContent : {
    display: 'flex',
    flexDirection: 'column',
  },
  logoutOption : {
    cursor: 'pointer',
    padding: '5px 10px', // Padding for each option
    textAlign: 'center', // Center align text
  }
  }

export default Popup;
