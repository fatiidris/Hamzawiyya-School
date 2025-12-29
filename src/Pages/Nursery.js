import image4 from "../Components/Assets/image4.jpg";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Nursery() {
 return(
  <>
  <NavBar />
  <div className="sec-bg nursery">
           <h1>Nursery Section</h1>
    </div>


    <div className="sections adm">
       <h1>Welcome to Nursery Section</h1>
        <p> Learning begins here, with smiles, creativity, and confidence developed.</p>
<p>At this stage, the emphasis is on helping children grow emotionally, socially,
   physically, and intellectually through fun-filled, aligning with appropriate activities for each.
    Our nursery classrooms are safe, child-friendly and designed to spark curiosity and early learning.</p>

  <div className="sections-col">
      <div className="sections-row">
<h3>Play-Based Activities</h3>
<ol>
<li>Arts and craft</li>
<li>Music, rhymes and movement</li>
<li>Hands-on games</li>
<li>Phonics</li>
<li>Dramatic play and role-based activities</li>
</ol>
   </div>

<div className="sections-row">
  <h3>What We Offer</h3>
<ol>
<li>Early Learning Skills</li>
<li>Pre-reading and early literacy activities</li>
<li>Numbers, counting and letters recognition</li>
<li>Shape, colour and object identification</li>
<li>Picture-based and storytelling learning </li>
</ol>
</div>

<div className="sections-row">
<h3>Cognitive Development</h3>
<ol>
<li>Problem-solving toys</li>
<li>Matching, sorting, and sequencing</li>
<li>Pattern recognition</li>
<li>Observation and classification exercises</li>
<li>Early reasoning and critical thinking tasks</li>
<li>Simple counting and number games</li>

</ol>
</div>
</div>

<div className="sections-col">
<div className="sections-row">
<h3>Language & Communication Skills</h3>
<ol>
<li>communicate in elementary English and Arabic language with confidence</li>
<li>Identify objects by name</li>
<li>Sing rhymes and songs</li>
<li> Daily vocabulary building</li>
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
<ol>
<li>Colourful, interactive learning spaces</li>
<li>Age-appropriate furniture</li>
<li>Safe play areas</li>
<li>Experienced and caring teachers</li>
</ol>
</div>
      </div>
       <Link className="link" to="/"><button className="btn">Back to Home</button></Link>  
      </div>
      <Footer />
      </>
 )
}


export default Nursery;