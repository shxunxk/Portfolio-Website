import React from 'react'
import './Hero.scss'
import {motion} from 'framer-motion'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
  },
},
}

export default function hero() {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div variants={textVariants} className='textContainer' initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Shaunak Nagvenkar</motion.h2>
          <motion.h1 variants={textVariants}>Machine Learning . Data Analysis . Web Development . UI Designing</motion.h1>
          <motion.div variants={textVariants} className='buttons'>
            <motion.button variants={textVariants}> Latest Work </motion.button>
            <motion.button variants={textVariants}> Contact Me </motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="./scroll.png" alt="Scroll down" className='scrollDown'/>"
        </motion.div>
      </div>
      <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="animate"> 
        Writer Content Creator
      </motion.div>
      <div className='imageContainer'>
        <img src="./hero.png" alt="Hero"/>
      </div>
    </div>
  )
}
