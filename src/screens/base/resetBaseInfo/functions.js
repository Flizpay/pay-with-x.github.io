import { getBusiness, resetBaseInfo } from "../../../api/apiClient";

// Function to fetch user data
  export const fetchUserData = async (setUserData) => {
    try {
      const response = await getBusiness();
      setUserData({
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        companyName: response.data.companyName,
        email: response.data.email,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle error appropriately
    }
  };

  export const handleSubmit = async (email, firstName, lastName, companyName, setErrorMessage, setIsNameChanged, t) => {
    
    try {
      if (!companyName || !firstName || !lastName) {
        setErrorMessage(t("error.general.allFields"));
        return;
      }
  
      await resetBaseInfo(email, firstName, lastName, companyName);
      setIsNameChanged(true);
    } catch (error) {
      setErrorMessage(t("error.general.serverError"));
    }
  };