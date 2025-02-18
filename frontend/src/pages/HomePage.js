import ApodComponent from "../components/ApodComponent";
import { NavLink } from "react-router-dom";
import EarthLogo from '../assets/earth-logo.png'; 
import MarsLogo from '../assets/mars-logo.png'; 
import MoonLogo from '../assets/moon-logo.png'; 
import AsteroidLogo from '../assets/asteroid-logo.png'; 

const HomePage = () => {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-200 to-slate-300 text-slate-800 p-6">
            <h1 className="text-4xl font-bold text-center text-slate-800 mb-8">SpacePeek: Get Useful Info About Space!</h1>
            <ApodComponent />
            <section className="mt-10 text-center">
                <h2 className="text-3xl font-bold mb-6 underline">Explore</h2>
                <ul className="flex flex-wrap justify-center gap-20 font-bold text-xl">
                    <li>
                        <NavLink 
                            to="/earth" 
                            className="relative text-gray-800 transition duration-300 ease-in-out hover:text-blue-600 hover:scale-105 hover:underline underline-offset-4"
                        >
                            <img src={EarthLogo} alt="Earth" className="w-24 h-24 mb-2"></img>

                            Earth
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/mars" 
                            className="relative text-gray-800 transition duration-300 ease-in-out hover:text-red-500 hover:scale-105 hover:underline underline-offset-4"
                        >
                            <img src={MarsLogo} alt="Mars" className="w-24 h-24 mb-2"></img>
                            Mars
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/moon" 
                            className="relative text-gray-800 transition duration-300 ease-in-out hover:text-gray-500 hover:scale-105 hover:underline underline-offset-4"
                        >
                            <img src={MoonLogo} alt="Moon" className="w-24 h-24 mb-2"></img>

                            Moon
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/asteroids" 
                            className="relative text-gray-800 transition duration-300 ease-in-out hover:text-yellow-500 hover:scale-105 hover:underline underline-offset-4"
                        >
                            <img src={AsteroidLogo} alt="Asteroid" className="w-24 h-24 mb-2"></img>
                            Asteroids
                        </NavLink>
                    </li>
                </ul>
            </section>
        </main>
    ); 
}

export default HomePage;