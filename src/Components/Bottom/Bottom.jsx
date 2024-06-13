import { Link } from 'react-router-dom'
import './Bottom.scss'
export default function Bottom() {
  return (
    <div className='main'>
      <section className='contact'>
                {/* <motion.h2 style={{fontSize: '5rem', display: 'flex', flexDirection: 'column'}} initial={{ x: 0 }} animate={{ x: scrollY > 3200 ? -2000 : 0 }} transition={{ duration: 0.7 }}>Contact</motion.h2>
                <motion.ul style={{fontSize: '2rem'}} initial={{ x: 0 }} animate={{ x: scrollY > 3200 ? -2000 : 0 }} transition={{ duration: 0.7 }}>Email: <Link to='mailto:ssnagvenkar@gmail.com'>ssnagvenkar@gmail.com</Link></motion.ul> */}
                <div className='sub' id='sub1'>
                  <h3>Get in touch</h3>
                  <div className='inner'>
                    <p >Email: <Link className='email' to='mailto:ssnagvenkar@gmail.com'>ssnagvenkar@gmail.com</Link></p>
                  </div>
                </div>
                <div className='sub' id='sub2'>
                  <p className='bl'><Link to='/'>Home</Link></p>
                  <p className='bl'><Link to='/latest-work'>Latest Work</Link></p>
                  <p className='bl'><Link to='/about'>About</Link></p>
                  <p className='bl'><Link to='/resume'>Resume</Link></p>
                </div>
                <div className='sub' id='sub3'>
                  <h3>Social Media</h3>
                  <div style={{display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '10px', // Adjust the gap as needed
      alignItems: 'center', padding:'20px'}}>
                  <Link to="https://www.linkedin.com/in/shaunak-nagvenkar-b3781321a/" target="_blank" style={{display:'flex', justifyContent: 'center'}}><img src='linkedin.png' alt="" style={{maxHeight:'30px', maxWidth: '30px', backgroundColor:'white', borderRadius:'5px'}}/></Link>
                  <Link to="https://www.instagram.com/_shaunxk_/" target="_blank" style={{display:'flex', justifyContent: 'center'}}><img src='instagram.png' alt="" style={{maxHeight:'30px', maxWidth: '30px', backgroundColor:'white', borderRadius:'5px'}}/></Link>
                  <Link to="https://www.github.com/shxunxk" target="_blank" style={{display:'flex', justifyContent: 'center'}}><img src='github.png' alt="" style={{maxHeight:'30px', maxWidth: '30px', backgroundColor:'white', borderRadius:'5px'}}/></Link>
                  </div>
                </div>
              </section>
    </div>
  )
}
