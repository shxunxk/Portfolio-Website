// WhoAmI.js
import { motion } from 'framer-motion';

export default function WhoAmI() {
  return (
    <section className='about-content'>
      <div className='content' style={{display:'flex', flexDirection: 'column',gap: '100px'}}>
        <motion.h2
          className='header'
          style={{ fontSize: '5rem', width: '100%', textAlign:'center' }}
          initial={{ x: -1000 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2 }}
        >
          Who Am I?
        </motion.h2>
        <motion.div
          className='whoami-text'
          style={{ fontSize: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'row', gap: '2%'}}
          initial={{ x: -1000 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.img
            style={{ borderRadius: '20px', width: '20%' }}
            src={"SHAUNAK.jpg"}
            alt="Profile"
          />
          <p style={{ flex: 1, alignContent: 'center' }}>
            Hi, this is Shaunak, a passionate and dedicated individual with a strong background in <strong>Machine Learning</strong>, <strong>Data Science</strong>, and <strong>Web Development</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
