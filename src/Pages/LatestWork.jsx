import './LatestWork.scss'
import Section from '../Components/Section.jsx'

export default function LatestWork() {
  return (
    <>
      <div className="Latest-Work" style={{background: "linear-gradient(180deg, #111132, #0d0c1d4)"}}>
        <div className='projects'>
          <h1 className='header' style={{textAlign: 'center'}}>Projects</h1>
          <div className='main'>
            <div id='completed'className='section'>
              <Section title = 'Completed'/>
            </div>
            <div className='vertical-line'></div>
            <div id='pending' className='section'>
              <Section title = 'Pending'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
