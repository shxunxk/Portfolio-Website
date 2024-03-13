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

const buttonVar = {
  initial: {
    y: 0,
  },
  up: {
    y: 100,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  down: {
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
setInterval(() => {
  buttonVar.animate = buttonVar.up;
  setTimeout(() => {
    buttonVar.animate = buttonVar.down;
  }, 1000);
}, 2000);

export default function hero() {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div variants={textVariants} className='textContainer' initial="initial" animate="animate">
          <motion.h1 variants={textVariants}><p>Machine Learning .<br/> Data Science and Analytics .<br/> Web Development .</p></motion.h1>
          <motion.div variants={textVariants} className='buttons'>
            <Link to='/latest-work'>
              <motion.button className='button' variants={buttonVar} initial="initial" animate="animate"> Latest Work </motion.button>
            </Link>
            <Link to='/about'>
              <motion.button className='button' variants={buttonVar} initial="initial" animate="animate"> About Me </motion.button>
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
