import './LatestWork.scss'
import Section from '../Components/Section.jsx'
import Navbar from '../Components/Navbar/Navbar.jsx'
export default function LatestWork() {

  const completed = [{name:'Kalaburagi Airport Werbsite', "img":'github.png', "desc": 'Within this project, I collaborated as a team member to contribute to the development of the Frontend for a Management Information System. This system is specifically designed to support airport employees in their day-to-day tasks. My responsibilities included crafting an intuitive user interface, integrating design components, and implementing features aimed at improving the overall user experience for airport staff interacting with the MIS.'},]
  const pending = [{name:'Barbara - AI Virtual Assistant', img:'github.png', "desc": 'Within this project, I collaborated as a team member to contribute to the development of the Frontend for a Management Information System. This system is specifically designed to support airport employees in their day-to-day tasks. My responsibilities included crafting an intuitive user interface, integrating design components, and implementing features aimed at improving the overall user experience for airport staff interacting with the MIS.'}, 
  {name:'Restaurant Managemenet System', img:'github.png', "desc": 'Within this project, I collaborated as a team member to contribute to the development of the Frontend for a Management Information System. This system is specifically designed to support airport employees in their day-to-day tasks. My responsibilities included crafting an intuitive user interface, integrating design components, and implementing features aimed at improving the overall user experience for airport staff interacting with the MIS.'}, 
  {name:'AgroHealth - Potato Defect Detector', img:'github.png', "desc": 'Within this project, I collaborated as a team member to contribute to the development of the Frontend for a Management Information System. This system is specifically designed to support airport employees in their day-to-day tasks. My responsibilities included crafting an intuitive user interface, integrating design components, and implementing features aimed at improving the overall user experience for airport staff interacting with the MIS.'},
  {name:'Sonora - Music Streaming Application', img:'github.png', "desc": 'Within this project, I collaborated as a team member to contribute to the development of the Frontend for a Management Information System. This system is specifically designed to support airport employees in their day-to-day tasks. My responsibilities included crafting an intuitive user interface, integrating design components, and implementing features aimed at improving the overall user experience for airport staff interacting with the MIS.'}]

  return (
    <>
      <div className="Latest-Work" style={{backgroundImage: 'linear-gradient(180deg, #36059f, #111132)', display: 'flex', flexDirection: 'column'}}>
      <Navbar title={'Latest Work'}/>
        <div className='projects'>
          <h1 className='header' style={{textAlign: 'center'}}>Projects</h1>
          <div className='main'>
            <div id='completed'className='section'>
              <Section title = 'Completed' projects = {completed}/>
            </div>
            <div className='vertical-line'></div>
            <div id='pending' className='section'>
              <Section title = 'Pending' projects = {pending}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
