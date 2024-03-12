import {motion} from 'framer-motion';

const variants={
  open:{
    transition:{
      staggerChildren: 0.1,
    },
  },
  closed:{
    transition:{
      staggerChildren: 0.05,
      staggerDirection: -1 
    }
  }
}

const itemVariants={
  open:{
    transition:{
      y: 0,
      opacity: 1,
    },
  },
  closed:{
    transition:{
      y: 50,
      opacity: 0, 
    }
  }
}

const items = ['Homepage', 'Latest Work', 'About Me'];
const path = ['', 'latest-work', 'about']

export default function Links() {
  return (
    <motion.div className='links' variants={variants}>
       {items.map((item, index) => (
         <motion.a href={`/${path[index]}`} key={item} variants={itemVariants}>
           {item}
         </motion.a>
       ))}
    </motion.div>
  );
}
