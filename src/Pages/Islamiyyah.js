import image3 from "../Components/Assets/image3.jpg";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Islamiyyah() {
return(
   <>
  <NavBar />
  <div className="sec-bg">
           <h1>Islamiyyah Training</h1>
    </div>
     <div className="sections adm">
       <h1>About Islamiyyah Training</h1>
       <p>Our Islamiyya Section is committed to providing sound Islamic education based 
        strictly on the teachings of the Qur’an and the Sunnah of the Prophet Muhammad (ﷺ), alongside standard Western academic learning. The programme is designed to nurture students who are spiritually conscious, morally upright, and disciplined in character. Through structured and age-appropriate Islamic studies, learners are guided to understand and practise Islamic beliefs, values, and ethics, ensuring balanced moral, religious, 
        and academic development in accordance with authentic Islamic principles.</p>
<p>Our mission is to provide a supportive Islamic learning environment that strengthens students' faith, guides them toward righteous living, and equips them with knowledge that supports both religious practice and academic success.</p>

  <div className="sections-col">
      <div className="sections-row">
 <h3>Areas of Study</h3>
<ol>
<li>Qur'an Recitation and Memorization (Tahfiz)</li>
<li>Tajweed (Rules of Qur'anic Recitation)</li>
<li>Islamic Jurisprudence (Fiqh)</li>
<li>Aqeedah (Islamic Creed)</li>
<li>Hadith Studies</li>
<li>Seerah (Biography of Prophet Muhammad SAW)</li>
<li>Islamic Moral Instruction (Akhlaq)</li>
<li>Islamic History and Civilization</li>
</ol>
<p>Programs are designed for early learners, intermediate students,
   and advanced classes.</p>
   </div>

<div className="sections-row">
  <h3>Qur'an Studies (Tilawah & Tahfiz)</h3>
<p>Students receive personalized Qur'anic training including:</p>
<ul>
<li>Step-by-step recitation learning</li>
<li>Memorization targets per level</li>
<li>Daily practice tracking</li>
<li>Tajweed rules and correction sessions</li>
<li>Group and Individual Recitation</li>
<li>Exceptional students are guided toward full Qur'an memorization.</li>
</ul>
</div>

<div className="sections-row">
<h3>Why Choose Our Islamiyya Section?</h3>
<ol>
<li>Structured Qur'an memorization levels</li>
<li>Ethical and moral development</li>
<li>Qualified and experienced teachers</li>
<li>Balanced Islamic and Western education</li>
<li>Engaging activities and events</li>
<li>A disciplined and respectful environment</li>
</ol>
</div>
      </div>
<p>Our Islamiyya Section builds not just students but spiritually conscious leaders grounded 
  in the teachings of the Qur'an and Sunnah.</p>
  <p><i>Learn more from our timetable, teachers' profile, curriculum outline, and class categories.</i></p>

       <Link className="link" to="/"><button className="btn">Back to Home</button></Link>  
      </div>
      <Footer />
      </>
)
}


export default Islamiyyah;