import { login } from "../../../api/apiClient";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const handleLogin = async (email, password, setErrorMessage, navigate, setEmail, t) => {
  
    try {
      const lowercasedEmail = email.toLowerCase();
      const response = await login(lowercasedEmail, password);
      const jwtToken = response.data.token;
      await AsyncStorage.setItem("@jwtToken", jwtToken);
      setEmail(lowercasedEmail);
      navigate("/merchantBaseInfo");
    } catch (error) {
        if (error.message.includes("email")) {
            setErrorMessage(t("error.general.invalidEmail"));
          } else if (error.message.includes("Invalid Resource: password")) {
            setErrorMessage(t("error.general.invalidPassword"));
          } else if (error.message.includes("not found")) {
            setErrorMessage(t("error.general.userNotFound"));
          } else if (error.status === 403) {
            setErrorMessage(t("error.general.emailNotVerified"));
          } else if (error.message === "Incorrect password") {
            setErrorMessage(t("error.general.incorrectPassword"));
          } else {
            setErrorMessage(t("error.general.serverError"));
          }
        }
  };
  
  export const handleEmailChange = (setEmail, setErrorMessage) => (e) => {
    setEmail(e.target.value);
    setErrorMessage("");
  };
  
  export const handlePasswordChange = (setPassword, setErrorMessage) => (e) => {
    setPassword(e.target.value);
    setErrorMessage("");
  };
