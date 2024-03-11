import { getBusiness } from "../../../api/apiClient";
import { requestEmailCode, checkPassword } from "../../../api/apiClient";

// Function to fetch user data
export const fetchUserData = async (setUserData) => {
  try {
    const response = await getBusiness();
    console.log(response);
    setUserData({
      email: response.data.email,
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    // Handle error appropriately
  }
};

export const handleEmailCheck = async ({
    userData,
    email,
    password,
    setIsFieldChanged,
    setErrorMessage,
    t
  }) => {
    try {
      await checkPassword(userData.email, password);
      const lowercasedEmail = email.toLowerCase();
  
      if (lowercasedEmail !== userData.email.toLowerCase()) {
        await requestEmailCode(lowercasedEmail);
        setIsFieldChanged(true); // Assuming you have this state to track changes
      } else {
        setIsFieldChanged(false); // No change in email
      }
      setErrorMessage(""); // Clear any previous error message
    } catch (error) {
      if (error.message.includes("Invalid Resource: password")) {
        setErrorMessage(t("error.general.invalidPassword"));
      } else if (error.status === 403) {
        setErrorMessage(t("error.register.emailNotVerified"));
      } else if (error.message === "Incorrect password") {
        setErrorMessage(t("error.general.incorrectPassword"));
      } else {
        setErrorMessage(t("error.general.serverError"));
      }
    }
  };
