import WorkCard from "./WorkCard/WorkCard";

export default function Section({title, projects}) {
  return (
    <div>
        <h1 style={{textAlign:'center', fontSize:'30px'}}>{title}</h1>
        <div style={{display: "grid",gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",justifyContent:'center'}}>
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
