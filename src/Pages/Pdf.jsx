import { useParams } from 'react-router-dom';

const PdfViewer = () => {
  const { item } = useParams();

  console.log(item);
  return (
    <div style={{ width: '100%', height: '100vh', padding: '40px 60px 60px 60px', marginTop:'150px' }}>
      <embed src={`../../public/${item}`} type="application/pdf" width="100%" height="100%" />
    </div>
  );
};

export default PdfViewer;
