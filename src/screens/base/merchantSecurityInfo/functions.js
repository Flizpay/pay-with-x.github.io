import { getBusiness } from "../../../api/apiClient";

// Function to fetch user data
  export const fetchUserData = async (setUserData) => {
    try {
      const response = await getBusiness();
      setUserData({
        iban: response.data.iban,
        pluginToken: response.data.pluginToken,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle error appropriately
    }
  };

    // Function to format the IBAN
 export   const formatIban = (iban, showFullIban) => {
        if (!iban) {
          return ""; // or any placeholder you prefer
        }
    
        if (showFullIban) {
          return iban; // Show full IBAN
        }
        // Show only the first 4 and last 4 digits
        // Assuming IBAN is valid and has more than 8 characters
        const firstFour = iban.substring(0, 4);
        const lastFour = iban.substring(iban.length - 4);
        const dots = "*".repeat(iban.length - 8); // Replace middle characters with dots
    
        return `${firstFour}${dots}${lastFour}`;
      };