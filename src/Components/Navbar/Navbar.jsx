import React from 'react'
import './Navbar.scss';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:0.8}} transition={{duration:1}}>Shaunak Nagvenkar</motion.span>
        <div className='social' >
            <Link to="https://www.linkedin.com/in/shaunak-nagvenkar-b3781321a/" target="_blank"><img src='linkedin.png' alt=""/></Link>
            <Link to="https://www.instagram.com/_shaunxk_/" target="_blank"><img src='/instagram.png' alt=""/></Link>
            <Link href="https://www.github.com/shxunxk" target="_blank"><img src='github.png' alt=""/></Link>
        </div>
      </div>
    </div>
  )
}
