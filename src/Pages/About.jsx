import './About.scss'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import { useState, useEffect } from 'react';
export default function About({getPage}) {
  getPage('About Me')
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
        <div className='main'>
              <section id = 'sec' className='about-content'>
                <motion.h2 style={{fontSize: '5rem'}} initial={{ x: 0 }} animate={{ x: scrollY > 300 ? -1000 : 0 }} transition={{ duration: 2 }}>Who Am I?</motion.h2>
                <motion.p style={{fontSize: '3rem', padding: '0px', textAlign: 'center', display:'flex', flexDirection:'row',}} initial={{ x: 0 }} animate={{ x: scrollY > 300 ? -1000 : 0 }} transition={{ duration: 1.5 }}>
                <img style={{borderRadius:'20px'}}src={"SHAUNAK.jpg"}/>
                <p style={{alignContent:'center'}}>Hi this is Shaunak, he is a passionate and dedicated individual with a strong background in <strong>Machine Learning</strong>, <strong>Data Science</strong>, and <strong>Web Development</strong>.</p>
                </motion.p>
              </section>
              <section id='sec' className='education'>
                <motion.h2 style={{fontSize: '5rem', display: 'flex', flexDirection: 'column'}} initial={{ x: -800 }} animate={{ x: scrollY > 1100 ? 1000 : 0 }} transition={{ duration: 2 }}>Education and other details</motion.h2>
                <motion.ul style={{fontSize: '2rem', padding:'50px'}} initial={{ x: -1000 }} animate={{ x: scrollY > 1100 ? 2000 : 0 }} transition={{ duration: 1.5 }}><div style={{padding:"50px", display:'flex', gap:'30px', justifyContent:'center'}}><img style={{height:'200px', borderRadius:'20px'}} src={"https://imgs.search.brave.com/ZmpaFd0BsMFCCwMjjxX_sBKlgvOhfClUmER2rEhU-Qg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/b3Jhbmdlc21pbGUu/Y29tL2NvbW1vbi9p/bWdfY2l0aWVzX3c2/ODAvZ29hLXJlZ2lv/bi00MTI3LTEuanBn"}/><img style={{height:'200px'}} src={""}/></div>Based in Goa, India</motion.ul>
                <motion.ul style={{fontSize: '2rem'}} initial={{ x: -1000 }} animate={{ x: scrollY > 1100 ? 2000 : 0 }} transition={{ duration: 1.5 }}>Pursuing Bachelors Degree in the field of Computer Science Engineering from Vellore Institute of Technology, Vellore<br/><div style={{padding:"50px", display:'flex', gap:'30px', justifyContent:'center'}}><img style={{borderRadius:'20px', height:'200px'}} src={"https://imgs.search.brave.com/VNF67Gfkj8ySR8NjNOLFv0TDVh1mqbX9zk50tDF2VP4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Yy9jNS9WZWxsb3Jl/X0luc3RpdHV0ZV9v/Zl9UZWNobm9sb2d5/X3NlYWxfMjAxNy5z/dmcvNTEycHgtVmVs/bG9yZV9JbnN0aXR1/dGVfb2ZfVGVjaG5v/bG9neV9zZWFsXzIw/MTcuc3ZnLnBuZw"}/><img style={{borderRadius:'20px', height:'200px'}} src={"VIT1.JPG"}/></div></motion.ul>
              </section>
              <section id = 'sec' className='skills'>
                <motion.h2 style={{fontSize: '5rem', display: 'flex', flexDirection: 'column'}} initial={{ x: 0 }} animate={{ x: scrollY > 2600 ? -2000 : 0 }} transition={{ duration: 0.7 }}>Skills</motion.h2>
                  <motion.ul style={{fontSize: '2rem'}} initial={{ x: 0 }} animate={{ x: scrollY > 2600 ? 2000 : 0 }} transition={{ duration: 0.7 }}><Link to='/skills'>Artificial Intelligence</Link></motion.ul>
                  <motion.ul style={{fontSize: '2rem'}} initial={{ x: 0 }} animate={{ x: scrollY > 2600 ? 2000 : 0 }} transition={{ duration: 0.7 }}><Link to='/skills'>Web Development</Link></motion.ul>
                  <motion.ul style={{fontSize: '2rem'}} initial={{ x: 0 }} animate={{ x: scrollY > 2600 ? 2000 : 0 }} transition={{ duration: 0.7 }}><Link to='/skills'>Data Engineering</Link></motion.ul>
              </section>
        </div>
      </div>
    </div>
  )
}
