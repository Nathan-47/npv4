import { NavLink, Outlet } from "react-router-dom"; 
import { useState } from "react";
import logo from '../images/np_logo.png';


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <div className="root-layout">
        <header>
            <nav>
                <div className="navContainer">
                <div className="logo">
                <NavLink to ="/">
                <img className="crest" src= {logo} width="40px" height="40px" alt="NP" />
                </NavLink>
                </div>

                {/* once the burgerMenu icon/button is clicked then burger will open */}
                <div className="burgerMenu" 
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* When an NavLinks are clicked then the burger menu will be hidden */}
                <ul className={menuOpen ? "open" : ""}
                onClick={() => setMenuOpen(false)}
                >
                <li><NavLink to="blog" className="nav-line">Blog
                </NavLink></li>
                <li><NavLink to="projects" id="nav-line">Projects</NavLink></li>
                </ul>
                </div>
                </nav>
                </header>
                <main>
                     {/* allows for the nav to be outputted to the page */}
                    <Outlet />
                </main>
                </div>
    );
    
};
export default Navbar;