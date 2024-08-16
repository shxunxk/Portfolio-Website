import React from 'react';
import Hero from '../Components/Hero/Hero';
import About from './About';
import LatestWork from './LatestWork';
import './Home.scss';

const Home = () => {
  return (
    <div id='Homepage'>
      <Hero/>
      <About/>
      <LatestWork/>
    </div>
  );
};

export default Home;
