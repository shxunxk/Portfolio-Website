import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.scss';
import About from './Pages/About.jsx';
import Home from './Pages/Home.jsx';
import LatestWork from './Pages/LatestWork.jsx';
import Skills from './Pages/Skills.jsx';
import './app.scss'
import Navbar from './Components/Navbar/Navbar.jsx';
import Bottom from './Components/Bottom/Bottom.jsx';
import WorkDetail from './Pages/WorkDetail.jsx';
import PdfViewer from './Pages/Pdf.jsx';
import { useState } from 'react';

const App = () => {

  const [header, setHeader] = useState('Hi There!!')
  const getPage = (val) =>{
    setHeader(val)
  }
  return (
    <Router>
      <div>
      <div style={{zIndex:100, position:'fixed', width:'100%', boxShadow: "0px 2px 4px rgba(0,1,0,0.8)", height: '60px'}}>
        <Navbar header={header}/>
      </div>
      <div className='page' style={{}}>
        <div className="app-container" style={{width: '100%', paddingTop: '150px', display:'flex', flexDirection:'column', justifyContent: 'center'}}>
            <Routes>
              <Route path="/">
                <Route index element={<Home getPage={getPage}/>} />
                <Route path="latest-work/" element={<LatestWork getPage={getPage}/>} />
                <Route path="resume/" element={<PdfViewer file={'RESUME.pdf'} getPage={getPage}/>} />
                <Route path="workinfo/:item" element={<WorkDetail getPage={getPage}/>} />
                <Route path="about/" element={<About getPage={getPage}/>}/>
                <Route path="skills/" element={<Skills getPage={getPage}/>}/>
                </Route>
            </Routes>
            <div style={{display:"flex", flexDirection:'column', gap:'20px', justifyContent:'center', padding: '20px'}}>
            <div style={{backgroundColor:'black', width:'100%', display:"flex", justifyContent:'center', borderRadius:'20px', padding:'20px'}}>
            <Bottom />
            </div>
            <p style={{textAlign:'center'}}>Built using REACT JS with VITE and FRAMER MOTION</p>
            </div>
          </div>
        </div>
        
      </div>
    </Router>
  );
};

export default App;
