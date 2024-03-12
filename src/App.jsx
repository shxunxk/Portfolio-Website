import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.scss';
import About from './Pages/About.jsx';
import Home from './Pages/Home.jsx';
import LatestWork from './Pages/LatestWork.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import WorkActivity from './Pages/WorkActivity.jsx';

const App = () => {
  return (
    <Router>
      <div className='sidebar'>
        <Sidebar /> 
        </div>
        <div className="app-container">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="about/" element={<About />} />
              <Route path="latest-work/" element={<LatestWork />} />
              {/* <Route path="work-activities/" element={<WorkActivity />} /> */}
            </Route>
          </Routes>
        </div>
    </Router>
  );
};

export default App;
