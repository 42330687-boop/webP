import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import coachImg from "../gymImage/cheering-coach-2016-cerave-invite-1.jpg";
import trainingImg from "../gymImage/Swimming-in-SOUL-CAP.jpeg";
import daysImg from "../gymImage/istockphoto-1131430475-612x612.jpg";
import proSwimmerImg from "../gymImage/professional-swimmer-henrik-sorensen.jpg";
import '../assets/Aqua.css';
import "../style.css"
function Aqua() {



  return (
    <div>
    

      <div id="demo" className="carousel slide mt-4" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="hover">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={coachImg} alt="Los Angeles" className="d-block" />
          </div>
          <div className="carousel-item">
            <img src={trainingImg} alt="Chicago" className="d-block" />
          </div>
          <div className="carousel-item">
            <img src={daysImg} alt="New York" className="d-block" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>



        <div className="recipies">
          <div className="recipies-texts">
            <h2 style={{ fontSize: "90px" }}>
              <b><span style={{ color: "rgb(56, 152, 255)" }}>Swim</span>ming</b>
            </h2>
            <p className="texts">
              Swimming Lessons help children feel comfortable in water, learn basic swim skills, and stay safe. It’s a fun and healthy activity that builds confidence and coordination.
            </p>
          </div>
<br />
<br />
<br />
          <div className="recipies-boxes">
            <div className="recepies-box">
              <a href="#gallery"><img src={coachImg} alt="Coach" /></a>
              <h2><b>Coach</b></h2>
              <p className="texts" style={{ textAlign: "center" }}>
                Our coach is a certified swimming instructor with years of experience in teaching children. He focuses on safety, confidence, and fun in every session.
              </p>
            </div>


            <div className="recepies-box">
              <a href="#train"><img src={trainingImg} alt="Training" /></a>
              <h2><b>Training</b></h2>
              <p className="texts" style={{ textAlign: "center" }}>
                The training is step-by-step, starting with basic water safety, floating, and breathing techniques, then progressing to swimming strokes.
              </p>
            </div>
<br />
<br />
<br />
            <div className="recepies-box">
              <a href="#timesss"><img src={daysImg} alt="Days" /></a>
              <h2><b>Days</b></h2>
              <p className="texts" style={{ textAlign: "center" }}>
                Training sessions are held three times a week on selected days.
              </p>
            </div>
          </div>
        </div>
<br />
<br />
<br />
        <nav className="Train" id="train">
          <h1><b>Information</b></h1>
          <img src={proSwimmerImg} alt="Professional Swimmer" />

          <div id="gallerys">
            <div id="Menu-info">
              <h2>Coach 2: Sara Ahmed</h2>
              <li>Experience: Former national swimmer with 7 years coaching experience.</li>
              <li>Specialty: Breaststroke and butterfly techniques.</li>
              <li>Certification: Red Cross Lifeguard & Swim Instructor.</li>
              <li>Style: Focused on technique and discipline</li>
            </div>

            <div id="Menu-info">
              <h2>Coach 2: Sara Ahmed</h2>
              <li>Experience: Former national swimmer with 7 years coaching experience.</li>
              <li>Specialty: Breaststroke and butterfly techniques.</li>
              <li>Certification: Red Cross Lifeguard & Swim Instructor.</li>
              <li>Style: Focused on technique and discipline</li>
            </div>

            <div id="Menu-info">
              <h2>Coach 3: Mark Johnson</h2>
              <li>Experience: 10 years in professional swimming training.</li>
              <li>Specialty: Teaching children and beginners.</li>
              <li>Certification: Certified by the American Swimming Coaches Association (ASCA)</li>
              <li>Style: Friendly, patient, and highly motivational.</li>
            </div>
               <div id="Menu-info">
              <h2>Coach 4: Sara Ahmed</h2>
              <li>Experience: Former national swimmer with 7 years coaching experience.</li>
              <li>Specialty: Breaststroke and butterfly techniques.</li>
              <li>Certification: Red Cross Lifeguard & Swim Instructor.</li>
              <li>Style: Focused on technique and discipline</li>
            </div>
          </div>

          <div id="swimregister">
            <a href="Registration"><h3>To register top here login</h3></a>
          </div>
        </nav>
        <br />
        <br />
        <br />
        <div className="Train" id="timesss">
          <p>
            Swimming lessons are held on Sunday, Tuesday, and Thursday.<br />
            Morning session: from 9:00 AM to 11:00 AM<br />
            Evening session: from 4:00 PM to 6:00 PM<br />
            Classes are suitable for all ages and guided by professional instructors.
          </p>
        </div>
    
    </div>
  );
}


export default Aqua;
