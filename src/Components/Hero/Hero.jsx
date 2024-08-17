import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';
import { motion } from 'framer-motion';

// Variants for animation
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
};

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
};

export default function Hero() {
  const skills = ['Machine Learning', 'Data Science and Analytics', 'Web Development', 'Cloud Computing'];
  const cap = ['Creativity', 'Inovation', 'Hardwork'];
  
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [selectedCap, setSelectedCap] = useState(0);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);  // Track screen size

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const skillInterval = setInterval(() => {
      setCurrentSkillIndex(prevIndex => (prevIndex + 1) % skills.length);
    }, 2000);
    return () => clearInterval(skillInterval);
  }, [skills.length]);
  
    useEffect(() => {
      const capInterval = setInterval(() => {
        setSelectedCap(prevIndex => (prevIndex + 1) % cap.length);
      }, 5000);

    return () => clearInterval(capInterval);
  }, [cap.length]);

  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div 
          variants={textVariants} 
          className={`textContainer ${isMobile ? 'mobile' : ''}`} 
          initial="initial" 
          animate="animate"
        >
          <motion.h1 variants={textVariants}>
            <p>{skills[currentSkillIndex]} .<br /> {cap[selectedCap]} .</p>
          </motion.h1>
        </motion.div>
      </div>

      <motion.div 
        className={`slidingText ${isMobile ? 'mobile' : ''}`} 
        variants={sliderVariants} 
        initial="initial" 
        animate="animate"
      >
        Learn.Work.Create
      </motion.div>

      {/* Dynamic buttons appear after 5 seconds */}
      <motion.div
        className="buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
      >
      </motion.div>
    </div>
  );
}
