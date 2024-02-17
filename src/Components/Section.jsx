import React from "react";
import './Section.scss'
import WorkCard from "./WorkCard/WorkCard";

const projects = [{name:'name', img:'github.png'},{name:'nam1e', img:'github.png'}]

export default function Section({title}) {
  return (
    <div>
        <h1 style={{paddingBottom: '40px', textAlign:'center'}}>{title}</h1>
        {projects.map((item)=>(
            // console.log(item)
            // eslint-disable-next-line react/jsx-key
            <WorkCard name={item.name}/>
        ))}
    </div>
  )
}
