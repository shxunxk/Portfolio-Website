import React from 'react'
import './Navbar.scss';
import {motion} from 'framer-motion'
import Sidebar from '../Sidebar/Sidebar';

export default function Navbar() {
  return (
    <div className='navbar'>
      <Sidebar/>
      <div className='wrapper'>
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:0.5}} transition={{duration:1}}>Shaunak Nagvenkar</motion.span>
        <div className='social' >
            <a href="" target="_blank"><img src='/linkedin.png' alt=""/></a>
            <a href="" target="_blank"><img src='/facebook.png' alt=""/></a>
            <a href="" target="_blank"><img src='/instagram.png' alt=""/></a>
            <a href="" target="_blank"><img src='/github.png' alt=""/></a>
        </div>
      </div>
    </div>
  )
}
