import WorkCard from './WorkCard';
import './Section.scss';
import { motion } from 'framer-motion';

export default function Section({ title, completedProjects = [], pendingProjects = [], projects = [] }) {
  return (
    <motion.div 
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {title && (
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
      )}
      <div className="section-content">
        {completedProjects.length > 0 && <h4>Completed Projects</h4>}
        {completedProjects.map((item, index) => (
          <motion.div 
            key={index} 
            className='card'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <WorkCard item={item} />
          </motion.div>
        ))}

        {pendingProjects.length > 0 && <h4>Pending Projects</h4>}
        {pendingProjects.map((item, index) => (
          <motion.div 
            key={index} 
            className='card'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <WorkCard item={item} />
          </motion.div>
        ))}

        {projects.length > 0 &&
          projects.map((item, index) => (
            <motion.div 
              key={index} 
              className='card'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <WorkCard item={item} />
            </motion.div>
          ))}
      </div>
    </motion.div>
  );
}
