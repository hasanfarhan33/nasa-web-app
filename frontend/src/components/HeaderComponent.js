import { NavLink } from "react-router-dom";
import TelescopeLogo from "../assets/telescope-logo(yellow).png"; 
import { useState } from "react";

const HeaderComponent = () => {
    // Use one state for toggling the mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    // Toggle the menu visibility
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="bg-slate-800 px-6 py-2 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex gap-6">
                    <img src={TelescopeLogo} alt="Telescope Logo" className="w-12 h-12 mb-2"></img>
                    <NavLink to="/" className="font-bold text-3xl text-white">SpacePeek</NavLink>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:block">
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

                {/* Hamburger Menu (Mobile View) */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <nav className="md:hidden bg-slate-800 mt-4">
                    <ul className="flex flex-col items-end space-y-4">
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
            )}
        </header>
    );
};

export default HeaderComponent;
