import '../index.css'
import Navbar from '../components/Navbar'
// import MobileNavbar from '../components/MobileNavbar'
import Header from '../components/Header'


const Home = () =>
{
    return(
        <>
        <body className='bg-black text-white font-bold'>
            <Navbar/>
        {/* <MobileNavbar/> */}
            <Header/> 
            {/* <h1>My Portfolio</h1>
            <span>Codage en direct</span> */}
            <footer>
                
            </footer>
        </body>
        
        </>
    )
}

export default Home;