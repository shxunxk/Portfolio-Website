import WorkCard from '../Components/WorkCard/WorkCard.jsx'

export default function LatestWork() {
  return (
    <>
      <div className="Latest Work" style={{background: "linear-gradient(180deg, #111132, #0d0c1d4)"}}>
        <div className='projects'>
          <div className='completed'></div>
          <div className='pending'></div>
        </div>
        <WorkCard/>
      </div>
    </>
  )
}
