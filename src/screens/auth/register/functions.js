import { register, requestEmailCode } from "../../../api/apiClient";

export const handleRegister = async (
  userData,
  setErrorMessage,
  setIsAccountCreated,
  t,
  navigate
) => {
  const {
    firstName,
    lastName,
    companyName,
    email,
    iban,
    password,
    confirmPassword,
  } = userData;

  if (!companyName || !firstName || !lastName || !email || !iban || !password) {
    setErrorMessage(t("error.general.allFields"));
    return;
  }

  if (password === confirmPassword) {
    try {
      const lowercasedEmail = email.toLowerCase();
      const uppercasedIban = iban.toUpperCase().replace(/\s+/g, "");
      await register(
        firstName,
        lastName,
        companyName,
        lowercasedEmail,
        uppercasedIban,
        password
      );
      await requestEmailCode(lowercasedEmail);
      setIsAccountCreated(true);
    } catch (error) {
      // Check if the error is a badRequest error
      if (error.message === "Email already in use") {
        setErrorMessage(t("error.register.emailInUse"));
      } else if (error.message.includes("Invalid IBAN")) {
        setErrorMessage(t("error.register.invalidIban"));
      } else if (error.message.includes("Invalid Resource: password")) {
        setErrorMessage(t("error.general.invalidPassword"));
      } else if (error.message==='Invalid Resource: email') {
        setErrorMessage(t("error.register.invalidEmail"));
      } else {
        setErrorMessage(t("error.general.serverError"));
      }
    }
  } else {
    setErrorMessage(t("error.register.notMatchingPassword"));
  }
};

export const handleFieldChange = (setter, setErrorMessage = () => {}) => (e) => {
    setter(e.target.value);
    setErrorMessage(""); // Reset the error message
  };