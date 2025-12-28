import { Link } from "react-router-dom";

function Footer(){
    return(
           <div className="footer">
            <h1>Hamzawiyya</h1>
            <p>© 2025 Hamzawiyya Islamic School Minna, Niger State. All Rights Reserved. | <Link className="link" to="#">Privacy Policy </Link> | <Link className="link" to="/TermsCon">Terms of Use </Link></p>
        </div>
    )
}

export default Footer;