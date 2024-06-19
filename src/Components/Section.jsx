import WorkCard from "./WorkCard/WorkCard";

export default function Section({title, projects}) {
  return (
    <div style={{padding:'5%'}}>
        {title && <h1 style={{fontSize:'25px', paddingBottom:'5%'}}>{title}</h1>}
        <div style={{display: "grid",gridTemplateColumns: "repeat(5, 1fr)",
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
