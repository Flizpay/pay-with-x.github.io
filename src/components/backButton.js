import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = () => {
    const navigate = useNavigate();
    const isMobile = window.innerWidth <= 768;

    const goBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    if (!isMobile) {
        return (
            <button onClick={goBack} style={styles.backButton}>
                <FontAwesomeIcon icon={faArrowLeft} style={styles.backArrow} />
            </button>
        );
    }
    
    return null; // or just return; for nothing
};

const styles = {
    backButton: {
        backgroundColor: 'white', // Background color
        color: 'black',
        border: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0', // Adjust padding as needed
        marginBottom:'20px'
        // Removed fixed width, height, and border-radius
    },
    backArrow: {
        fontSize: '20px', // Size of the arrow icon
    },
};
export default BackButton;