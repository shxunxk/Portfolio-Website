import './About.scss'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Bottom from '../Components/Bottom/Bottom';
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
      <div className="About" style={{display: 'flex', flexDirection: 'column', minHeight: '100%', overflow: 'hidden'}}>
      <div className='projects'>
        <Navbar title='About'/>
        <div className='main'>
          <section id = 'sec' className='about-content'>
            <motion.h2 style={{fontSize: '5rem'}} initial={{ x: 0 }} animate={{ x: scrollY > 400 ? -1000 : 0 }} transition={{ duration: 0.7 }}>Who Am I?</motion.h2>
                <motion.p style={{fontSize: '3rem', padding: '0px', textAlign: 'center'}} initial={{ x: 0 }} animate={{ x: scrollY > 400 ? -3000 : 0 }} transition={{ duration: 0.7 }}>
                  Hi this is Shaunak, I am a passionate and dedicated individual with a strong background in <strong>Machine Learning</strong>, <strong>Data Science</strong>, and <strong>Web Development</strong>.
                </motion.p>
              </section>
              <section id='sec' className='education'>
                <motion.h2 style={{fontSize: '5rem', display: 'flex', flexDirection: 'column'}} initial={{ x: -800 }} animate={{ x: scrollY > 1100 ? 1000 : 0 }} transition={{ duration: 0.7 }}>Education and other details</motion.h2>
                <motion.ul style={{fontSize: '2rem'}} initial={{ x: -1000 }} animate={{ x: scrollY > 1100 ? 2000 : 0 }} transition={{ duration: 0.7 }}>Based in Goa, India</motion.ul>
                <motion.ul style={{fontSize: '2rem'}} initial={{ x: -1000 }} animate={{ x: scrollY > 1100 ? 2000 : 0 }} transition={{ duration: 0.7 }}>Pursuing Bachelors Degree in the field of Computer Science Engineering from Vellore Institute of Technology, Vellore</motion.ul>
              </section>
              <section id = 'sec' className='skills'>
                <motion.h2 style={{fontSize: '5rem', display: 'flex', flexDirection: 'column'}} initial={{ x: 0 }} animate={{ x: scrollY > 2600 ? -2000 : 0 }} transition={{ duration: 0.7 }}>Skills</motion.h2>
                  <motion.ul style={{fontSize: '2rem'}} initial={{ x: 0 }} animate={{ x: scrollY > 2600 ? 2000 : 0 }} transition={{ duration: 0.7 }}><Link to='./skillset'>Machine Learning and Data Analysis</Link></motion.ul>
                  <motion.ul style={{fontSize: '2rem'}} initial={{ x: 0 }} animate={{ x: scrollY > 2600 ? 2000 : 0 }} transition={{ duration: 0.7 }}><Link to='./skillset'>Full-Stack Web Development</Link></motion.ul>
                  <motion.ul style={{fontSize: '2rem'}} initial={{ x: 0 }} animate={{ x: scrollY > 2600 ? 2000 : 0 }} transition={{ duration: 0.7 }}><Link to='./skillset'>Data Science and Analytics</Link></motion.ul>
              </section>

              {/* <section id='sec' className='experience'>
                <motion.h2 style={{fontSize: '5rem', display: 'flex', flexDirection: 'column'}} initial={{ x: 0 }} animate={{ x: scrollY > 1800 ? -2000 : 0 }} transition={{ duration: 0.7 }}>Internships</motion.h2>
                <motion.ul style={{fontSize: '2rem'}} initial={{ x: 0 }} animate={{ x: scrollY > 1800 ? -2000 : 0 }} transition={{ duration: 0.7 }}>Data Analyst Intern<br></br>Remote Software Solutions, Goa</motion.ul>
                <motion.p style={{fontSize: '3rem', padding: '5px', textAlign: 'center'}} initial={{ x: 0 }} animate={{ x: scrollY > 1800 ? -2000 : 0 }} transition={{ duration: 0.7 }}>Worked as a Data Analyst at the firm and learnt real time implementation of SQL and Power BI in the field of Database Engineering and Data Analytics</motion.p>
              </section> */}
        </div>
        <Bottom/>
      </div>
    </div>
  )
}
