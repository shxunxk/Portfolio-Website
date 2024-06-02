import './LatestWork.scss'
import Section from '../Components/Section.jsx'
import Bottom from '../Components/Bottom/Bottom.jsx'

export default function LatestWork() {

  const completed = [{name:'Kalaburagi Airport Website', "img":'Kalaburagi.png', "desc": 'Within this project, I collaborated as a team member to contribute to the development of the Frontend for a Management Information System. This system is specifically designed to support airport employees in their day-to-day tasks. My responsibilities included crafting an intuitive user interface, integrating design components, and implementing features aimed at improving the overall user experience for airport staff interacting with the MIS.'},]
  const pending = [{name:'Barbara - AI Virtual Assistant', img:'github.png', "desc": 'As part of my project, I am developing a clever artificial intelligence virtual assistant that can understand voice instructions from people and provide a general response.'}, 
  {name:'Restaurant Managemenet System', img:'github.png', "desc": 'As part of this project, I am creating a Web Application interface for a restaurant to streamline its administration procedures as well as a database to hold the data.'}, 
  {name:'AgroHealth - Potato Defect Detector', img:'github.png', "desc": 'In the project that follows, I am working on a machine learning and deep learning model to assess the health of potatoes in a field and decide whether they are normal and safe to eat.'},
  {name:'Sonora - Music Streaming Application', img:'github.png', "desc": 'With an emphasis on creating a superior UI and UX, the ensuing project is a mobile application that mimics other global music streaming apps.'}]
  const completedIntern = [{name:'Remote Software Solution', "img":'RSS.webp', "role": 'Data Analyst', "desc": 'Worked as a Data Analyst at the firm and learnt real time implementation of SQL and Power BI in the field of Database Engineering and Data Analytics.'},]


  return (
    <>
      <div className="Latest-Work" style={{backgroundColor:'white', display: 'flex', flexDirection: 'column'}}>
        <div className='projects'>
          <h1 className='header' style={{textAlign: 'center', fontSize: '40px', paddingBottom:'10%'}}>Internships</h1>
            <div className='main'>
              <div id='completed'className='section'>
                <Section title = 'Completed' projects = {completedIntern}/>
              </div>
            </div>        
            </div>
        <div className='projects'>
          <h1 className='header' style={{textAlign: 'center', fontSize: '40px', paddingBottom:'10%'}}>Projects</h1>
          <div className='main'>
            <div id='completed'className='section'>
              <Section title = 'Completed' projects = {completed}/>
            </div>
            <div id='pending' className='section'>
              <Section title = 'Pending' projects = {pending}/>
            </div>
          </div>
          <p style={{textAlign:'center'}}>The projects with github image as their profile are in development phase.</p>
        </div>
      </div>
    </>
  )
}
