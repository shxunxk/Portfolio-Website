import React, {useState} from 'react'
import './Sidebar.scss'
import ToggleButtons from './ToggleButtons/ToggleButtons'
import Links from './Links/Links';
import {motion} from 'framer-motion';

export default function Sidebar() {

  const [open, setOpen] = useState(false);

  const variants = {
    open:{
      clipPath: "circle(1200px at 50% 50%)",
      transition: {
        type: "spring",
        stiffness: 20,
        delay: 0.5
      },
    },
    closed:{
      clipPath: "circle(30px at 12.3% 6.3%)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      },
    },
  };

  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
      <motion.div className='bg' variants={variants}>
        <Links/>
      </motion.div>
      <ToggleButtons setOpen={setOpen}/>
    </motion.div>
  )
}
