import { NavLink } from "react-router-dom";
import TelescopeLogo from "../assets/telescope-logo(yellow).png"; 

const HeaderComponent = () => {
    return (
        <header className="bg-slate-800 px-6 py-2 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex gap-6">
                    <img src={TelescopeLogo} alt="Telescope Logo" className="w-12 h-12 mb-2"></img>
                    <h1 className="font-bold text-3xl text-white">SpacePeek</h1>
                </div>

                {/* Navigation Links */}
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => 
                                    `text-white text-lg hover:text-yellow-400 transition ${
                                        isActive ? "border-b-2 border-yellow-400" : ""
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/mars" 
                                className={({ isActive }) => 
                                    `text-white text-lg hover:text-yellow-400 transition ${
                                        isActive ? "border-b-2 border-yellow-400" : ""
                                    }`
                                }
                            >
                                Mars
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/moon" 
                                className={({ isActive }) => 
                                    `text-white text-lg hover:text-yellow-400 transition ${
                                        isActive ? "border-b-2 border-yellow-400" : ""
                                    }`
                                }
                            >
                                Moon
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/asteroids" 
                                className={({ isActive }) => 
                                    `text-white text-lg hover:text-yellow-400 transition ${
                                        isActive ? "border-b-2 border-yellow-400" : ""
                                    }`
                                }
                            >
                                Asteroids
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default HeaderComponent; 