import './LatestWork.scss'
import Section from '../Components/Section.jsx'

export default function LatestWork({getPage}) {
  getPage('Work Experience and Projects')
  const completed = [{name:'Kalaburagi Airport Website', img:'KalaburagiAirport.png'},]
  const pending = [{name:'Barbara - AI Virtual Assistant', img:'github.png'}, 
  {name:'One Food Nation - Restaurant Managemenet System', img:'OFN.png'}, 
  {name:'AgroHealth - Potato Defect Detector', img:'AgroHealth.png'},
  // {name:'Sonora - Music Streaming Application', img:'github.png'}
]
  const completedIntern = [{name:'Remote Software Solution', img:'RSS.webp', role: 'Data Analyst'},]
  const cultural = [{name:'VIT Alumni Association (VITAA)', img:'https://vaave.s3.amazonaws.com/assets/site_content/151534243/logo-cms.png', role: 'Volunteer'},{name:'QwikSkills', img:'https://vaave.s3.amazonaws.com/assets/site_content/151534243/logo-cms.png', role: 'Campus Amabssador'},{name:'Braniac - IMPERIUM ’22 - An International Management Extravaganza', img:'https://vaave.s3.amazonaws.com/assets/site_content/151534243/logo-cms.png', role: '3rd Position'},]


  return (
    <>
      <div className="Latest-Work" style={{backgroundColor:'white', display: 'flex', flexDirection: 'column', }}>
        <div className='projects'>
          <h2 className='header' style={{textAlign: 'center', font:'bold'}}>Internships</h2>
            <div className='main'>
              <div id='completed'className='section'>
                <Section projects = {completedIntern}/>
              </div>
            </div>        
            </div>
        <div className='projects'>
          <h2 className='header' style={{textAlign: 'center', font:'bold'}}>Projects</h2>
          <div className='main'>
            <div id='completed'className='section'>
              <Section title = 'Completed' projects = {completed}/>
            </div>
            <div id='pending' className='section'>
              <Section title = 'Pending' projects = {pending}/>
            </div>
          </div>
        </div>
        <div className='projects'>
          <h2 className='header' style={{textAlign: 'center', font:'bold'}}>Cultural Activities</h2>
          <div className='main'>
            <div id='completed'className='section'>
              <Section projects = {cultural}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}