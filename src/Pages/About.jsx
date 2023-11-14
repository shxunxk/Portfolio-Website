import React, { useRef } from 'react'
import './about.scss'
import {motion, useScroll, useTransform} from 'framer-motion'

export default function Parallax() {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })

    const xText = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

    return (
      //: type === 'services' ? "linear-gradient(180deg, #111132, #0d0c1d)" 
    <div className='About' style={{background: "linear-gradient(180deg, #111132, #505064)"}}>
      <motion.h1 style={{y: xText}}>{'About'}</motion.h1>
      <motion.div className='mountains'></motion.div>
      <motion.div className='planets'></motion.div>
      <motion.div className='stars'></motion.div>
    </div>
  )
}
