import './about.scss'
import {motion} from 'framer-motion'
import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';

export default function About() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
      <div className="About" style={{backgroundImage: 'linear-gradient(180deg, #36059f, #111132)', display: 'flex', flexDirection: 'column', minHeight: '100%', overflow: 'hidden'}}>
      <div className='projects'>
        <Navbar title='About'/>
        <div className='main'>
          <section id = 'sec' className='about-content'>
            <motion.h2 style={{fontSize: '5rem'}} initial={{ x: 0 }} animate={{ x: scrollY > 400 ? -1000 : 0 }} transition={{ duration: 0.7 }}>Who Am I?</motion.h2>
                <motion.p style={{fontSize: '3rem', padding: '0px', textAlign: 'center'}} initial={{ x: 0 }} animate={{ x: scrollY > 400 ? -3000 : 0 }} transition={{ duration: 0.7 }}>
                  Hi this is Shaunak, I am a passionate and dedicated individual with a strong background in <strong>Machine Learning</strong>, <strong>Data Science</strong>, and <strong>Web Development</strong>.
                </motion.p>
              </section>

              <section id = 'sec' className='skills'>
                <motion.h2 style={{fontSize: '5rem', display: 'flex', flexDirection: 'column'}} initial={{ x: -800 }} animate={{ x: scrollY > 1200 ? 1000 : 0 }} transition={{ duration: 0.7 }}>Skills</motion.h2>
                  <motion.ul style={{fontSize: '2rem'}} initial={{ x: -1000 }} animate={{ x: scrollY > 1200 ? 2000 : 0 }} transition={{ duration: 0.7 }}>Machine Learning and Data Analysis</motion.ul>
                  <motion.ul style={{fontSize: '2rem'}} initial={{ x: -1000 }} animate={{ x: scrollY > 1200 ? 2000 : 0 }} transition={{ duration: 0.7 }}>Full-Stack Web Development</motion.ul>
                  <motion.ul style={{fontSize: '2rem'}} initial={{ x: -1000 }} animate={{ x: scrollY > 1200 ? 2000 : 0 }} transition={{ duration: 0.7 }}>Data Science and Analytics</motion.ul>
              </section>

              <section id='sec' className='experience'>
                <motion.h2 style={{fontSize: '5rem', display: 'flex', flexDirection: 'column'}} initial={{ x: 0 }} animate={{ x: scrollY > 1600 ? -2000 : 0 }} transition={{ duration: 0.7 }}>Internships</motion.h2>
                <motion.ul style={{fontSize: '2rem'}} initial={{ x: 0 }} animate={{ x: scrollY > 1600 ? -2000 : 0 }} transition={{ duration: 0.7 }}>Data Analyst Intern<br></br>Remote Software Solutions, Goa</motion.ul>
                <motion.p style={{fontSize: '3rem', padding: '5px', textAlign: 'center'}} initial={{ x: 0 }} animate={{ x: scrollY > 1600 ? -2000 : 0 }} transition={{ duration: 0.7 }}>Worked as a Data Analyst at the firm and learnt real time implementation of SQL and Power BI in the field of Database Engineering and Data Analytics</motion.p>
              </section>
        </div>
      </div>
    </div>
  )
}
