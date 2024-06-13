// PdfViewer.js
import React from 'react';

const PdfViewer = ({ file }) => {
  return (
    <div style={{ width: '100%', height: '100vh', padding:'20px'}}>
      <embed src={file} type="application/pdf" width="100%" height="100%" />
    </div>
  );
};

export default PdfViewer;
