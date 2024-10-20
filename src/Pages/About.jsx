// About.js
import './About.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import WhoAmI from '../Components/About/WhoAmI';
import Education from '../Components/About/Education';
import Skills from '../Components/About/Skills';
import LatestWork from '../Pages/LatestWork';

export default function About() {

  return (
    <div className="About" style={{ minHeight: '100vh', overflow: 'hidden'}}>
      <WhoAmI />
      <Skills />
      <LatestWork/>
      <Education />
    </div>
  );
}
