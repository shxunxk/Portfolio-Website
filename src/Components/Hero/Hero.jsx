import { Link } from 'react-router-dom'
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
}

const sliderVariants = {
  initial: {
    x: '100%',
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
  },
},
}

export default function hero({getPage}) {
  getPage('Hi There!!')
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div variants={textVariants} className='textContainer' initial="initial" animate="animate">
          <motion.h1 style={{/*backgroundColor:'#4d097566', padding: '50px', borderRadius:'50px'*/}} variants={textVariants}><p>Machine Learning .<br/> Data Science .<br/> Web Development .</p></motion.h1>
          <motion.div variants={textVariants} className='buttons'>
            <Link to='/latest-work'>
              <motion.button className='button'> Latest Work </motion.button>
            </Link>
            <Link to='/about'>
              <motion.button className='button'> About Me </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="animate"> 
        Learn.Work.Create
      </motion.div>
    </div>
  )
}
