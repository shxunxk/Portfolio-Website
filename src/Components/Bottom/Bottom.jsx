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
                  <p><Link to='/'>Home</Link></p>
                  <p><Link to='/latest-work'>Latest Work</Link></p>
                  <p><Link to='/about'>About</Link></p>
                </div>
                <div className='sub' id='sub3'></div>
              </section>
    </div>
  )
}
