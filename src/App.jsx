import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './app.scss';
import About from './Pages/About.jsx';
import Home from './Pages/Home.jsx';
import LatestWork from './Pages/LatestWork.jsx';
import './app.scss';
import Navbar from './Components/Navbar/Navbar.jsx';
import Bottom from './Components/Bottom/Bottom.jsx';
import WorkDetail from './Pages/WorkDetail.jsx';
import PdfViewer from './Pages/Pdf.jsx';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Resume from './Pages/Resume.jsx'

const App = () => {

  const [header, setHeader] = useState('Hi There!!');
  // const getPage = (val) => {
  //   setHeader(val);
  // };

  const sliderVariants = {
    initial: {
      x: '100%',
    },
    animate: {
      x: '-100%',
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 40,
      },
    },
  };

  return (
    <div className='main' style={{position: 'relative'}}>
      <div style={{ zIndex: 100, width: '100%', height: '80px', top: 0, left: 0, borderBottomRightRadius:'20px', borderBottomLeftRadius:'20px', position:'fixed'}}>
        <Navbar header={header} />
      </div>
      <div className='page'>
        <div className='app-container' style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Routes>
            <Route path='/'>
              <Route index element={<Home/>} />
              {/* <Route path='latest-work/' element={<LatestWork/>} /> */}
              <Route path='resume/' element={<Resume/>} />
              <Route path='pdf/:item' element={<PdfViewer/>} />
              <Route path='workinfo/:item' element={<WorkDetail/>} />
              {/* <Route path='about/' element={<About/>} /> */}
              {/* <Route path='skills/' element={<Skills/>} /> */}
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', justifyContent: 'center', backgroundImage: `url('')`, alignItems: 'center', padding: '0px', width: '100%' }}>
            <Bottom />
            <div style={{ textAlign: 'center', backgroundColor: 'beige', borderRadius: '0px', width: '100%', overflow:'hidden'}}>
              <motion.p variants={sliderVariants} initial='initial' animate='animate' transition={{ duration: 1 }}>
                Built using <strong>REACT JS</strong> with <strong>VITE</strong> and <strong>FRAMER MOTION</strong>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NotFound = () => {
  useEffect(() => {
    console.log('Page does not exist');
  }, []);
  // getPage('ERROR')
  return <div style={{width:'100%', height:'60vh', textAlign:'center'}}> <p>Path does not exist</p></div>;
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
