import React from "react";
import "../assets/AllOffer.css"
import "../style.css"
import videoo from "../video/14 Dumbbell Exercises You Can Do at Home.mp4"
const plans = {
  women: {
    title: "Women's Diet Plan",
    video: videoo,
    days: {
      Saturday: "Healthy breakfast + salad + light dinner",
      Sunday: "Oats + grilled chicken + fruits",
      Monday: "Eggs + tuna + vegetables",
      Tuesday: "Yogurt + brown rice + fish",
      Wednesday: "Nuts + salad + protein meal",
      Thursday: "Soup + chicken + fruits",
      Friday: "Controlled free day (no sugar)"
    }
  },
  men: {
    title: "Men's Diet Plan",
    video:videoo,
    days: {
      Saturday: "Eggs + oats + chicken",
      Sunday: "Toast + grilled meat + potatoes",
      Monday: "Yogurt + rice + fish",
      Tuesday: "Eggs + pasta + protein",
      Wednesday: "Nuts + salad + chicken",
      Thursday: "Soup + tuna + vegetables",
      Friday: "Light free meal"
    }
  }
};

export default function DietPlan() {
  const [type, setType] = React.useState("women");

  const plan = plans[type];

  return (
   <div className="diet-wrapper">

  <h2 className="diet-title">
    {plan.title} <span>Plan</span>
  </h2>

  <div className="gender-buttons">
    <button onClick={() => setType("women")}>Women</button>
    <button onClick={() => setType("men")}>Men</button>
  </div>

  <iframe
    title="all-offers-map"
    className="diet-video"
    src={plan.video}
    allowFullScreen
  ></iframe>

  <ul className="days-list">
    {Object.entries(plan.days).map(([day, food]) => (
      <li key={day}>
        <strong>{day}:</strong> {food}
      </li>
    ))}
  </ul>

</div>

  );
}
