import { Link } from "react-router-dom";

function Footer(){
    return(
           <div className="footer">
            <h1>An-nur</h1>
            <p>© 2025 An-nur Islamic Academy. All Rights Reserved. | <Link className="link" to="#">Privacy Policy </Link> | <Link className="link" to="/TermsCon">Terms of Use </Link></p>
        </div>
    )
}

export default Footer;