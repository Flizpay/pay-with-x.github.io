export const styles = {

    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      justifyContent: "center",
      padding: "20px",
      backgroundColor: "white",
      //background: 'linear-gradient(315deg, #354896 0%, #000000 100%)',
      fontFamily: "Arial, sans-serif",
      color: "#fff",
      maxWidth: "320px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "80px",
    },
  
    input: {
      padding: "15px",
      marginBottom: "15px",
      width: "290px",
      maxWidth: "295px",
      borderRadius: "10px",
      border: "none",
      backgroundColor: "#f0f0f0", // A lighter shade of grey
      color: "black",
      fontSize: "16px",
    },
    button: {
      color: "#fff",
      border: "none",
      padding: "15px",
      width: "320px", // Takes the full width of its container
      maxWidth: "320px", // Maximum width same as input fields
      marginTop: "20px",
      marginBottom: "8px",
      fontSize: "1rem",
      borderRadius: "10px", // Reduced for more rectangular look
      cursor: "pointer",
      transition: "background-color 0.3s",
      fontWeight: "bold",
      width: "320px", // Takes the full width of its container
    },
    registerButton: {
      backgroundColor: "#fff", // Inverted background color
      color: "grey", // Inverted text color to match the original background
      padding: "15px",
      width: "100%",
      maxWidth: "320px",
      marginTop: "0px",
      marginBottom: "8px",
      fontSize: "1rem",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "background-color 0.3s",
      fontWeight: "bold",
      border: "none", // Remove border
      textAlign: "center", // Align text to the left
    },
    forgotPasswordContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start", // Align items to the left
      marginTop: "-5px",
      width: "295px", // Match width of container
      maxWidth: "295px", // Match maxWidth of input fields
      alignSelf: "center", // Align the container itself to the center
      marginLeft: "-20px",
    },
  
    forgotPasswordLink: {
      fontSize: "12px",
      background: "none",
      border: "none",
      cursor: "pointer",
      textDecoration: "none",
      outline: "none",
      border: "none",
      transition: "color 0.3s",
      color: "lightlack",
      textAlign: "left", // Align text to the left
      padding: 0, // Remove padding if any
      width: "100%", // Use full width of the container
    },
  };