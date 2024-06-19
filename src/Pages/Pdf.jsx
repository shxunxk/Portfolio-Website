// PdfViewer.js
import React from 'react';

const PdfViewer = ({ file , getPage}) => {
  getPage('Resume')
  return (
    <div style={{ width: '100%', height: '100vh', padding:'40px 60px 60px 60px'}}>
      <embed src={file} type="application/pdf" width="100%" height="100%" />
    </div>
  );
};

export default PdfViewer;
