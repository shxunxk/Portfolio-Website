import WorkCard from "./WorkCard/WorkCard";

export default function Section({title, projects}) {
  return (
    <div style={{padding:'3%'}}>
        {title && <h4 style={{paddingBottom:'2%'}}>{title}</h4>}
        <div style={{display: "grid",gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",justifyContent:'center'}}>
        {projects.map((item, index)=>{
              return(
                <div key={index} style={{width: '100%'}}>
                    <WorkCard item={item}/>
                </div>
              )
        })}
        </div>
            
    </div>
  )
}
