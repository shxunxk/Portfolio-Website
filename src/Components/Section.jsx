import './Section.scss'
import WorkCard from "./WorkCard/WorkCard";

export default function Section({title, projects}) {
  return (
    <div>
        <h1 style={{paddingBottom: '20px', textAlign:'center', fontSize:'30px'}}>{title}</h1>
            {projects.map((item, index)=>{
              return(
                // eslint-disable-next-line react/jsx-key
                <div key={index} style={{paddingBottom: '20px', width: '100%'}}>
                    <WorkCard item={item}/>
                </div>
              )
})}
    </div>
  )
}
