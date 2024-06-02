import './Navbar.scss';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar({title}) {

  const [state, setState] = useState(0)

  const [img, setImg] =  useState('linkedin.png')

  const dropdown = ()=>{
    setState(!state)
    if(img === "linkedin.png"){
      setImg('instagram.png')
    }else{
      setImg('linkedin.png')
    }
  }

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div>
          <img src={img} onClick={()=>dropdown()}/>
        </div>
        <motion.span initial={{opacity:0, scale:0.0}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} className='head'>{title}</motion.span>
        <div className='social' >
            <Link to="https://www.linkedin.com/in/shaunak-nagvenkar-b3781321a/" target="_blank"><img src='linkedin.png' alt=""/></Link>
            <Link to="https://www.instagram.com/_shaunxk_/" target="_blank"><img src='instagram.png' alt=""/></Link>
            <Link to="https://www.github.com/shxunxk" target="_blank"><img src='github.png' alt=""/></Link>
        </div>
      </div>
      {img === 'instagram.png' && 
          <div className='lower'>
            <ul>
              <div className='list'>Home</div>
              <div className='list'>About</div>
            </ul>
          </div>}
    </div>
  )
}
