import Hero from '../Components/Hero/Hero'

const Home = ({getPage})=>{
    return(
    <>
<div id='Homepage' style={{color:'black', minHeight: '100vh', display: "flex", flexDirection: 'column', width: '100%'}}> 
        <Hero getPage={getPage}/>
    </div>
    </>
    )
};

export default Home;