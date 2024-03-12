import React from "react";
import './Section.scss'
import WorkCard from "./WorkCard/WorkCard";

export default function Section({title, projects}) {
  return (
    <div>
        <h1 style={{paddingBottom: '40px', textAlign:'center'}}>{title}</h1>
            {projects.map((item)=>{
              {console.log(item.name)}
              return(
                // eslint-disable-next-line react/jsx-key
                <div style={{paddingBottom: '20px'}}>
                    <WorkCard item={item}/>
                </div>
              )
})}
    </div>
  )
}
