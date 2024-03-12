import Hero from '../Components/Hero/Hero'
import Navbar from '../Components/Navbar/Navbar';

const Home = ()=>{
    return(
    <>
    <div id='Homepage' style={{backgroundImage: 'linear-gradient(180deg, #36059f, #111132)', minHeight: '100vh', display: "flex", flexDirection: 'column'}}> 
        <Navbar title={'Shaunak Nagvenkar'}/>
        <Hero/>
    </div>
    </>
    )
};

export default Home;