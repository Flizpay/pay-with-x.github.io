
import { getBusiness, requestEmailCode, resetIban } from "../../../api/apiClient";

// Function to fetch user data
export  const fetchUserData = async (setUserData) => {
    try {
      const response = await getBusiness();
      console.log(response);
      setUserData({
        iban: response.data.iban,
        email: response.data.email,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle error appropriately
    }
  };

  export function validateIban(iban) {
    const ibanRegex = /^DE\d{2}\s?\d{8}\s?\d{10}$/;
  
    if (iban.length !== 22) {
      return {
        isValid: false,
        message: "Invalid IBAN: Length should be 22 characters long",
      };
    }
    if (!ibanRegex.test(iban)) {
      return { isValid: false, message: "Invalid IBAN: Incorrect format" };
    }
  
    return { isValid: true };
  }
  
  export const handleSubmit = async ({
    iban,
    userData,
    setErrorMessage,
    setIsFieldChanged,
    t
  }) => {
    try {
      if (!iban) {
        setErrorMessage(t("error.general.allFields"));
        return;
      }
      const uppercasedIban = iban.toUpperCase().replace(/\s+/g, "");
      if (uppercasedIban !== userData.iban.replace(/\s+/g, "").toUpperCase()) {
        const validation = validateIban(uppercasedIban);

        if (!validation.isValid) {
          setErrorMessage(t("error.register.invalidIban"));
          return;
        }

        await requestEmailCode(userData.email);
        setIsFieldChanged(true);
      }
    } catch (error) {
        setErrorMessage(t("error.general.serverError"));
    }
  };
  
  export const handleContinue = async ({
    userData,
    iban,
    setErrorMessage,
    navigate
  }) => {
    try {
      await resetIban(userData.email, iban.toUpperCase());
      navigate("/merchantSecurityInfo");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  