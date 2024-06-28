import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const WorkDetail = () => {

    const details = [{name:'Kalaburagi Airport Website', "img":'Kalaburagi.png', "desc": 'Within this project, I collaborated as a team member to contribute to the development of the Frontend for a Management Information System. This system is specifically designed to support airport employees in their day-to-day tasks. My responsibilities included crafting an intuitive user interface, integrating design components, and implementing features aimed at improving the overall user experience for airport staff interacting with the MIS.'},{name:'Barbara - AI Virtual Assistant', img:'github.png', "desc": 'As part of my project, I am developing a clever artificial intelligence virtual assistant that can understand voice instructions from people and provide a general response.'}, 
    {name:'Restaurant Managemenet System', img:'github.png', "desc": 'As part of this project, I am creating a Web Application interface for a restaurant to streamline its administration procedures as well as a database to hold the data.'}, 
    {name:'AgroHealth - Potato Defect Detector', img:'github.png', "desc": 'In the project that follows, I am working on a machine learning and deep learning model to assess the health of potatoes in a field and decide whether they are normal and safe to eat.'},
    {name:'Sonora - Music Streaming Application', img:'github.png', "desc": 'With an emphasis on creating a superior UI and UX, the ensuing project is a mobile application that mimics other global music streaming apps.'}, {name:'Remote Software Solution', img:'RSS.webp', "role": 'Data Analyst', "desc": 'Worked as a Data Analyst at the firm and learnt real time implementation of SQL and Power BI in the field of Database Engineering and Data Analytics.'},
    {name:'VIT Alumni Association (VITAA)', img:'github.png', "desc": 'With an emphasis on creating a superior UI and UX, the ensuing project is a mobile application that mimics other global music streaming apps.'}, {name:'Remote Software Solution', img:'RSS.webp', "role": 'Data Analyst', "desc": 'Worked as a Data Analyst at the firm and learnt real time implementation of SQL and Power BI in the field of Database Engineering and Data Analytics.'},
    {name:'VIT Alumni Association (VITAA)', img:'github.png', "desc": 'With an emphasis on creating a superior UI and UX, the ensuing project is a mobile application that mimics other global music streaming apps.'}, {name:'Remote Software Solution', img:'RSS.webp', "role": 'Data Analyst', "desc": 'Worked as a Data Analyst at the firm and learnt real time implementation of SQL and Power BI in the field of Database Engineering and Data Analytics.'},
    {name:'VIT Alumni Association (VITAA)', img:'github.png', "desc": 'With an emphasis on creating a superior UI and UX, the ensuing project is a mobile application that mimics other global music streaming apps.'}, {name:'Remote Software Solution', img:'RSS.webp', "role": 'Data Analyst', "desc": 'Worked as a Data Analyst at the firm and learnt real time implementation of SQL and Power BI in the field of Database Engineering and Data Analytics.'}]

    const { item } = useParams();

    const [curDet, setCurDet] = useState(null)

    useEffect(()=>{
        details.map((it)=>{
            if(it.name == item){
                setCurDet(it)
            }
        })
    },[item])

    console.log(curDet?.img)
    return (
        <div className="head" style={{backgroundColor:'white', minHeight: '100vh', textAlign:'center', padding: '10%'}}>
            <div style={{paddingBottom: '10%'}}>
                <h1 className="header" style={{textAlign: 'center'}}>{curDet?.name}</h1>
                <h3 className="sub-header" style={{textAlign: 'center'}}>{curDet?.role}</h3>
            </div>
            <p>{curDet?.desc}</p>
            {/* <img src={curDet?.img}/> */}
        </div>
    );
}; 

export default WorkDetail;