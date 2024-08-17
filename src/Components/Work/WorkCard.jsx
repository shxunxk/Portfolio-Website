import './WorkCard.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function WorkCard({ item }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link to={`/workinfo/${item.name}`} className="imgText">
        <div className="card">
          <div className="image">
            <img src={item.img} alt={item.name} className="img" />
          </div>
          <div className="textBox">
            <p className="name">{item.name}</p>
            {item.role && <p className="role">{item.role}</p>}
          </div>
        </div>
        <div className="text">
          {item.desc}
        </div>
      </Link>
    </motion.div>
  );
}
