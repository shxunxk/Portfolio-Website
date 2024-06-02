import { useParams } from "react-router-dom";

const WorkDetail = () => {

    const { item } = useParams();
    let a =JSON.parse(decodeURIComponent(item));
    console.log(a['name'])

    return (
        <div className="head" style={{backgroundColor:'white', minHeight: '100vh', padding: '10%'}}>
            <div style={{paddingBottom: '10%'}}>
                <h1 className="header" style={{textAlign: 'center'}}>{a.name}</h1>
                <h3 className="sub-header" style={{textAlign: 'center'}}>{a.role}</h3>
            </div>
            <p>{a.desc}</p>
            <img src={a.img}/>
        </div>
    );
};

export default WorkDetail;