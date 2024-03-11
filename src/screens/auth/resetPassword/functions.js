import { requestEmailCode, assignNewPassword } from "../../../api/apiClient";

export const handleEmailCheck = async (email, setIsEmailChecked, setErrorMessage, t) => {
  try {
    const lowercasedEmail = email.toLowerCase();
    await requestEmailCode(lowercasedEmail);
    setIsEmailChecked(true);
    setErrorMessage("");
  } catch (error) {
    if (error.message.includes("not found")) {
      setErrorMessage(t("error.general.userNotFound"));
    } else {
      setErrorMessage(t("error.general.serverError"));
    }
  }
};

export const handleSubmit = async (password, confirmPassword, emailCode, setIsPasswordChanged, setErrorMessage, t) => {
    if (password === confirmPassword) {
        try {
  
          await assignNewPassword(password, '', emailCode);
  
          setIsPasswordChanged(true); // Set the code as verified
        } catch (error) {
          // Display error message using a method suitable for web
          console.error("Invalid Code", "The code you entered is wrong.");
          if (error.message.includes("not found")) {
            setErrorMessage(t("error.general.userNotFound"));
          } else if (error.message.includes("Invalid Resource: password")) {
            setErrorMessage(t("error.general.invalidPassword"));
          } else {
            setErrorMessage(t("error.general.serverError"));
          }
        }
      } else {
        setErrorMessage(t("error.register.notMatchingPassword"));
      }
    };
  

  // Adjusting handleFieldChange to accept setErrorMessage and to directly handle event objects
export const handleFieldChange = (setter, setErrorMessage) => (event) => {
    setter(event.target.value);
    setErrorMessage(""); // Optionally reset the error message on change
  };
