export const styles = {
    editIcon: {
      position: 'absolute',
      bottom: '3px',
      right: '3px',
      backgroundColor: 'white', // Set background color to white
      borderRadius: '50%', // Creates a circular shape
      padding: '6px', // Adjust padding to fit the icon size and ensure the circle size is as desired
      display: 'flex',
      alignItems: 'center', // Center the icon vertically within the circle
      justifyContent: 'center', // Center the icon horizontally within the circle
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Adds a subtle shadow for a soft visual effect
      },
    imageContainer:{
      height: '140px', // Match the height of the image
      width: '140px', // Match the width of the image
      position: 'relative',
      display: 'inline-block', // Keeps the container's size bound to the image/icon size
    },
    userImage: {
      height: '100%', // Fills the container
      width: '100%', // Fills the container
      borderRadius: '50%',
      display: 'block',
    },
    rightContainer: {
      display: "flex",
      alignItems: "center",
      // Add any additional styling as needed
    },
    arrowIcon: {
      cursor: "pointer",
      marginLeft: "10px", // Space between the icon and the preceding text
      color: "#333",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      height: "100%",
      backgroundColor: "white",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
      alignItems: "center",
      justifyContent: "center",
    },
    mainContent: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      justifyContent: "flex-start",
      padding: "0px",
      minHeight: "100vh",
      width: "80%",
      marginLeft: "20px",
    },
    title: {
      color: "white",
      fontSize: "2.2rem",
      fontWeight: "bold",
    },
    settingSection: {
      marginTop: "20px",
      width: "95%",
      maxWidth: "700px",
      marginBottom: "0px",
    },
  
    settingItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "40px",
      borderBottom: "1px solid #ccc", // Add a grey underline
      marginTop: "25px",
    },
    settingLabel: {
      fontSize: "1rem",
      color: "rgba(0, 0, 0, 0.7)", // Adjust the opacity to make it lighter
      fontWeight: "bold",
    },
    input: {
      borderRadius: "5px",
      padding: "10px",
      fontSize: "1rem",
      color: "black",
      backgroundColor: "transparent",
      textAlign: "right", // This aligns the text to the right
    },
    icon: {
      cursor: "pointer",
      color: "black",
    },
  };