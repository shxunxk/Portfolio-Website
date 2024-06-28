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

  const img = ["https://imgs.search.brave.com/VNF67Gfkj8ySR8NjNOLFv0TDVh1mqbX9zk50tDF2VP4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Yy9jNS9WZWxsb3Jl/X0luc3RpdHV0ZV9v/Zl9UZWNobm9sb2d5/X3NlYWxfMjAxNy5z/dmcvNTEycHgtVmVs/bG9yZV9JbnN0aXR1/dGVfb2ZfVGVjaG5v/bG9neV9zZWFsXzIw/MTcuc3ZnLnBuZw", "VIT1.JPG"]
  const sliderVariants = {
    initial: {
      x: '100%',
    },
    animate: {
      x: "-100%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 40,
    },
  },
  }
  
  

    return (
      <div className="About" style={{display: 'flex', flexDirection: 'column', minHeight: '100%', overflow: 'hidden'}}>
      <div className='projects'>
        <div className='main'>
              <section id = 'sec' className='about-content'>
              <div className='content' style={{ width: '90%', display:'flex', flexDirection:'column',justifyContent:'space-between', height:'60%'}}>
                <motion.h2 className='header' style={{ fontSize: '5rem' }} initial={{ x: -1000 }} animate={{ x: scrollY > 300 ? -2000 : 0 }} transition={{ duration: 2 }}>
                    Who Am I?
                </motion.h2>
                <motion.p style={{ fontSize: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'row', gap: '2%',alignItems:'center' }} initial={{ x: -1000 }} animate={{ x: scrollY > 300 ? -2000 : 0 }} transition={{ duration: 1.5 }}>
                    <motion.img style={{borderRadius: '20px'}} src={"SHAUNAK.jpg"} className='slideImage' />
                    <p style={{ alignContent: 'center', flex: 1 }}>Hi this is Shaunak, he is a passionate and dedicated individual with a strong background in <strong>Machine Learning</strong>, <strong>Data Science</strong>, and <strong>Web Development</strong>.</p>
                </motion.p>
            </div>
              </section>
              <section id='sec' className='education'>
                <div className='content'>
                <motion.h2 style={{fontSize: '5rem', display: 'flex', flexDirection: 'column'}} initial={{ x: -800 }} animate={{ x: scrollY > 1200 ? 1000 : 0 }} transition={{ duration: 2 }}> <p style={{paddingTop:'5%'}}> Education and other details</p></motion.h2>
                <motion.p style={{fontSize: '2rem', padding:'50px',display: 'flex', flexDirection: 'column', alignItems:'center'}} initial={{ x: -1000 }} animate={{ x: scrollY > 1200 ? 2000 : 0 }} transition={{ duration: 1.5 }}><div style={{padding:"50px", display:'flex', gap:'30px', justifyContent:'center', textAlign:'center', alignContent:'center'}}><img className='slideImage' src={"https://imgs.search.brave.com/ZmpaFd0BsMFCCwMjjxX_sBKlgvOhfClUmER2rEhU-Qg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/b3Jhbmdlc21pbGUu/Y29tL2NvbW1vbi9p/bWdfY2l0aWVzX3c2/ODAvZ29hLXJlZ2lv/bi00MTI3LTEuanBn"}/></div><p style={{width:'90%'}}>Based in Goa, India</p></motion.p>
                <motion.p style={{fontSize: '2rem', display:'flex', flexDirection:'column', alignItems:'center'}} initial={{ x: -1000 }} animate={{ x: scrollY > 1200 ? 2000 : 0 }} transition={{ duration: 1.5 }}> <p style={{width:'90%'}}> Pursuing Bachelors Degree in the field of Computer Science Engineering from Vellore Institute of Technology, Vellore</p><br/><motion.div style={{padding:"50px", display:'flex', gap:'80px', justifyContent:'center'}} variants={sliderVariants} initial="initial" animate="animate">{img.map((item, index)=>{
                  return(
                    <>
                      <img className='slideImage' key={index} src={item}/>
                    </>
                  )
                  })}
                  </motion.div>
                </motion.p>
                </div>
              </section>
              <section id = 'sec' className='skills'>
                  <motion.h2 className='p' style={{fontSize: '5rem'}} transition={{ duration: 0.7 }}>Skills</motion.h2>
                  <motion.p className='p' style={{fontSize: '2rem'}} transition={{ duration: 0.7 }} whileHover={{fontSize:'2.2rem', font:'bold'}}><Link to='/skills'>Artificial Intelligence</Link></motion.p>
                  <motion.p className='p' style={{fontSize: '2rem'}} transition={{ duration: 0.7 }} whileHover={{fontSize:'2.2rem', font:'bold'}}><Link to='/skills'>Web Development</Link></motion.p>
                  <motion.p className='p' style={{fontSize: '2rem'}} transition={{ duration: 0.7 }} whileHover={{fontSize:'2.2rem', font:'bold'}}><Link to='/skills'>Data Engineering</Link></motion.p>
              </section>
        </div>
      </div>
    </div>
  )
}
