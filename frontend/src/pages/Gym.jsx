import React from "react";
import { Link } from "react-router-dom";

import slide1 from "../gymImage/grym 1.jpeg";
import slide2 from "../gymImage/gym 2.webp";
import slide3 from "../gymImage/gym 4.avif";

import coachGym from "../gymImage/coach gym.webp";
import gymTraining from "../gymImage/gym training.jpg";
import gymInfo from "../gymImage/info gym.jpeg";
import dayImg from "../gymImage/istockphoto-1131430475-612x612.jpg";

import "../assets/Gym.css";
import "../style.css"
function Gym() {
  return (
    <>
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
            <img src={slide1} alt="slide1" className="d-block w-100" />
          </div>

          <div className="carousel-item">
            <img src={slide2} alt="slide2" className="d-block w-100" />
          </div>

          <div className="carousel-item">
            <img src={slide3} alt="slide3" className="d-block w-100" />
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
            <b>
              <span style={{ color: "rgb(56, 152, 255)" }}>g</span>ym
            </b>
          </h2>

          <p className="texts">
            “Transform your body, boost your energy, and unlock your best self — join our gym today and take the first step toward a healthier, stronger you!”
          </p>
        </div>

        <div className="recipies-boxes">
          <div className="recepies-box">
            <img src={coachGym} alt="coach" />
            <h2><b>Coach</b></h2>
            <p className="texts" style={{ textAlign: "center" }}>
              Our coach is certified with years of experience helping all ages improve safely.
            </p>
          </div>

          <div className="recepies-box">
            <img src={gymTraining} alt="training" />
            <h2><b>Training</b></h2>
            <p className="texts" style={{ textAlign: "center" }}>
              Full training programs for beginners and advanced athletes.
            </p>
          </div>

          <div className="recepies-box">
            <img src={dayImg} alt="Days" />
            <h2><b>Days</b></h2>
            <p className="texts" style={{ textAlign: "center" }}>
              Training sessions are available every day.
            </p>
          </div>
        </div>
      </div>

      <nav className="Train" id="infoo">
        <h1><b>Information</b></h1>
        <img src={gymInfo} alt="gym info" />

        <div id="gallerys">
          <div className="menu-info">
            <h2>Coach 1: Nour El-Hajj</h2>
            <li>8 years training women in strength, toning, and weight loss.</li>
            <li>Women’s Fitness Specialist – NASM.</li>
            <li>Empowering coaching approach.</li>
          </div>

          <div className="menu-info">
            <h2>Coach 2: Rami Zahran</h2>
            <li>10 years fitness & bodybuilding experience.</li>
            <li>ISSA Certified Fitness Trainer.</li>
            <li>Expert in fat loss & muscle gain.</li>
          </div>

          <div className="menu-info">
            <h2>Coach 3: Hadi Nasr</h2>
            <li>12+ years in athlete performance training.</li>
            <li>NSCA CSCS Certified.</li>
            <li>Biomechanics specialist.</li>
          </div>

          <div className="menu-info">
            <h2>Coach 4: Nour El-Hajj</h2>
            <li>8 years training women in strength, toning, and weight loss.</li>
            <li>Women’s Fitness Specialist – NASM.</li>
            <li>Empowering coaching approach.</li>
          </div>
        </div>

        <div id="swimregister">
          <Link to="/Registration">
            <h3>Click here to register</h3>
          </Link>
        </div>
      </nav>

      <div className="Train" id="time">
        <p>The gym is open daily without interruption.</p>
        <p>Morning: 7:00 AM – 1:00 PM</p>
        <p>Evening: 3:00 PM – 10:00 PM</p>
        <p>Fully equipped with modern machines and certified trainers.</p>
      </div>
    </>
  );
}

export default Gym;
