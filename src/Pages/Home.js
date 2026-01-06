import NavBar from "../Components/NavBar";
import image2 from "../Components/Assets/image2.jpg";
import image4 from "../Components/Assets/image4.jpg";
import image8 from "../Components/Assets/image8.jpg";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Home() {
return(
    <>
    <NavBar />

    <div className="hero-img" id="Home">
        <div className="hero-text">
            <h1>Hamzat Islamic School, Minna</h1>
            <p>We provide a well-structured educational journey from Nursery to Secondary level, 
                delivering academic excellence, character development, and 
                critical skills that prepare students for higher education, excell at global stage and achieve spiritual fulfilment.</p>
            <Link className="link" to="/Admission"><button className="btn">Begin Your Children's Journey</button></Link>
        </div>
     </div>


     <div className="sections" id="About">
        <h1>Our Core Values</h1>
        <p>We promote knowledge rooted in faith to Allah, discipline, respect, and humility.
           We uphold modesty, <br />self-control, and service to humanity, nurturing learners who excel academically and morally. In essence, it is a school where ideal muslims emerged. </p>
            <div className="sections-col">
        <div className="sections-row">
             <i className="fa-solid fa-seedling"></i> 
            <h3>Holistic Development</h3>
            <p>We foster balanced growth by developing each child’s academic ability, with emphasis on specila need of every child, creativity, 
                emotional well-being, and physical strength at every stage of learning.</p>
        </div>
                <div className="sections-row">
                <i className="fa-solid fa-flask"></i>
            <h3>Innovative STEAM</h3>
            <p>We inspire creativity and  <br />problem-solving <br /> through class room engagement
              <br />and practical STEAM projects  <br />that do not only prepare learners  <br />but, also ready for the future and its challenges.</p>
        </div>
                <div className="sections-row">
                <i className="fa-solid fa-award"></i>
            <h3>Academic Excellence</h3>
            <p>Delivering high-quality instruction that empowers students to 
                achieve outstanding academic 
                results and prepares them for higher education and lifelong success.</p>
        </div>
        </div>
     </div>

      <div className="sections">
        <h1>Our Tailored Educational Programs</h1>
            <div className="sections-col blue">
        <div className="sections-row">
             <i className="fa-solid fa-child"></i> 
            <h3>Nursery School <br />(Ages 3-5)</h3>
            <p>Providing a stimulating, play-oriented environment that boost 
                intellectual growth, 
                social development, and provide essential foundation for technical skills.</p>
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
            <h3>Student Growth & Well-Being</h3>
            <p>We have enhanced our student development programs to support every child 
                academically, emotionally, and physically. Special learning needs are now 
                more closely monitored, ensuring each learner receives 
                personalized guidance in a caring and supportive environment.</p>
                <Link to="/Gallery"><button className="btn">See Gallery</button></Link>
        </div>
                <div className="sections-row">
                 <img src={image4} alt="Students" className="std" /> 
            <h3>Future-Ready STEAM Learning</h3>
            <p>Our STEAM program has been expanded with more hands-on classroom activities 
                and practical projects.
                 These initiatives encourage innovation, teamwork, and problem-solving skills,
                  preparing students for future careers and real-world challenges.</p>
        <Link to="/Gallery"><button className="btn">See Gallery</button></Link>
        </div>
                <div className="sections-row">
                 <img src={image8} alt="Students" className="std" /> 
            <h3>Improved Academic Outcomes</h3>
            <p>Through strengthened teaching methods and continuous staff training, academic
                 performance across all levels has improved. Students are better prepared for examinations,
                 higher education, and long-term academic success.</p>
                 <Link to="/Gallery"><button className="btn">See Gallery</button></Link>
        </div>
        </div>
     </div>       

     <div className="sections">
        <h1>Your Path to Hamzawiyya</h1>
        <p>Our admissions process is designed to be straightforward 
        and supportive, guiding your family every step of the way.</p>
       <iframe src="https://www.google.com/maps/embed?pb=!4v1767617285914!6m8!1m7!1sEfhns5v73m92rW4YXFI3Aw!2m2!1d9.594266858986323!2d6.516703330700961!3f266.16883264820876!4f-20.223846308714883!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
        </div>


        <div className="sections blue-bg" id="Testimonies">
        <h1>Hear from our community</h1>
        <div className="sections-row">
        “Enrolling our children at Hamzawiyya Islamic Academy—from Nursery through 
        Secondary School—has been one of the most rewarding choices we have made. 
        The school goes beyond academic excellence by nurturing strong morals, 
        self-confidence, and discipline in its students. We deeply appreciate the caring 
        environment and the consistently high quality of education provided.” <br /> <br />
        — The Musa Family, Thankful Parents of Three Alumni
        </div>
    </div>

     <div className="sections" id="Contact">
        <h1>Connect With Us</h1>
        <p>We'd love to hear from you. Reach out to learn more or schedule a visit.</p>
        <p><b>Email:</b> hamzatislamicschool@gmail.com</p>
        <p><b>Phone:</b> +2348030595564/07065678918</p>
        <p><b>Address:</b> Gurara Area, Opposite Federaal Housing Estate, Off Bida Road, Minna, Niger State</p>
        <button className="btn">Send a Message</button>
        </div> 

        <Footer />
    </>
)
}


export default Home;