import './Navbar.scss';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar({title}) {

  const [state, setState] = useState(0)

  const [img, setImg] =  useState('menu.png')

  const dropdown = ()=>{
    setState(!state)
    if(img === "menu.png"){
      setImg('no.png')
    }else{
      setImg('menu.png')
    }
  }

  const options = [{'Home':'/'},{'Latest Work': '/latest-work/'},{'About':'/about/'}]

  console.log(options)
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div style={{backgroundColor:'white', width:'2%', height:'6%', justifyContent:'center', alignItems:'center', borderRadius:'30px'}}>
          <img src={img} style={{height:'10px'}} onClick={()=>dropdown()}/>
        </div>
        <motion.span initial={{opacity:0, scale:0.0}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} className='head'>{title}</motion.span>
        <div className='social' >
            <Link to="https://www.linkedin.com/in/shaunak-nagvenkar-b3781321a/" target="_blank"><img src='linkedin.png' alt=""/></Link>
            <Link to="https://www.instagram.com/_shaunxk_/" target="_blank"><img src='instagram.png' alt=""/></Link>
            <Link to="https://www.github.com/shxunxk" target="_blank"><img src='github.png' alt=""/></Link>
        </div>
      </div>
      {img === 'no.png' && 
          <div className='lower'>
            <ul>
            {options.map((option, index) => {
              const key = Object.keys(option)[0];  // Extract the key
              const value = option[key];           // Extract the value
              return (
              <div key={index} className='list'>
                <a href={value}>{key}</a>
              </div>
              );
            })}
            </ul>
          </div>}
    </div>
  )
}
