import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import image10 from "../Components/Assets/image10.jpg";

function Admission(){
return (
    <>
    <NavBar />
    <div className="sec-bg">
           <h1>Admission on Progress</h1>
    </div>

    <div className="admission-col">
    <div className="admission-row">
    <h2>We are one of the top exellent schools</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor ipsum dolor sit
    amet, consectetur adipiscing elit, sed do eiusmod tempor 
    ipsum dolor sit amet, consectetur adipiscing elit, sed do 
    eiusmod tempor</p>
    <button className="btn">Explore Now!!!</button>
    </div>
    <div className="admission-row">
        <img src={image10} />
    </div>
    </div>
    <Footer />
    </>
)
}

export default Admission;