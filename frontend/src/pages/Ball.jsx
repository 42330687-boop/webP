import React from "react";
import slide1 from "../gymImage/R.jpeg";
import slide2 from "../gymImage/How-Liverpool-Football-Club-Used-Data-to-Up-its-Game.jpg";
import slide3 from "../gymImage/R (1).jpeg";
import coachImg from "../gymImage/coach.jpeg";
import trainingImg from "../gymImage/training.avif";
import daysImg from "../gymImage/date.jpg";
import infoImg from "../gymImage/Coaching-Instructions.jpg";
import '../assets/Ball.css';
import "../style.css"
function Ball() {
  return (
    <div className="page-container">
     

     
       <div
        id="demo"
        className="carousel slide mt-4"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        data-bs-pause="hover"
      >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} alt="slide1" className="d-block" />
          </div>
          <div className="carousel-item">
            <img src={slide2} alt="slide2" className="d-block" />
          </div>
          <div className="carousel-item">
            <img src={slide3} alt="slide3" className="d-block" />
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
              <b><span style={{ color: "rgb(56, 152, 255)" }}>foot</span>ball</b>
            </h2>

            <p className="texts">
              Football is more than just a sport — it's a way of life.
              It helps improve physical fitness, strengthens the heart,
              and enhances teamwork and coordination skills.
              Football also builds self-discipline and confidence,
              while encouraging positive social interaction and friendship.
            </p>
          </div>

      
          <div className="recipies-boxes">
            <div className="recepies-box">
              <a href="#Menu-info">
                <img src={coachImg} alt="coach" />
              </a>
              <h2><b>Coach</b></h2>
              <p className="texts" style={{ textAlign: "center" }}>
                Our coach is a certified instructor with years of experience teaching children.
              </p>
            </div>

            <div className="recepies-box">
              <a href="#train">
                <img src={trainingImg} alt="training" />
              </a>
              <h2><b>Training</b></h2>
              <p className="texts" style={{ textAlign: "center" }}>
                Training starts with basics, then improves stamina,
                speed, balance, and team skills.
              </p>
            </div>

            <div className="recepies-box">
              <a href="#tim">
                <img src={daysImg} alt="days" />
              </a>
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
          <h1><b>information</b></h1>
          <img src={infoImg} alt="info" />
          <br />

          <div id="gallerys">
      
            <div id="Menu-info">
              <h2>Coach 1: Samir Haddad</h2>
              <li>12 years coaching various age groups.</li>
              <li>Former Lebanese Premier League player.</li>
              <li>Certified AFC Level B.</li>
              <li>Strong in tactical planning.</li>
            </div>

            <div id="Menu-info">
              <h2>Coach 2: Rami Suleiman</h2>
              <li>Strength & conditioning coach.</li>
              <li>Assistant coach for universities.</li>
              <li>Master's in Sports Science.</li>
              <li>Expert in agility and stamina training.</li>
            </div>

         
            <div id="Menu-info">
              <h2>Coach 3: Layla Mansour</h2>
              <li>Former Lebanese Women's National Team player.</li>
              <li>6 years coaching girls and youth teams.</li>
              <li>UEFA C License.</li>
              <li>Focus on empowerment & confidence.</li>
            </div>
              <div id="Menu-info">
              <h2>Coach 4: Rami Suleiman</h2>
              <li>Strength & conditioning coach.</li>
              <li>Assistant coach for universities.</li>
              <li>Master's in Sports Science.</li>
              <li>Expert in agility and stamina training.</li>
            </div>
          </div>

        <div id="swimregister">
            <a href="Registration"><h3>To register top here login</h3></a>
          </div>
        </nav>
<br />
<br />
<br />
      
        <div className="Train" id="tim">
          <p>Football training and matches take place on Tuesday, Thursday, and Saturday.</p>
          <p>Morning: 8:30 AM – 10:00 AM</p>
          <p>Evening: 5:30 PM – 7:00 PM</p>
          <p>Our field is well-maintained and suited for all levels.</p>
        </div>
    </div>
  );
}

export default Ball;
