import React, { useState, useRef, useEffect } from "react";
import { verifyEmailCode } from "../api/apiClient";
import { StyledTitle } from "../components/text/styledTitle"; // Adjust the path as needed
import { StyledTitle2 } from "../components/text/styledTitle2"; // Adjust the path as needed
import { useTranslation } from "react-i18next";
import BackButton from "./backButton"; // Adjust the path as needed

const CodeVerificationInput = ({
  errorMessage,
  email,
  handleCodeVerified,
  handleErrorMessage,
  setEmailCode
}) => {
  const numberOfDigits = 6; // Assuming a fixed number of digits
  const [code, setCode] = useState(Array(numberOfDigits).fill(""));
  const inputRefs = useRef(
    [...Array(numberOfDigits)].map(() => React.createRef())
  );
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  const handleTextChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (index < numberOfDigits - 1 && value) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = (e.clipboardData || window.clipboardData)
      .getData("text/plain")
      .slice(0, numberOfDigits)
      .split("");
    setCode(
      pastedData.map((char, index) => {
        // Optionally, focus next input if needed
        if (index < numberOfDigits - 1) inputRefs.current[index + 1].focus();
        return char;
      })
    );
  };

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, numberOfDigits);
  }, [numberOfDigits]);

  const handleCancel = () => {
    // Identify the currently focused input index
    const currentFocusIndex = inputRefs.current.findIndex(
      (input) => input === document.activeElement
    );

    if (currentFocusIndex > 0) {
      // Clear the value of the current input and move focus back if not the first input
      const newCode = [...code];
      newCode[currentFocusIndex] = ""; // Clear the current value
      newCode[currentFocusIndex - 1] = ""; // Optionally clear the previous value as well
      setCode(newCode);

      // Move focus back one input
      inputRefs.current[currentFocusIndex - 1].focus();
    } else if (currentFocusIndex === 0) {
      // Just clear the value if it's the first input
      const newCode = [...code];
      newCode[currentFocusIndex] = "";
      setCode(newCode);
    }
    // If currentFocusIndex is -1, none of the inputs is focused, so no action is taken.
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Backspace") {
        handleErrorMessage("");
        handleCancel();
      }
    };

    // Attach the event listener to the document
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleCancel]); // Ensure handleCancel is included if it's defined outside useEffect

  const buttonStyle = {
    ...styles.button,
    backgroundColor: isHovered ? "rgba(0, 0, 0, 0.8)" : "black",
  };

  const handleCodeVerification = async () => {
    const resetCode = code.join("");
    try {
      const lowercasedEmail = email.toLowerCase();
      await verifyEmailCode(lowercasedEmail, resetCode);
      handleCodeVerified(true); // Set the code as verified
      handleErrorMessage("");
      if (setEmailCode) setEmailCode(resetCode);
    } catch (error) {
      if (error.message.includes("not found")) {
        handleErrorMessage(t("error.general.userNotFound"));
      } else if (error.message === "Invalid code") {
        handleErrorMessage(t("error.general.invalidCode"));
      } else if (error.message === "Expired reset code") {
        handleErrorMessage(t("error.general.expiredCode"));
      } else {
        handleErrorMessage(t("error.general.serverError"));
      }
    }
  };

  useEffect(() => {
    // Check if all fields are filled, then trigger handleCodeVerification
    if (
      code.every((digit) => digit !== "" && digit.length === 1) &&
      code.length === 6
    ) {
      handleCodeVerification();
    }
  }, [code]); // Dependency array includes 'code' to run the effect when 'code' changes

  return (
    <>
      <BackButton />

      <StyledTitle text={t("VerifyCode.title")} />

      <StyledTitle2 text={t("VerifyCode.text")} />

      <div style={styles.inputRow}>
        {code.map((digit, index) => (
          <input
            key={index}
            style={styles.inputBox}
            onChange={(e) => {
              handleErrorMessage("");
              if (e.target.value === "" || /^[0-9]$/.test(e.target.value)) {
                handleTextChange(e.target.value, index);
              }
            }}
            onPaste={index === 0 ? handlePaste : null}
            value={digit}
            maxLength={1}
            type="text"
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
      </div>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      <button onClick={handleCodeVerification} style={buttonStyle}>
        {t("Button.continue")}
      </button>
    </>
  );
};

const styles = {
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
  inputRow: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 20,
    width: "100%",
  },
  inputBox: {
    padding: "15px",
    height: "45px", // Set height explicitly
    boxSizing: "border-box",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#f0f0f0",
    color: "black",
    fontSize: "16px",
    marginBottom: "15px",
    width: "45px", // Adjust width for spacing
    marginRight: "10px",
  },
};

export default CodeVerificationInput;
