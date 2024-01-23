import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Modal = ({ show, onClose }) => {
  const { t } = useTranslation();
  const [role, setRole] = useState("merchant");
  const [companyName, setCompanyName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const isMobile = window.innerWidth <= 768;

  const styles = isMobile ?  mobileModalStyles : modalStyles;

  const googleAppsScriptEndpoint =
    "https://script.google.com/macros/s/AKfycbwhVhquK4CsITJwCwTOqaBIwlfxFlyszKLGQzBZBxOfSH7t-yoOgbRS-_AkL3iqgKQq/exec";

  const handleSubmit = () => {
    setSubmissionStatus("Submitting your information...");
    const data =
      role === "merchant"
        ? { role, companyName, firstName, lastName, email, phone }
        : { role, firstName, lastName, email };
    console.log(`Sending data to ${googleAppsScriptEndpoint}:`, data);

    fetch(googleAppsScriptEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      mode: "no-cors",
    })
      .then((response) => {
        if (response.type === "opaque") {
          console.log("Sent data, but no readable response due to no-cors");
          setSubmissionStatus(t("Modal.successMessage"));
        } else {
          console.log("Response:", response);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const closeAndResetModal = () => {
    setRole("merchant");
    setCompanyName("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setSubmissionStatus("");
    onClose();
  };

  return (
    <div style={show ? styles.modalOpen : styles.modalClose}>
      <div style={styles.modalContent}>
      <div style={mobileModalStyles.modalHeader}>
          <h2 style={mobileModalStyles.modalTitle}>{t("Modal.title")}</h2>
          <button
            onClick={closeAndResetModal}
            style={mobileModalStyles.closeButton}
          >
            <MdClose />
          </button>
        </div>
        <div style={styles.roleContainer}>
          <div
            onClick={() => setRole("merchant")}
            style={
              role === "merchant"
                ? styles.activeRole
                : styles.inactiveRole
            }
          >
            {t("Modal.merchantButton")}
          </div>
          <div
            onClick={() => setRole("customer")}
            style={
              role === "customer"
                ? styles.activeRole
                : styles.inactiveRole
            }
          >
            {t("Modal.payerButton")}
          </div>
        </div>
        <form>
          {role === "merchant" && (
            <>
              <input
                type="text"
                value={companyName}
                placeholder={t("Modal.inputCompanyName")}
                style={styles.inputField}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </>
          )}
          <input
            type="text"
            value={firstName}
            placeholder={t("Modal.inputFirstName")}
            style={styles.inputField}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            value={lastName}
            placeholder={t("Modal.inputLastName")}
            style={styles.inputField}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder={t("Modal.inputEmail")}
            style={styles.inputField}
            onChange={(e) => setEmail(e.target.value)}
          />
          {role === "merchant" && (
            <input
              type="tel"
              value={phone}
              placeholder={t("Modal.inputPhone")}
              style={styles.inputField}
              onChange={(e) => setPhone(e.target.value)}
            />
          )}
        </form>
        <button style={styles.heroButton} onClick={handleSubmit}>
          {t("Modal.actionButtonText")}
        </button>
        {submissionStatus && (
          <div style={styles.successMessage}>{submissionStatus}</div>
        )}
      </div>
    </div>
  );
};

const modalStyles = {
  modalContent: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "29.5%",
    minHeight: "78%",
    backgroundColor: "black",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
  },
  modalTitle: {
    marginLeft: "39px",
    marginTop: "34px",
    marginBottom: "29px",
    alignSelf: "flex-start",
    fontSize: "1.58rem",
  },
  modalOpen: {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.95)",
    zIndex: 1000,
  },
  modalClose: {
    display: "none",
  },
  closeButton: {
    position: "absolute",
    top: "34px",
    right: "10px",
    cursor: "pointer",
    background: "none",
    border: "none",
    color: "white",
    fontSize: "31px",
  },
  inputField: {
    boxSizing: "border-box",
    display: "block",
    width: "calc(100% - 68px)",
    padding: "14.5px",
    marginBottom: "24px",
    margin: "14.5px 39px",
    fontSize: "17.5px",
    backgroundColor: "#000",
    color: "#fff",
    border: "2px solid #00D1B2",
    borderRadius: "25px",
  },
  heroButton: {
    backgroundColor: "#00D1B2",
    color: "#fff",
    border: "none",
    padding: "14.5px 29px",
    fontSize: "0.98rem",
    borderRadius: "24.5px",
    margin: "29px 29px 24px 39px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  roleContainer: {
    alignSelf: "flex-start",
    display: "flex",
    justifyContent: "center",
    margin: "14.5px 0px 29px 39px",
  },
  activeRole: {
    padding: "14.5px 29px",
    margin: "0 9.5px",
    borderRadius: "24.5px",
    backgroundColor: "#00D1B2",
    cursor: "pointer",
    color: "#fff",
  },
  inactiveRole: {
    padding: "14.5px 29px",
    margin: "0 9.5px",
    borderRadius: "24.5px",
    backgroundColor: "#111111",
    cursor: "pointer",
    color: "#fff",
  },
  successMessage: {
    color: "#00D1B2",
    textAlign: "center",
    marginTop: "5.5px",
    fontSize: "0.98rem",
    marginBottom: "10px", // Added more bottom margin
  },
};


const mobileModalStyles = {
    modalOpen: {
      position: "fixed",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0, 0, 0, 0.95)",
      zIndex: 1000,
    },
    modalClose: {
      display: "none",
    },
    modalContent: {
      width: "90%",
      minHeight: "80%",
      backgroundColor: "black",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
      flexDirection: "column",
      display: "flex",
      padding: "10px",
    },
    modalHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center", // This ensures vertical alignment
      margin: "3% 15px",
    },
    modalTitle: {
      fontSize: "1.2rem",
      margin: "0", // Ensuring no additional margin for the title
      lineHeight: "1", // Adjust line height to control vertical spacing
    },
    closeButton: {
      background: "none",
      border: "none",
      color: "white",
      fontSize: "28px",
      margin: "0", // Ensuring no additional margin for the button
      lineHeight: "1", // Adjust line height to control vertical spacing
      display: "flex", // Using flex to align icon vertically
      alignItems: "center", // Aligns the close icon vertically within the button
    },
    roleContainer: {
      display: "flex",
      margin: "10px 20px 20px 10px",
      flexWrap: "wrap",
    },
    activeRole: {
      padding: "12px 24px", // Increased padding
      margin: "5px 10px 10px 0",
      borderRadius: "25px",
      backgroundColor: "#00D1B2",
      width: "auto", // Adjust width as needed or use 'auto' for natural width
      cursor: "pointer",
      justifyContent: "center",
      textAlign: "center",
      color: "#fff",
      fontSize: "1rem", // Increased font size
    },
    inactiveRole: {
      padding: "12px 24px", // Increased padding
      justifyContent: "center",
      textAlign: "center",
      margin: "5px 10px 10px 0",
      width: "auto", // Adjust width as needed or use 'auto' for natural width
      borderRadius: "25px",
      backgroundColor: "#111111",
      cursor: "pointer",
      color: "#fff",
      fontSize: "1rem", // Increased font size
    },
    inputField: {
      width: "calc(100% - 65px)", // Further reduced width
      padding: "12px", // Further reduced padding
      margin: "12px 15px", // Further reduced margin
      fontSize: "14px", // Further reduced font size
      backgroundColor: "#000",
      color: "#fff",
      border: "2px solid #00D1B2",
      borderRadius: "20px", // Adjusted border radius
    },
    heroButton: {
      backgroundColor: "#00D1B2",
      color: "#fff",
      border: "none",
      padding: "12px 25px", // Further reduced padding
      fontSize: "0.9rem", // Further reduced font size
      borderRadius: 20, // Adjusted border radius
      margin: "25px 15px", // Further reduced margin
      cursor: "pointer",
    },
    successMessageContainer: {
      minHeight: "40px", // Further reduced minimum height
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    successMessage: {
      margin: "15px", // Further reduced margin
      color: "#00D1B2",
      fontSize: "14px", // Further reduced font size
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

export default Modal;
