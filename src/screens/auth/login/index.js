import React, { useState, useRef  } from 'react';
import { login } from '../../../api/apiClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigate } from "react-router-dom";
import Header from '../../../components/header';
import { keyDownHandler } from '../../../utils/keyHandlers'; // Adjust the path as needed
import { StyledTitle } from '../../../components/text/styledTitle'; // Adjust the path as needed
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const [errorMessage, setErrorMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);


  const handleLogin = async () => {
    try {
      const lowercasedEmail = email.toLowerCase(); // Transform email to lowercase

      const response = await login(lowercasedEmail, password);
      const jwtToken = response.data.token;
      await AsyncStorage.setItem('@jwtToken', jwtToken);
      console.log(response)
      setEmail(lowercasedEmail);
      navigate('/merchantBaseInfo')
    } catch (error) {
      console.log('Error during login:', error.message);
      setErrorMessage(error.message);
    }
  };
  

  const handleResetPassword = () => {
    navigate('/resetPassword');
  }
  const handleRegister = () => {
    navigate('/register')
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage(''); // Reset error message on password change
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage(''); // Reset error message on password change
  };

  const handleEnterKeyDown = keyDownHandler('Enter', handleLogin);

  const buttonStyle = {
    ...styles.button,
    backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.8)':'black',
  };
  
  return (
    <div style={{ backgroundColor: 'white', color: '#fff'}}>
          <Header showFullHeader={false} />


    <div style={styles.container}>
    <StyledTitle text={t('Login.title')} />
 
      <input 
        placeholder={t('MerchantData.email')}
        style={styles.input}
        value={email}
        onChange={handleEmailChange}
        onKeyDown={handleEnterKeyDown}
      />
      <input 
        placeholder={t('MerchantData.password')}
        type='password'
        style={styles.input}
        value={password}
        onChange={handlePasswordChange}
        onKeyDown={handleEnterKeyDown}
      />
      <div style={styles.forgotPasswordContainer}>
        <button onClick={handleResetPassword} style={styles.forgotPasswordLink}>{t('Login.forgotPasswordText')}</button>
      </div>
       
      <button onClick={handleLogin} style={buttonStyle}  
      onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false) }>{t('Button.login')}
        </button>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

      <button onClick={handleRegister} style={styles.registerButton}>{t('Login.createAccountText')}</button>

    </div>
    </div>
  );
};

const styles = {
  textStyle:{
    marginTop: '80px',
    textAlign: 'justify',
    color: 'black',
    maxWidth: '320px',
    marginLeft: '0',
    marginRight: '0',
    fontSize: '1.2rem',
    lineHeight: '0.6',
    fontWeight: '300', // Set font-weight to lighter (normal is usually 400)
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: 'white',
    //background: 'linear-gradient(315deg, #354896 0%, #000000 100%)',
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
    maxWidth: '320px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:'80px',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px',
  },
  logo: {
    width: '250px',
    height: '250px',
  },
  input: {
    padding: '15px',
    marginBottom: '15px',
    width: '290px',
    maxWidth: '295px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#f0f0f0', // A lighter shade of grey
    color: 'black',
    fontSize: '16px',
  },
  button: {
    color: '#fff',
    border: 'none',
    padding: '15px',
    width: '320px', // Takes the full width of its container
    maxWidth: '320px', // Maximum width same as input fields
    marginTop: '20px',
    marginBottom: '8px',
    fontSize: '1rem',
    borderRadius: '10px', // Reduced for more rectangular look
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontWeight: 'bold',
    width: '320px', // Takes the full width of its container
  },
  registerButton: {
    backgroundColor: '#fff', // Inverted background color
    color: 'grey', // Inverted text color to match the original background
    padding: '15px',
    width: '100%',
    maxWidth: '320px',
    marginTop: '0px',
    marginBottom: '8px',
    fontSize: '1rem',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontWeight: 'bold',
    border: 'none', // Remove border
    textAlign: 'center', // Align text to the left
  },
  registerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '30px',
  },
  registerText: {
    fontSize: '16px',
  },
  forgotPasswordContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align items to the left
    marginTop: '-5px',
    width: '295px', // Match width of container
    maxWidth: '295px', // Match maxWidth of input fields
    alignSelf: 'center', // Align the container itself to the center
    marginLeft:'-20px',
  },

  forgotPasswordLink: {
    fontSize: '12px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none', 
    outline: 'none', 
    border: 'none',
    transition: 'color 0.3s',
    color: 'lightlack',
    textAlign: 'left', // Align text to the left
    padding: 0, // Remove padding if any
    width: '100%', // Use full width of the container
  },
};

export default Login;