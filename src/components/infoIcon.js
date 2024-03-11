import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

function InfoIcon({
  text,
  stylesWidth = "500px",
  stylesTransform = "translateX(-15%)",
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={styles.wrapper}
      onClick={(e) => e.stopPropagation()} // Attach the handleClick function here
    >
      <FaInfoCircle
        style={{ marginLeft: "10px", color: "lightgrey" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {isHovered && (
        <div
          style={{
            ...styles.hoverTextContainer,
            opacity: 1, // Show tooltip on hover
            width: stylesWidth,
            transform: stylesTransform,
          }}
        >
          <span style={styles.hoverText}>{text}</span>
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative", // Essential for containing the absolutely positioned tooltip
    display: "inline-flex", // Align items in a row; adjust as needed
    alignItems: "center", // Center align items vertically
    cursor: "pointer", // Optional: if you want the wrapper to indicate interactivity
  },
  hoverTextContainer: {
    position: "absolute",
    top: "120%", // Position the tooltip below the icon
    left: "50%", // Center the tooltip horizontally relative to the icon
    opacity: 0, // Start hidden and show on hover
    transition: "opacity 0.3s ease", // Smooth transition for the tooltip appearance
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "6px",
    padding: "8px",
    marginBottom: "10px", // Space between the icon and tooltip
  },
  hoverText: {
    marginLeft: "0px", // Space between icon and text
    backgroundColor: "#333", // Dark grey background
    color: "#fff", // White text
    fontSize: "12px", // Font size
    borderRadius: "8px", // Rounded corners
    marginTop: "20px",
  },
};

export default InfoIcon;
