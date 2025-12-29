import image2 from "../Components/Assets/image2.jpg";
import image8 from "../Components/Assets/image8.jpg";
import image11 from "../Components/Assets/image11.jpg";
import image11 from "../Components/Assets/image12.jpg";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
function Gallery(){
    return(
        <>
        <NavBar />
        <div className="gallery">
            <div className="gallery-col">
            <img src={image12} alt="Students" className="std" />
            <img src={image8} alt="Students" className="std" />
            <img src={image11} alt="Students" className="std" />
            </div>
             <div className="gallery-col">
            <img src={image2} alt="Students" className="std" />
            <img src={image8} alt="Students" className="std" />
            <img src={image11} alt="Students" className="std" />
            </div>
             <div className="gallery-col">
            <img src={image2} alt="Students" className="std" />
            <img src={image8} alt="Students" className="std" />
            <img src={image11} alt="Students" className="std" />
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Gallery;