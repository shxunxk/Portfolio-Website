import Hero from '../Components/Hero/Hero'
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';

const Home = ()=>{
    return(
    <>
    <section id='Homepage'> 
        <Navbar/>
        <Hero/>
    </section>
    <Sidebar/>
    </>
    )
};

export default Home;