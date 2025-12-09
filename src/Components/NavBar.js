import React from "react";
import logo from "../Components/Assets/logo.jpg";
import { Link } from "react-router-dom";


function NavBar(){
    return(
           <nav> 
            <div className="logo">
            <img src={logo} alt="Logo" className="nav-logo" />
            <h4>An-nur <br />Islamic School</h4>
        </div>

             <ul className="nav-links">
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="#About">About</Link></li>
                <li><Link className="link" to="#Updates">Updates</Link></li>
                <li><Link className="link" to="#Testimonies">Testimonials</Link></li>
                <li><Link className="link" to="#Contact">Contact</Link></li>

                 <div className="dropdown">
                    <li><a href="#">More</a></li>
                    <div className="dropdown-content">
                      <li><Link className="link" to="/Admission">Admission</Link></li>
                      <li><Link className="link" to="#">Results</Link></li>
                    </div>
                 </div>
            </ul>
        </nav>
    )
}

export default NavBar;