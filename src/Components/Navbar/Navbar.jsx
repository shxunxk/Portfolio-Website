import './Navbar.scss';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar({header}) {

  const [state, setState] = useState(0)
  const [img, setImg] =  useState("menu.png")

  const dropdown = ()=>{
    setState(!state)
    if(img === "menu.png"){
      setImg('no.png')
    }else{
      setImg('menu.png')
    }
  }

  const closeDropdown = () => {
    setState(0);
    setImg('menu.png');
  };
  
  const options = [{'Home':'/'},{'Resume':'/resume'}]

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div style={{alignItems:'center', width:'100px', height:'100%'}}>
          <div style={{backgroundColor:'white', border: '2px black', width:'40%', height:'100%', borderRadius:'50%',display:'flex', alignItems:'center'}}>
          <img src={img||`menu.png`} style={{width:'30%'}} onClick={()=>dropdown()}/>
          </div>
        </div>
        <motion.span style={{fontSize:'25px', color:'black'}} initial={{opacity:0, scale:0.0}} animate={{opacity:1, scale:1}} transition={{duration:2}} className='head'>{header}</motion.span>
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
              const key = Object.keys(option)[0];
              const value = option[key];
              return (
              <div key={index} className='list'>
                <Link to={value} onClick={closeDropdown}>{key}</Link>
              </div>
              );
            })}
            </ul>
          </div>}
    </div>
  )
}
