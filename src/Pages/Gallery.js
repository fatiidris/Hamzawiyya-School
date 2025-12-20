import image2 from "../Components/Assets/image2.jpg";
import image8 from "../Components/Assets/image8.jpg";
import image11 from "../Components/Assets/image11.jpg";
function Gallery(){
    return(
        <div className="sections">
            <h1>Gallery</h1>
            <div className="gallery">
            <img src={image2} alt="Students" className="std" />
            <img src={image8} alt="Students" className="std" />
            <img src={image11} alt="Students" className="std" />
            </div>
             <div className="gallery">
            <img src={image2} alt="Students" className="std" />
            <img src={image8} alt="Students" className="std" />
            <img src={image11} alt="Students" className="std" />
            </div>
             <div className="gallery">
            <img src={image2} alt="Students" className="std" />
            <img src={image8} alt="Students" className="std" />
            <img src={image11} alt="Students" className="std" />
            </div>
        </div>
    )
}

export default Gallery;