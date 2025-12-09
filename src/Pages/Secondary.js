import image3 from "../Components/Assets/image3.jpg";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Secondary() {
return(
   <>
  <NavBar />
  <div className="sec-bg secondary">
           <h1>Secondary Section</h1>
    </div>

   <div className="sections adm">
       <h1>Welcome to Secondary Section</h1>
               <p>The Secondary Section of our school is designed to nurture young
         adolescen  ts into confident, responsible, and academically grounded 
         individuals who are prepared for further education and meaningful
          careers. Our curriculum, facilities, and teaching methodologies
           reflect our commitment to excellence and holistic development</p><br />

  <div className="sections-col">
      <div className="sections-row">
<h3>Science & Technology</h3>
            <ol>
              <li>Mathematics & Further Mathematics</li>
              <li>Basic Science, Biology, Chemistry, and Physics</li>
              <li>Computer Studies, ICT, Coding Concepts</li>
            </ol>
   </div>

<div className="sections-row">
<h3>Arts & Humanities</h3>
            <ol>
              <li>English Language & Literature-in-English</li>
              <li>Civic Education, Government</li>
              <li>Social Studies</li>
              <li>History</li>
            </ol>
</div>

<div className="sections-row">
  <h3>Business, Finance & Entrepreneurship</h3>
            <ol>
              <li>Business Studies</li>
              <li>Financial Accounting</li>
              <li>Basic Economics</li>
              <li>Entrepreneurship Education</li>
            </ol>
            <p>Students receive structured guidance toward WAEC,
             NECO, and other standardized examinations.</p>
</div>
</div>

<div className="sections-col">
<div className="sections-row">
 <h3>Co-Curricular & Leadership Development</h3>
     <ol>
     <li>Debate, spelling bee, quiz competitions</li>
     <li>Journalism, press clubs, literary & debating societies</li>
     <li>Leadership and prefectship roles</li>
     <li>Cultural and arts presentations</li>
     <li>Excursions, tours, and inter-school competitions</li>
     <li>Community service and mentoring sessions</li>
   </ol>
</div>

<div className="sections-row">
<h3>Practical & Lab-Based Learning</h3>
       <p>To ensure deep understanding, students participate in:</p>
       <ol>
         <li>Laboratory experiments</li>
         <li>ICT-based learning</li>
         <li>Science fairs and innovation projects</li>
         <li>Coding and software application training</li>
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


export default Secondary;