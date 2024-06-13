import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.scss';
import About from './Pages/About.jsx';
import Home from './Pages/Home.jsx';
import LatestWork from './Pages/LatestWork.jsx';
import Skillset from './Pages/Skillset.jsx';
import './app.scss'
import Navbar from './Components/Navbar/Navbar.jsx';
import Bottom from './Components/Bottom/Bottom.jsx';
import WorkDetail from './Pages/WorkDetail.jsx';
import PdfViewer from './Pages/Pdf.jsx';

const App = () => {
  return (
    <Router>
      <div>
      <div style={{zIndex:100}}>
        <Navbar/>
      </div>
      <div className='page' style={{justifyContent: 'center'}}>
        <div className="app-container" style={{width: '90%'}}>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="latest-work/" element={<LatestWork />} />
                <Route path="resume/" element={<PdfViewer file={'ShaunakNagvenkarRESUME.pdf'} />} />
                <Route path="workinfo/:item" element={<WorkDetail />} />
                <Route path="about/" element={<About />}>
                <Route path="skillset/" element={<Skillset />} />
                </Route>
              </Route>
            </Routes>
          </div>
        </div>
        <div style={{display:'flex', justifyContent:'center', backgroundColor:"InfoText"}}>
          <Bottom />
        </div>
      </div>
    </Router>
  );
};

export default App;
