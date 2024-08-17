// import React from 'react';
// import { motion } from 'framer-motion';
// import './Skills.scss';

// const Skills = () => {


//     const containerVariants = {
//         hidden: { opacity: 0, scale: 0.9 },
//         visible: {
//           opacity: 1,
//           scale: 1,
//           transition: {
//             delayChildren: 0.5,
//             staggerChildren: 0.3,
//           },
//         },
//       };
      
//       const skillItemVariants = {
//         hidden: { opacity: 0, y: 100 },
//         visible: { opacity: 1, y: 0 },
//       };
      
//       const imageVariants = {
//         hidden: { opacity: 0, scale: 0.8 },
//         visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
//       };

      
//     

//     return (
//         <section id="skills" className="skills-section">
//           <motion.h2
//             className='header'
//             style={{ fontSize: '5rem', width: '100%', textAlign: 'center', paddingBottom: '20px' }}
//             initial={{ x: -1000 }}
//             whileInView={{ x: 0 }}
//             transition={{ duration: 2 }}
//           >
//             Skills
//           </motion.h2>
    
//           <motion.div
//             className="skills-container"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//           >
//             {Object.keys(skills).map((categoryKey) => (
//               <motion.div key={categoryKey} className="skill-category">
//                 <motion.h3
//                   initial={{ opacity: 0, x: -100 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 1 }}
//                 >
//                   {skills[categoryKey].Title}
//                 </motion.h3>
    
//                 <motion.div className="skills-grid">
//                   {skills[categoryKey]['Area Covered'] &&
//                     Object.keys(skills[categoryKey]['Area Covered']).map((skillKey) => (
//                       <motion.div
//                         key={skillKey}
//                         className="skill-item"
//                         variants={skillItemVariants}
//                       >
//                         <motion.div
//                           className="skill-image-container"
//                           variants={imageVariants}
//                         >
//                           <img
//                             src={skills[categoryKey]['Area Covered'][skillKey].img}
//                             alt={skillKey}
//                             className="skill-image"
//                           />
//                         </motion.div>
//                         <div className="skill-details">
//                           <h4>{skillKey}</h4>
//                           <ul>
//                             {skills[categoryKey]['Area Covered'][skillKey].details.map(
//                               (detail, index) => (
//                                 <li key={index}>{detail}</li>
//                               )
//                             )}
//                           </ul>
//                         </div>
//                       </motion.div>
//                     ))}
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </section>
//       );
// };

// export default Skills;

import React from 'react';
import { motion } from 'framer-motion';
import './Skills.scss';

const Skills = () => {

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.3,
            },
        },
    };

    const skillItemVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    };

    const hoverEffect = {
        scale: 1.01,
        transition: { duration: 0.3 }
    };

    const skills = {
                "webdev": {
                    "Title": "Web Development",
                    "Area Covered": {
                        "HTML": { name: 'Hyper Text Markup Languages', "img": 'https://imgs.search.brave.com/A8Vg4g1VOmxTBauiKKUP-Xp_aOjTkbg9Tqda5qwTgmc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi82LzYxL0hU/TUw1X2xvZ29fYW5k/X3dvcmRtYXJrLnN2/Zy8yMjBweC1IVE1M/NV9sb2dvX2FuZF93/b3JkbWFyay5zdmcu/cG5n', "details": [] },
                        "CSS": { name: 'Cascading Style Sheets', "img": 'https://imgs.search.brave.com/QDzUzmK7oNgYEshF8l5T5wgMjGevyxUEreIxyefjuYA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA5/L0NTUy1Mb2dvLTUw/MHgzMTMucG5n', "details": [] },
                        "JavaScript": { "img": 'https://imgs.search.brave.com/IHZnguQFJrsQazmJVr7bS-PfCI9pkvM5DDxqOSrK1OQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk5L1Vu/b2ZmaWNpYWxfSmF2/YVNjcmlwdF9sb2dv/XzIuc3ZnLzIyMHB4/LVVub2ZmaWNpYWxf/SmF2YVNjcmlwdF9s/b2dvXzIuc3ZnLnBu/Zw', "details": [] },
                        "React JS": { "img": 'https://imgs.search.brave.com/fXOjhya7zj690CCT_lYjisQ0Unx4EQzOAhHXPYMuS7s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9hL2E3L1Jl/YWN0LWljb24uc3Zn/LzY0MHB4LVJlYWN0/LWljb24uc3ZnLnBu/Zw', "details": ["Frontend Web Development"] },
                        "Next JS": { "img": 'https://imgs.search.brave.com/7jLMZwGm4XNFmx3uSMJmWnvJcUV_iu8xW1ch2jGWcNM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi84LzhlL05l/eHRqcy1sb2dvLnN2/Zy8yMjBweC1OZXh0/anMtbG9nby5zdmcu/cG5n', "details": ["Frontend and Backend Web Development"] },
                        "Node JS": { "img": 'https://imgs.search.brave.com/Ip8c9fopbms33y8-Bm0CA1HFMv7mJnSPxaezkK4YxmM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9kL2Q5L05v/ZGUuanNfbG9nby5z/dmcvNjQwcHgtTm9k/ZS5qc19sb2dvLnN2/Zy5wbmc', "details": ["Backend Web Development"] },
                        "Tailwind": { "img": 'https://imgs.search.brave.com/xibSr9OtDuPRW2zyizx_9WADIUD3f_c2MzwWQHwEb-g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L1Rh/aWx3aW5kX0NTU19s/b2dvLnN2Zy8yMjBw/eC1UYWlsd2luZF9D/U1NfbG9nby5zdmcu/cG5n', "details": ["Web Styling"] },
                    }
                },
                "machineLearning": {
                    "Title": "Artificial Intelligence",
                    "Area Covered": {
                        "Machine Learning": { "img": 'https://imgs.search.brave.com/CF81viXsX8Eqm98vB7SDVxrtbQo-vXILiJhszCIwH5k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/MDI5MzE4MS9waG90/by9kZWVwLWxlYXJu/aW5nLWFydGlmaWNp/YWwtaW50ZWxsaWdl/bmNlLWJhY2tncm91/bmQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXBPTV95QzQt/YnNOTTBVX0xmbTda/Nlp3LWNiOHV1Y0da/eC1IOG41TTF0eWc9', "details": ["Regression model prediction", "Classification model"] },
                        "Deep Learning": { "img": 'https://imgs.search.brave.com/8mrF-CdT2eQvR93HnLs7k270qLnvBFo_RgTRuS5_gFc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMTEyMjYx/NTAwNTIva2lzc3Bu/Z2RlZXBsZWFybmlu/Z2FydGlmaWNpYWxu/ZXVyYWxuZXR3b3Jr/bWFjaGluZWxlbmV1/cm9uczVhZGI3N2Q2/MTU5MTg5Nzc1Njkx/NjYxNTI0MzMyNTAy/MDg4NC5wbmc', "details": ["Artificial Neural Network", "Convolutional Neural Network", "Recurrent Neural Network"] },
                        "Generative AI": { "img": 'https://imgs.search.brave.com/BvzJUSSAr8BgHaYXh5a0zQhlS6TMOsubnqAPHU94wZI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE2L0dlbkFJX0Fn/ZW50LnBuZw', "details": ["Large Language Models (LLM's)"] }
                    }
                },
                "datascience": {
                    "Title": "Data Engineering",
                    "Area Covered": {
                        "Data Analytics": { "img": 'https://img.freepik.com/free-vector/colored-big-data-analytics-isometric-composition-with-abstract-3d-network-storage-windows-apps-air-illustration_1284-28905.jpg?size=626&ext=jpg&ga=GA1.1.465072429.1723484070&semt=ais_hybrid', "details": ["Data Cleaning", "Data Visualization"] },
                        "Data Engineering": { "img": 'https://imgs.search.brave.com/59LNwQNFiqvIU2PrgtdVbzSbGIL7RK08flE5XoK1xQE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWx0ZXhzb2Z0LmNv/bS9zdGF0aWMvYmxv/Zy1wb3N0LzIwMjMv/MTEvYzVjYjhlZjgt/ODhjZi00NzFjLTlj/NTAtZTkzNWIzNWU5/MTAxLmpwZw', "details": ["ETL Processes", "Database Management"] },
                        "Big Data": { "img": 'https://imgs.search.brave.com/fS_UtD49N_e5JnZ59xYJD4mgRvgSOR80yFGzER08ZBA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idWls/dGluLmNvbS9zaXRl/cy93d3cuYnVpbHRp/bi5jb20vZmlsZXMv/c3R5bGVzL2NrZWRp/dG9yX29wdGltaXpl/L3B1YmxpYy9pbmxp/bmUtaW1hZ2VzL2Jp/Zy1kYXRhXzEuanBn', "details": ["Hadoop", "Spark"] }
                    }
                }
            };

    return (
        <section id="skills" className="skills-section">
            <motion.h2
                className='header'
                style={{ fontSize: '5rem', width: '100%', textAlign: 'center', paddingBottom: '20px' }}
                initial={{ x: -1000 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 2 }}
            >
                Skills
            </motion.h2>

            <motion.div
                className="skills-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
            >
                {Object.keys(skills).map((categoryKey) => (
                    <motion.div key={categoryKey} className="skill-category">
                        <motion.h3
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            {skills[categoryKey].Title}
                        </motion.h3>

                        <motion.div className="skills-grid">
                            {skills[categoryKey]['Area Covered'] &&
                                Object.keys(skills[categoryKey]['Area Covered']).map((skillKey) => (
                                    <motion.div
                                        key={skillKey}
                                        className="skill-item"
                                        variants={skillItemVariants}
                                        whileHover={hoverEffect}
                                    >
                                        <motion.div
                                            className="skill-image-container"
                                            variants={imageVariants}
                                            whileHover={hoverEffect}
                                        >
                                            <img
                                                src={skills[categoryKey]['Area Covered'][skillKey].img}
                                                alt={skillKey}
                                                className="skill-image"
                                            />
                                        </motion.div>
                                        <div className="skill-details">
                                            <h4>{skillKey}</h4>
                                            <ul>
                                                {skills[categoryKey]['Area Covered'][skillKey].details.map(
                                                    (detail, index) => (
                                                        <li key={index}>{detail}</li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
