import './Section.scss'
import WorkCard from "./WorkCard/WorkCard";

export default function Section({title, projects}) {
  return (
    <div>
        <h1 style={{paddingBottom: '40px', textAlign:'center'}}>{title}</h1>
            {projects.map((item, index)=>{
              return(
                // eslint-disable-next-line react/jsx-key
                <div key={index} style={{paddingBottom: '20px'}}>
                    <WorkCard item={item}/>
                </div>
              )
})}
    </div>
  )
}
