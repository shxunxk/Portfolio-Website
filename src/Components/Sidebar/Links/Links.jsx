import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const items = ['Homepage'];
const path = ['']

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
