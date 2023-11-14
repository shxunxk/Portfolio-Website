import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './app.scss'
import About from './Pages/About.jsx';
import Home from './Pages/Home.jsx';
import LatestWork from './Pages/LatestWork.jsx';

const App = () => {
  return(
    <Router basename='/Portfolio-Website'>
      <Routes>
        <Route path='/'>
          <Route index element = {<Home/>}/>
          <Route path='about/' element = {<About/>}/>
          <Route path='latest-work/' element={<LatestWork/>}/>
        </Route>
      </Routes>
  </Router>
  )
};

export default App;
