import React, { useRef } from 'react';
import BlueButton from '../components/blueButton'; // Adjust the import path as needed

const DownloadButton = ({ children, filename = "download.png" }) => {
  const contentRef = useRef();

  const downloadContentAsImage = () => {
    if (!contentRef.current) return;

    const canvas = contentRef.current.querySelector('canvas');
    if (!canvas) return;

    const imageUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = imageUrl;
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div style={styles.container} ref={contentRef}>
      {children}
      <BlueButton text="Download" onClick={downloadContentAsImage} />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
};

export default DownloadButton;
