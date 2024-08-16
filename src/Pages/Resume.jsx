import './Resume.scss'
import { Link } from 'react-router-dom'

const Resume = () => {

    const details = {
        "Mobile": '7757027399',
        "Email": "ssnagvenkar@gmail.com",
        "Education": "Vellore Institute of Technology (2021-2025)  -  Vellore, Tamil Nadu",
        "Course of Study": 'Bachelor of Technology in Computer Science Engineering'
    };

    const certification = {
        'Machine Learning Specialization - DeepLearning.AI and Stanford University': "Supervised Machine Learning: Regression and Classification, Advanced Learning Algorithms, Unsupervised Learning, Recommenders and Reinforcement Learning"
    };

    const cultural = {
        '3rd Position in Braniac - IMPERIUM ’22 - An International Management Extravaganza': "Braniac is a technical quiz competition organised by Loyola College, Chennai during their cultural fest Imperium having multiple colleges from all over India."
    };

    const skills = {
        'Programming Languages': 'Python, C, C++, Java, JavaScript, R, Dart, SQL, NoSQL',
        "Web Development": "HTML, CSS, JavaScript, ReactJS, NextJS",
        "Database Management": "SQL : PostgreSQL, MySQL - NoSQL: MongoDB",
        "Frameworks": "AWS, Docker, PowerBI, GitHub, Flutter"
    };

    const internship = {
        'Remote Software Solutions': "Worked as a Data Analyst gaining essential skills about Database Management and Data Analysis updating myself with the necessary skills in today's world. Tech Stack - PostgreSQL, PowerBI"
    };

    return (
        <div className="resume">
            <section className='category'>
                <h1 style={{ textAlign: 'center', borderBottom:'1px black solid' }}>SHAUNAK NAGVENKAR</h1>
                <p style={{ textAlign: 'center' }}>Panaji, Goa</p>
            </section>
            <section className='category'>
                <h2 className='header'>Details</h2>
                {Object.keys(details).map((item) => (
                    <p key={item} style={{padding:'2px'}}>{item}: {details[item]}</p>
                ))}
            </section>
            <section className='category'>
                <h2 className='header'>Work Experience</h2>
                {Object.keys(internship).map((item) => (
                    <p key={item} style={{padding:'2px'}}>{item}: {internship[item]}</p>
                ))}
            </section>
            <section className='category'>
                <h2 className='header'>Certifications</h2>
                {Object.keys(certification).map((item) => (
                    <p key={item} style={{padding:'2px'}}>{item}: {certification[item]}</p>
                ))}
            </section>
            <section className='category'>
                <h2 className='header'>Cultural Activities</h2>
                {Object.keys(cultural).map((item) => (
                    <p key={item} style={{padding:'2px'}}>{item}: {cultural[item]}</p>
                ))}
            </section>
            <section className='category'>
                <h2 className='header'>Skills</h2>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'row', fontSize: '1rem' }}>
                        <p style={{ width: '30%', border: '1px gray solid', padding: '2px', fontWeight: 'bold' }}>Skill</p>
                        <p style={{ flex: 1, border: '1px gray solid', padding: '2px', fontWeight: 'bold' }}>Technologies</p>
                    </div>
                    <div>
                        {Object.keys(skills).map((item, index) => (
                            <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
                                <p style={{ width: '30%', border: '1px gray solid', padding: '2px' }}>{item}</p>
                                <p style={{ flex: 1, border: '1px gray solid', padding: '2px' }}>{skills[item]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='category' style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '10%', textAlign: 'center', borderRadius: '10px', backgroundColor: "gray", padding: '1%' }}>
                    <Link to='../pdf/RESUME.pdf'>View Resume</Link>
                </div>
            </section>
        </div>
    );
}

export default Resume;
