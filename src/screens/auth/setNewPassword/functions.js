import { getBusiness, assignNewPassword, checkPassword } from "../../../api/apiClient";

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

  export const handleSubmit = async ({
    userData,
    oldPassword,
    password,
    confirmPassword,
    t,
    setErrorMessage,
    setIsPasswordChanged
  }) => {
    if (password === confirmPassword) {
      try {
        await assignNewPassword(password, oldPassword);
        setIsPasswordChanged(true); // Indicate successful password update
        setErrorMessage(""); // Optionally clear any previous error messages
      } catch (error) {
        if (error.message.includes("not found")) {
          setErrorMessage(t("error.general.userNotFound"));
        } else if (error.message==="Invalid Resource: password") {
          setErrorMessage(t("error.general.invalidPassword"));
        } else if (error.status === 403) {
          setErrorMessage(t("error.register.emailNotVerified"));
        } else if (error.message === "Incorrect password") {
          setErrorMessage(t("error.general.incorrectPassword"));
        } else {
          setErrorMessage(t("error.general.serverError"));
        }
      }
    } else {
      setErrorMessage(t("error.register.notMatchingPassword"));
    }
  };
  