// Education.js
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section className='education'>
      <motion.h2
        style={{ fontSize: '5rem', textAlign: 'center', display:"flex", flexDirection:'column', justifyContent:'center', height:'100vh'}}
        initial={{ x: -800 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2 }}
      >
        Education and Other Details
      </motion.h2>
        <motion.div
          style={{ fontSize: '2rem', textAlign: 'center', minHeight:'100vh'}}
          initial={{ x: -1000 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div>
          <motion.img
            style={{ borderRadius: '20px', width: '300px', height: 'auto',}}
            src="https://imgs.search.brave.com/Cj89CBWKsufxoJi3PQM-TsKk3huBJRY1V79omfWP8oE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIx/NjU2Mjg2L3Bob3Rv/L2JlYWNoLWluLWdv/YS1pbmRpYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Y2dK/cnlKcXRjNmU2OGsx/NF9NWHpvaG1naVNM/b242a09xdzVJbHVz/MHYybz0"
            alt="Location Image"
          />
          <p style={{padding:'30px'}}>Based in Goa, India</p>
          </div>
          <div>
          <motion.img
            style={{ borderRadius: '20px', width: '300px', height: 'auto',}}
            src="https://imgs.search.brave.com/K8UayV_uxz6kH2TqOFf2-jerU3QVJ_I8BCUsnIGOeeY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3RhdGljLWNv/bGxlZ2VkdW5pYS5j/b20vcHVibGljL2Nv/bGxlZ2VfZGF0YS9p/bWFnZXMvbG9nb3Mv/MTQ5MDM0MjEzM0xv/Z28uanBn"
            alt="Location Image"
          />
          <p style={{padding:'30px'}}>Pursuing a Bachelors Degree in Computer Science Engineering from Vellore Institute of Technology, Vellore</p>
          </div>
        </motion.div>
    </section>
  );
}
