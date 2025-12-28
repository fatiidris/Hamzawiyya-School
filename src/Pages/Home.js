import NavBar from "../Components/NavBar";
import image2 from "../Components/Assets/image2.jpg";
import image8 from "../Components/Assets/image8.jpg";
import image11 from "../Components/Assets/image11.jpg";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Home() {
return(
    <>
    <NavBar />

    <div className="hero-img" id="Home">
        <div className="hero-text">
            <h1>Hamzawiyya Islamic School, Minna</h1>
            <p>From a strong foundation in Nursery education to advanced academic preparation at the Secondary level, we foster a lifelong passion for learning and equip students 
                with the knowledge and skills required for global success.</p>
            <Link className="link" to="/Admission"><button className="btn">Begin Your Children's Journey</button></Link>
        </div>
     </div>


     <div className="sections" id="About">
        <h1>Our Core Values</h1>
        <p>With faith in Allah, we stand strong,
We learn and strive all day long. <br />Respect and humility guide our way,
With modesty and self-control every day.  <br />We serve our community, near and far,
We are An-Nur—shining like a star </p>
            <div className="sections-col">
        <div className="sections-row">
             <i className="fa-solid fa-seedling"></i> 
            <h3>Holistic Development</h3>
            <p>Nurturing academic, creative, emotional, and physical
                 growth at every stage of a child's journey.</p>
        </div>
                <div className="sections-row">
                <i className="fa-solid fa-flask"></i>
            <h3>Innovative STEAM</h3>
            <p>Building 21st-century skills with <br /> hands-on Science, 
                Technology, <br /> Engineering, Arts, and Mathematics <br /> projects.</p>
        </div>
                <div className="sections-row">
                <i className="fa-solid fa-award"></i>
            <h3>Academic Excellence</h3>
            <p>Strong academic performance with quality instruction that prepares 
                students for higher education and lifelong success.</p>
        </div>
        </div>
     </div>

      <div className="sections">
        <h1>Our Tailored Educational Programs</h1>
            <div className="sections-col blue">
        <div className="sections-row">
             <i className="fa-solid fa-child"></i> 
            <h3>Nursery School <br />(Ages 3-5)</h3>
            <p>A vibrant, play-based environment fostering 
            early literacy, numeracy, and essential social-emotional skills.</p>
           <Link className="link" to="/Nursery"><button className="btn">Explore Nursery</button></Link>
        </div>
                <div className="sections-row">
                <i className="fa-solid fa-book-open"></i>
            <h3>Primary School <br />(Ages 6-11)</h3>
            <p>Developing core knowledge and independence through
             a balanced curriculum and engaging co-curricular activities.</p>
             <Link className="link" to="/Primary"><button className="btn">Discover Primary</button></Link>
        </div>
        </div>

         <div className="sections-col blue">
                <div className="sections-row">
                <i className="fa-solid fa-user-graduate"></i>
            <h3>Secondary School <br />(Ages 12-18)</h3>
            <p>Rigorous academics, leadership opportunities, 
            and comprehensive preparation for university entrance exams (IGCSE/WAEC/SAT).</p>
             <Link className="link" to="/Secondary"><button className="btn">Learn about Secondary</button></Link>
        </div>

         <div className="sections-row">
                <i className="fa-solid fa-user-graduate"></i>
            <h3>Islamiyyah Training</h3>
            <p>Islamic education based on the Qur’an and Sunnah, focusing on moral discipline,
                 sound character, and spiritual growth.</p>
             <Link className="link" to="/Islamiyyah"><button className="btn">Learn about Islamiyyah</button></Link>
        </div>
        </div>
     </div>

     <div className="sections" id="Updates">
        <h1>Updates</h1>
     <div className="sections-col">
        <div className="sections-row">
             <img src={image2} alt="Students" className="std" /> 
            <h3>Holistic Development</h3>
            <p>Nurturing academic, creative, emotional, and physical
                 growth at every stage of a child's journey.</p>
                <Link to="/Gallery"><button className="btn">See Gallery</button></Link>
        </div>
                <div className="sections-row">
                 <img src={image11} alt="Students" className="std" /> 
            <h3>Innovative STEAM</h3>
            <p>Building 21st-century skills with <br /> hands-on Science, 
                Technology, <br /> Engineering, Arts, and Mathematics <br /> projects.</p>
        <Link to="/Gallery"><button className="btn">See Gallery</button></Link>
        </div>
                <div className="sections-row">
                 <img src={image8} alt="Students" className="std" /> 
            <h3>Academic Excellence</h3>
            <p>Consistently high exam results and university placements,
                 preparing students for global success.</p>
                 <Link to="/Gallery"><button className="btn">See Gallery</button></Link>
        </div>
        </div>
     </div>       

     <div className="sections">
        <h1>Your Path to An-Nur</h1>
        <p>Our admissions process is designed to be straightforward 
        and supportive, guiding your family every step of the way.</p>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.0964483171242!2d6.555031043719149!3d9.578634526114513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c730ae8c52f0f%3A0xdfd4bb190f674256!2sANNUR%20MODEL%20ISLAMIC%20SCHOOL!5e0!3m2!1sen!2sng!4v1764855153568!5m2!1sen!2sng" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>


        <div className="sections blue-bg" id="Testimonies">
        <h1>Hear from our community</h1>
        <div className="sections-row">
        "Choosing An-Nur Model Ismalic Academy for our children, from Nursery 
        right through to Secondary, has been the best decision. 
        The school fosters not just academic growth, but also 
        incredible character and confidence. We couldn't be 
        happier with the supportive community and the high 
        standard of education." <br /> <br />
        — The Kantigi Family, Proud Parents of Three Alumni
        </div>
    </div>

     <div className="sections" id="Contact">
        <h1>Connect With Us</h1>
        <p>We'd love to hear from you. Reach out to learn more or schedule a visit.</p>
        <p><b>Email:</b> annureduservices@gmail.com</p>
        <p><b>Phone:</b> +2348036849688</p>
        <p><b>Address:</b> Location Off Brighter Road Before NECO Staff Quarters, Brighter Area, Minna, Niger State</p>
        <button className="btn">Send a Message</button>
        </div> 

        <Footer />
    </>
)
}


export default Home;