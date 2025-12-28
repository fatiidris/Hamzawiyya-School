import React, { useState } from "react";
import logo from "../Components/Assets/logo.jpeg";
import { Link } from "react-router-dom";


function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const showMenu = () => setIsMenuOpen(true);
    const hideMenu = () => setIsMenuOpen(false);

    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Logo" className="nav-logo" />
                <h4>Hamzawiyya <br />Islamic School, Minna</h4>
            </div>

            <ul className="nav-links" id="checkmenu" style={{ right: isMenuOpen ? "0" : "-500px" }}>
                <i className="fa fa-times" onClick={hideMenu}></i>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/#About">About</Link></li>
                <li><Link className="link" to="/#Updates">Updates</Link></li>
                <li><Link className="link" to="/#Testimonies">Testimonials</Link></li>
                <li><Link className="link" to="/#Contact">Contact</Link></li>

                <div className="dropdown">
                    <li><a href="#">More</a></li>
                    <div className="dropdown-content">
                        <li><Link className="link" to="/Admission">Admission</Link></li>
                        {/* <li><Link className="link" to="#">Results</Link></li> */}
                    </div>
                </div>
                <li><Link className="link" to="https://eportal.cyfamod.com/v10/dashboard" onClick={hideMenu}>Login</Link></li>
            </ul>
            <i className="fa fa-bars hamburger" onClick={showMenu}></i>
        </nav>
    );
}

export default NavBar;