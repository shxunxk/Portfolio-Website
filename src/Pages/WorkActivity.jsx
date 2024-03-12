import './LatestWork.scss'
import WorkCard from '../Components/WorkCard/WorkCard'

const projects = [{name:'name', img:'github.png'},{name:'nam1e', img:'github.png'}]

export default function LatestWork() {
  return (
    <>
      <div className="Latest-Work" >
        <div className='projects'>
          <h1 className='header' style={{textAlign: 'center'}}>Projects</h1>
          <div className='main'>
            {projects.map((item)=>(
                  // eslint-disable-next-line react/jsx-key
                  <div style={{paddingBottom: '20px'}}>
                      <WorkCard name={item.name}/>
                  </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
