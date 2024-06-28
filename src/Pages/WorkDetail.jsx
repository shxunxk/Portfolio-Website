import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'

const WorkDetail = () => {

    const details = [{name:'Kalaburagi Airport Website', "img":['Kalaburagi.png'], "role": 'Frontend Developer', "desc": "Within this project, I collaborated as a team member to contribute to the development of the Frontend for a Management Information System (MIS) tailored for Kalaburagi Airport. This system was meticulously designed to support airport employees in their daily operational tasks, ensuring a seamless workflow. My primary responsibilities encompassed crafting an intuitive user interface that would enhance user engagement and streamline processes. I integrated various design components to create a cohesive and user-friendly experience. Additionally, I implemented several features aimed at improving the overall user interaction with the MIS. The project involved rigorous testing and iterative development to ensure that the final product met the specific needs of airport staff. This experience not only honed my frontend development skills but also provided valuable insights into the intricacies of designing software for specialized industry use."}, 
    {name:'One Food Nation - Restaurant Managemenet System', "img":[''], "desc": "In this project, I am developing a comprehensive web application interface for a restaurant, designed to streamline its administrative procedures and improve overall operational efficiency. The system includes a robust database to store and manage restaurant data, such as menu items, orders, reservations, and customer information. My role involves creating an intuitive user interface that allows restaurant staff to easily navigate and manage daily tasks. I am implementing features like real-time order tracking, inventory management, and customer feedback integration. This project aims to enhance the dining experience by providing staff with the tools they need to offer prompt and accurate service. Additionally, the system is designed to generate insightful reports to assist in decision-making processes. Through this project, I am gaining valuable experience in web development, database management, and the hospitality industry’s specific requirements."}, 
    {name:'AgroHealth - Potato Defect Detector', "img":[''], "desc": "In the AgroHealth project, I am working on developing a machine learning and deep learning model specifically designed to assess the health of potatoes in agricultural fields. The goal of this project is to create a reliable system that can detect defects and determine whether the potatoes are safe for consumption. My responsibilities include gathering and preprocessing a large dataset of potato images, training the model to recognize various defects, and optimizing the algorithm for accuracy and efficiency. This project involves extensive research into the latest advancements in machine learning and image recognition technologies. By applying these techniques, I aim to provide farmers with a powerful tool to monitor crop health and improve yield quality. This project has given me hands-on experience with AI, deep learning, and the practical applications of these technologies in agriculture."},
    {name:'Remote Software Solution', "img":[''], "role": 'Data Analyst', "desc": "During my tenure as a Data Analyst at Remote Software Solution, I gained significant experience in the real-time application of SQL and Power BI in the fields of Database Engineering and Data Analytics. My role involved analyzing complex datasets to extract actionable insights and presenting these findings through interactive and visually appealing dashboards. I worked on optimizing database queries and developing data models to support business intelligence activities. This experience allowed me to understand the critical role of data in decision-making processes and the importance of accurate data representation. Additionally, I collaborated with various teams to ensure data integrity and consistency across the organization. The internship provided me with a deep understanding of data analysis tools and techniques, enhancing my skills in data manipulation, visualization, and reporting.", "pdf":"INTERNSHIP.pdf"},
    {name:'VIT Alumni Association (VITAA)', "img":['github.png'], "desc":"The VIT Alumni Association (VITAA) project focuses on enhancing networking and engagement among VIT's past students through organizing get-togethers and other events. I played a key role in organizing these events, ensuring effective communication and coordination among alumni members. My responsibilities included planning event logistics, managing registrations, and promoting the events through various channels to maximize participation. Additionally, I worked on developing and maintaining a platform that facilitates seamless interaction and networking among alumni, helping to strengthen the community and foster lasting connections. This project has provided me with valuable experience in event management, community building, and digital platform development, aiming to create a vibrant and supportive alumni network."},
    {name:'Barbara - AI Virtual Assistant', "img":[''], "desc":"As part of my project, I am developing an innovative artificial intelligence virtual assistant named Barbara. This AI is designed to understand and process voice instructions from users, providing intelligent and relevant responses. The primary goal of Barbara is to streamline user interaction with technology by offering a more natural and intuitive way to access information and perform tasks. Throughout the development process, I have focused on incorporating advanced natural language processing techniques and machine learning algorithms to enhance Barbara’s comprehension and response accuracy. This project has provided me with extensive experience in AI development, voice recognition technology, and user interface design, aiming to create a virtual assistant that can adapt to various user needs and scenarios, ultimately improving efficiency and user satisfaction."},
    {name:'Braniac - IMPERIUM ’22 - An International Management Extravaganza', "role": '3rd Position', "img":[], "desc": "Braniac is a prestigious quiz competition organized by Loyola College Chennai as part of the IMPERIUM ’22 International Management Extravaganza. I participated in this highly competitive event and secured the 3rd place, showcasing my knowledge and quick thinking across various topics. The competition was designed to challenge participants with a wide range of questions, testing their expertise in management and general knowledge. My success in this competition not only highlighted my proficiency in these areas but also demonstrated my ability to perform under pressure. This experience provided me with the opportunity to network with other talented individuals and furthered my understanding of effective preparation and strategy in competitive environments. Participating in Braniac was a rewarding experience that enhanced my skills in critical thinking, problem-solving, and teamwork."},
    {name:'QwikSkills', "role": 'Campus Ambassador', "img":[], "desc": "As a Campus Ambassador for QwikSkills, I had the unique opportunity to bridge the gap between students and the professional development resources offered by the platform. QwikSkills focuses on enhancing the practical skills of students through various courses, workshops, and training programs. My role involved promoting these resources on campus, organizing events to raise awareness about the importance of skill development, and encouraging fellow students to take advantage of the learning opportunities available. I also provided feedback to the QwikSkills team based on student experiences, helping to improve the quality and relevance of their offerings. This position allowed me to develop my leadership and communication skills while contributing to the professional growth of my peers. By fostering a culture of continuous learning and skill enhancement, I aimed to prepare students for successful careers in their chosen fields."}
    ]

    const { item } = useParams();

    const [curDet, setCurDet] = useState(null)

    useEffect(()=>{
        details.map((it)=>{
            if(it.name == item){
                setCurDet(it)
            }
        })
    },[item])

    console.log(curDet?.pdf)
    return (
        <div className="head" style={{backgroundColor:'white', minHeight: '100vh', textAlign:'center', padding: '10%'}}>
            <div style={{paddingBottom: '10%'}}>
                <h1 className="header" style={{textAlign: 'center'}}>{curDet?.name}</h1>
                <h3 className="sub-header" style={{textAlign: 'center'}}>{curDet?.role}</h3>
            </div>
            <p style={{paddingBottom:'10%'}}>{curDet?.desc}</p>
            {/* <img src={curDet?.img}/> */}
            {curDet && (
                    <div style={{textAlign: 'center', display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <p style={{ width: '10%', backgroundColor: "gray", borderRadius: '10px', padding: '1%' }}>
                            <Link to={`/pdf/${curDet.pdf}`}>View Certificate</Link>
                        </p>
                    </div>
            )}        </div>
    );
}; 

export default WorkDetail;