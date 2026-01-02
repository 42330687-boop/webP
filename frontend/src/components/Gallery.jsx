import React from "react";
import { Link } from "react-router-dom";

import AquaImg from "../gymImage/Sport.jpg";
import KarateImg from "../gymImage/2873811.webp";
import GymImg from "../gymImage/gym.webp";
import BallImg from "../gymImage/R (1).jpeg";
import FoodImage from "../gymImage/kafta.jpg";
import Regis from "../gymImage/register.avif";

import "../assets/gallery.css";

function Gallery() {
  const items = [
    { link: "/aqua", img: AquaImg, title: "Swimming", text: "A refreshing, clean, and safe space for swimming and aquatic fitness." },
    { link: "/karate", img: KarateImg, title: "Karate", text: "Learn discipline and strength with expert instructors." },
    { link: "/gym", img: GymImg, title: "Gym", text: "Fully equipped with modern machines and free weights." },
    { link: "/ball", img: BallImg, title: "Balls", text: "Perfect for team games and athletic training." },
    { link: "/food", img: FoodImage, title: "Food", text: "Perfect healthy food." },
    { link: "/registration", img: Regis, title: "Register", text: "Register now and join us!" }
  ];

  return (
    <div className="gallery">
      <h1 className="h1center">Press the image for information</h1>

      <div id="gallery">
        {items.map((item, index) => (
          <div className="menu-info" key={index}>
            <Link to={item.link}>
              <img src={item.img} alt={item.title} />
            </Link>
            <h2>{item.title}</h2>
            <p className="texts">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="gallery-description">
        <p>
          <b>Oxygen Gym & Spa</b> is a modern fitness and wellness resort that offers a complete lifestyle experience.
          Our facility includes a fully equipped bodybuilding gym, professional football field, karate hall, a refreshing swimming pool,
          and a relaxing jacuzzi and spa area. We also feature a specialized nutritionist, a healthy food corner, 
          and a sports store with top-quality gear and apparel. Whether you're here to train, relax, or transform your health,
          Oxygen is the perfect place to recharge your body and mind.
        </p>
      </div>
    </div>
  );
}

export default Gallery;
