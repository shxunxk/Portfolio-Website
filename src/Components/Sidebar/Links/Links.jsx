import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

// const variants={
//   open:{
//     transition:{
//       staggerChildren: 0.1,
//     },
//   },
//   closed:{
//     transition:{
//       staggerChildren: 0.05,
//       staggerDirection: -1 
//     }
//   }
// }

// const itemVariants={
//   open:{
//     transition:{
//       y: 0,
//       opacity: 1,
//     },
//   },
//   closed:{
//     transition:{
//       y: 50,
//       opacity: 0, 
//     }
//   }
// }

const items = ['Homepage', 'Latest Work', 'About Me'];
const path = ['', 'latest-work', 'about']

export default function Links() {
  return (
    <motion.div className='links'>
       {items.map((item, index) => (
         <Link to={`/${path[index]}`} key={item}>
           {item}
         </Link>
       ))}
    </motion.div>
  );
}
