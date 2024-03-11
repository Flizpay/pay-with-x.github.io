import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header";
import { keyDownHandler } from "../../../utils/keyHandlers"; // Adjust the path as needed
import { StyledTitle } from "../../../components/text/styledTitle"; // Adjust the path as needed
import { useTranslation } from "react-i18next";
import BackButton from "../../../components/backButton";
import { styles } from "./styles"; // Adjust the import path as needed
import { handleLogin, handleEmailChange, handlePasswordChange } from "./functions";

const Login = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  console.log(t);
  const handleSubmit = () => handleLogin(email, password, setErrorMessage, navigate, setEmail, t);
  const handleEmailChangeWrapped = handleEmailChange(setEmail, setErrorMessage);
  const handlePasswordChangeWrapped = handlePasswordChange(setPassword, setErrorMessage);
  const handleEnterKeyDown = keyDownHandler("Enter", handleSubmit);

  const handleResetPassword = () => {
    navigate("/resetPassword");
  };
  const handleRegister = () => {
    navigate("/register");
  };

  const buttonStyle = {
    ...styles.button,
    backgroundColor: isHovered ? "rgba(0, 0, 0, 0.8)" : "black",
  };

  return (
    <div style={{ backgroundColor: "white", color: "#fff" }}>
      <Header showFullHeader={false} />

      <div style={styles.container}>
        <BackButton />
        <StyledTitle text={t("Login.title")} />
        <input
          placeholder={t("MerchantData.email")}
          style={styles.input}
          value={email}
          onChange={handleEmailChangeWrapped}
          onKeyDown={handleEnterKeyDown}
        />
        <input
          placeholder={t("MerchantData.password")}
          type="password"
          style={styles.input}
          value={password}
          onChange={handlePasswordChangeWrapped}
          onKeyDown={handleEnterKeyDown}
        />
        <div style={styles.forgotPasswordContainer}>
          <button
            onClick={handleResetPassword}
            style={styles.forgotPasswordLink}
          >
            {t("Login.forgotPasswordText")}
          </button>
        </div>

        <button
          onClick={handleLogin}
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {t("Button.login")}
        </button>
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}

        <button onClick={handleRegister} style={styles.registerButton}>
          {t("Login.createAccountText")}
        </button>
      </div>
    </div>
  );
};



export default Login;
