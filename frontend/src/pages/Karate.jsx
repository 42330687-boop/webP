import React from "react";
import slide1 from "../gymImage/iStock-649576542.jpg";
import slide2 from "../gymImage/R (2).jpeg";
import slide3 from "../gymImage/R.jpeg";
import coachImg from "../gymImage/karate coach.jpg";
import trainingImg from "../gymImage/karate trainnig.avif";
import daysImg from "../gymImage/istockphoto-1131430475-612x612.jpg";
import infoImg from "../gymImage/infoo.jpg";
import '../assets/Karate.css';
import "../style.css"
function Karate() {
  return (
    <div className="page-container">
      <div id="demo" className="carousel slide mt-4" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="hover">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block" alt="slide1" />
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block" alt="slide2" />
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block" alt="slide3" />
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
            <b><span style={{ color: "rgb(56, 152, 255)" }}>Ka</span>rate</b>
          </h2>
          <p className="texts">
            "Unleash your strength and discipline <br />
            join our Karate classes today and start your journey to confidence, focus, and self-defense!"
          </p>
        </div>

        <div className="recipies-boxes">
          <div className="recepies-box">
            <a href="#Menu-info"><img src={coachImg} alt="Coach" /></a>
            <h2><b>Coach</b></h2>
            <p className="texts">
              Our coach is a certified instructor with years of experience.
            </p>
          </div>

          <div className="recepies-box">
            <a href="#train"><img src={trainingImg} alt="Training" /></a>
            <h2><b>Training</b></h2>
            <p className="texts">
              Training is step-by-step starting with basic techniques.
            </p>
          </div>

          <div className="recepies-box">
            <a href="#timee"><img src={daysImg} alt="Days" /></a>
            <h2><b>Days</b></h2>
            <p className="texts">
              Training sessions are held three times a week.
            </p>
          </div>
        </div>
      </div>
      <nav className="Train" id="train">
        <h1><b>Information</b></h1>
        <img src={infoImg} alt="info" className="info-img" />
        <div id="gallerys">
          <div className="menu-info">
            <h2>Coach 1: Hadi Nassar</h2>
            <li>Experience: 15+ years…</li>
          </div>
          <div className="menu-info">
            <h2>Coach 2: Nour Saleh</h2>
            <li>National champion…</li>
          </div>
          <div className="menu-info">
            <h2>Coach 3: Tarek Mahfouz</h2>
            <li>Expert in kata and kumite…</li>
          </div>
          <div className="menu-info">
            <h2>Coach 4: Nour Saleh</h2>
            <li>National champion…</li>
          </div>
        </div>

        <div id="swimregister">
          <a href="Registration"><h3>To register top here login</h3></a>
        </div>
      </nav>
      <div className="Train" id="timee">
        Karate classes are held on Monday, Wednesday, and Friday.
        <br />
        Morning: 10:00 AM – 11:30 AM
        <br />
        Evening: 6:00 PM – 7:30 PM
      </div>
    </div>
  );
}

export default Karate;
