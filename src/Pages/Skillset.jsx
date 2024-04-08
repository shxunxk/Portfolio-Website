import './Skillset.scss'
import WorkCard from '../Components/WorkCard/WorkCard'
import Navbar from '../Components/Navbar/Navbar'

const projects = [{name:'name', img:'github.png'},{name:'nam1e', img:'github.png'}]

export default function LatestWork() {
  return (
    <>
      <div className="skillset">
        <div>
          <Navbar/>
        <section className='skill'>
          <h1 className='header' style={{textAlign: 'center'}}>Projects</h1>
          <div className='main'>
            {projects.map((item)=>(
                  // eslint-disable-next-line react/jsx-key
                  <div style={{paddingBottom: '20px'}}>
                      <WorkCard name={item.name}/>
                  </div>
              ))}
          </div>
        </section>
        <section className='skill'>
          <h1 className='header' style={{textAlign: 'center'}}>Projects</h1>
          <div className='main'>
            {projects.map((item)=>(
                  // eslint-disable-next-line react/jsx-key
                  <div style={{paddingBottom: '20px'}}>
                      <WorkCard name={item.name}/>
                  </div>
              ))}
          </div>
        </section>
        <section className='skill'>
          <h1 className='header' style={{textAlign: 'center'}}>Projects</h1>
          <div className='main'>
            {projects.map((item)=>(
                  // eslint-disable-next-line react/jsx-key
                  <div style={{paddingBottom: '20px'}}>
                      <WorkCard name={item.name}/>
                  </div>
              ))}
          </div>
        </section>
        </div>
      </div>
    </>
  )
}
