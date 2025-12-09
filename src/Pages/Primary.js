import image10 from "../Components/Assets/image10.jpg";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Primary() {
return(
  <>
  <NavBar />
  <div className="sec-bg primary">
           <h1>Primary Section</h1>
    </div>

  <div className="sections adm">
       <h1>Welcome to Primary Section</h1>
              <p>Our Primary Section provides a strong educational foundation that prepares
         pupils academically, socially, and emotionally. With dedicated teachers, 
         interactive lessons, and a well-structured curriculum, pupils develop 
         confidence and essential life skills needed for future learning stages.</p>

  <div className="sections-col">
      <div className="sections-row">
<h3>Core Academic Areas</h3>
<p>Our curriculum covers:</p>
<ol>
<li>Mathematics and Numeracy Skills</li>
<li>English Language and Literacy</li>
<li>Basic Science and Technology</li>
<li>National Values and Social Studies</li>
<li>Cultural & Creative Arts</li>
<li>Basic Computing and ICT Awareness</li>
</ol>
   </div>

<div className="sections-row">
  <h3>Learning Approach</h3>
<p>Teaching and learning in the primary section are child-friendly, exploratory, and collaborative. We focus on:</p>
<ol>
<li>Activity-based learning</li>
<li>Classroom discussions and teamwork</li>
<li>Continuous assessments and evaluations</li>
<li>Critical thinking and problem-solving skills</li>
</ol>
</div>

<div className="sections-row">
<h3>Co-Curricular Activities</h3>
<p>We encourage creativity, talent, and physical growth through:</p>
<ol>
<li>Sports activities and competitions</li>
<li>Art and craft activities</li>
<li>Music, drama, and cultural presentations</li>
<li>Excursions and educational visits</li>
</ol>
</div>
</div>

<div className="sections-col">
<div className="sections-row">
<h3>Child Development Goals</h3>
<p>By the end of the Primary Section, pupils are expected to:</p>
<ol>
<li>Demonstrate reading, writing, and strong communication skills</li>
<li>Show competence in numeracy and reasoning</li>
<li>Develop positive values, responsibility, and teamwork</li>
<li>Acquire basic ICT knowledge</li>
<li>Be fully prepared for Junior Secondary School</li>
</ol>
</div>

<div className="sections-row">
<h3>Social & Emotional Growth</h3>
<ol>
<li>Build positive peer relationships</li>
<li>Develop sharing and caring habits</li>
<li>Grow self-confidence and independence</li>
<li>Understand basic classroom routines</li>
</ol>
</div>

<div className="sections-row">
<h3>Learning Environment</h3>
<p>Our primary learning environment features:</p>
<ol>
<li>Well-equipped classrooms</li>
<li>Modern instructional materials</li>
<li>Safe and supportive learning spaces</li>
<li>Qualified and caring educators</li>
</ol>
</div>
      </div>
       <Link className="link" to="/"><button className="btn">Back to Home</button></Link>
      </div>
      <Footer />
      </>
 )
}


export default Primary;