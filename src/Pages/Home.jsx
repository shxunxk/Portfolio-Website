import Hero from '../Components/Hero/Hero'
import Navbar from '../Components/Navbar/Navbar';

const Home = ()=>{
    return(
    <>
<div id='Homepage' style={{/*backgroundImage: 'linear-gradient(180deg, #36059f, #111132)'*/ color:'black', minHeight: '100vh', display: "flex", flexDirection: 'column'}}> 
        <Navbar title={'Portfolio Website'}/>
        <Hero/>
    </div>
    </>
    )
};

export default Home;