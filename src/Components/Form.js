import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
        {/* <button className="btn">Send a Message</button> */}
         <form className="form" id="show">
            <input type="text" placeholder="Enter Your Name"/>
            <input type="email" placeholder="Enter Your Email"/>
            <input type="text" placeholder="Enter Your Subject"/>
            <textarea placeholder="Enter Your Message"></textarea>
           </form>
        </>
    )
}

export default Footer;