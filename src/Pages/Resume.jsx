import './Resume.scss'
import { Link } from 'react-router-dom'

const Resume = ({getPage}) => {

    const details = {"Mobile":'7757027399', "Email":"ssnagvenkar@gmail.com", "Education":"Vellore Institute of Technology (2021-2025)"}
    const certification = {'One':"Details"}
    const cultural = {'One':"Details"}
    const skills = {'Programming Languages':'Python, C++, C, Java', "Web Development":"HTML, CSS, JavaScript, React JS, Next JS", "Database Management":"SQL - Postgres, MySQL NoSQL - MongoDB", "Frameworks":"AWS, Docker"}
    const internship = {'Remote Software Solutions':"Details"}

    getPage("My Resume")

    return(
        <div className="resume">
            <section className='category'>
                <h1 style={{textAlign: 'center'}}>SHAUNAK NAGVENKAR</h1>
                <p style={{textAlign: 'center'}}>Panaji, Goa</p>
            </section>
            <section className='category'>
                <h2 className='header'>Details</h2>
                {Object.keys(details).map((item)=>{
                    return(
                        <>
                            <p>{item}: {details[item]}</p>
                        </>
                    )
                })}
            </section>
            <section className='category'>
                <h2 className='header'>Cerifications</h2>
                {Object.keys(certification).map((item)=>{
                    return(
                        <>
                            <p>{item}: {certification[item]}</p>
                        </>
                    )
                })}
            </section>
            <section className='category'>
                <h2 className='header'>Cultuaral</h2>
                {Object.keys(cultural).map((item)=>{
                    return(
                        <>
                            <p>{item}: {cultural[item]}</p>
                        </>
                    )
                })}
            </section>
            <section className='category'>
                <h2 className='header'>Skills</h2>
                <div>
                    <div style={{display:'flex', flexDirection:'row', fontSize:'1rem'}}>
                        <p style={{width:'30%', border:'1px gray solid', padding:'2px'}}>Skill</p>
                        <p style={{flex:1, border:'1px gray solid', padding:'2px'}}>Technologies</p>
                    </div>
                <div>
                {Object.keys(skills).map((item, index)=>{
                    return(
                        <div key={index} style={{display:'flex', flexDirection:'row'}}>
                            <p key={index} style={{width:'30%', border:'1px gray solid', padding:'2px'}}>{item}</p>
                            <p key={index} style={{flex:1, border:'1px gray solid', padding:'2px'}}>{skills[item]}</p>
                        </div>      
                    )
                })}
                </div>
                </div>
            </section>
            <section className='category'>
                <h2 className='header'>Internship</h2>
                {Object.keys(internship).map((item)=>{
                    return(
                        <>
                            <p>{item}: {internship[item]}</p>
                        </>
                    )
                })}
            </section>
            <section className='category' style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:'10%', textAlign:'center', borderRadius:'10px', backgroundColor:"gray", padding:'1%'}}><Link to='../pdf/RESUME.pdf'>View Resume</Link></div>
            </section>
        </div>
    )
}

export default Resume