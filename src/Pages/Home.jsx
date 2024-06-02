import Hero from '../Components/Hero/Hero'
import Navbar from '../Components/Navbar/Navbar';

const Home = ()=>{
    return(
    <>
<div id='Homepage' style={{color:'black', minHeight: '100vh', display: "flex", flexDirection: 'column', width: '100%', backgroundColor: 'white'}}> 
        <Hero/>
    </div>
    </>
    )
};

export default Home;