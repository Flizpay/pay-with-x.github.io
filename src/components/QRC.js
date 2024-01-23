import React from 'react';
import QRCode from 'qrcode.react';

const QRC = ({ userId, size = 250 }) => {
  return <QRCode value={userId} size={size} />;
}

export default QRC;