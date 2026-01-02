import React from "react";
import FoodSection from "../components/FoodSection";
import lemonGarlic from "../gymImage/llaymoun.jpg";
import herbGrilled from "../gymImage/djej mechwe bel aasheb.jpg";
import chickenCurry from "../gymImage/kari.jpg";
import gingerGarlic from "../gymImage/zanjabel.jpg";
import beefStirFry from "../gymImage/mekle maa fotor.jpg";
import beefVeg from "../gymImage/lahem mechwe.jpg";
import beefStew from "../gymImage/yakhane.jpg";
import kofta from "../gymImage/kafta.jpg";
import grilledChickenSalad from "../gymImage/Grilled Chicken Salad.jpeg";
import tabbouleh from "../gymImage/taboule.jpg";
import chickpea from "../gymImage/homos.jpg";
import avocadoChicken from "../gymImage/avoca.jpg";
import '../assets/Food.css';
import "../style.css"
function FoodPage() {
  return (
    <>
      <h1 className="h1center">Food Menu</h1>

      <br /><br />

      <div className="food-box">
        <FoodSection
          id="downnn"
          title="CHICKEN"
          foods={[
            { img: lemonGarlic, name: "Lemon Garlic Chicken", price: 14 },
            { img: herbGrilled, name: "Herb Grilled Chicken", price: 12 },
            { img: chickenCurry, name: "Chicken Curry with Vegetables", price: 16 },
            { img: gingerGarlic, name: "Ginger Garlic Chicken with Broccoli", price: 15 },
          ]}
        />
      </div>

      <br /><br /><br /><br />

      <div className="food-box">
        <FoodSection
          id="downn"
          title="BEEF"
          foods={[
            { img: beefStirFry, name: "Stir-fried Beef with Mushrooms and Onions", price: 17 },
            { img: beefVeg, name: "Beef with Sautéed Vegetables", price: 25 },
            { img: beefStew, name: "Stew with Vegetables", price: 20 },
            { img: kofta, name: "Grilled Kofta", price: 15 },
          ]}
        />
      </div>

      <br /><br /><br /><br />

      <div className="food-box">
        <FoodSection
          id="downnnn"
          title="SALAD"
          foods={[
            { img: grilledChickenSalad, name: "Grilled Chicken Salad", price: 17 },
            { img: tabbouleh, name: "Tabbouleh Salad", price: 9 },
            { img: chickpea, name: "Chickpea Salad", price: 12 },
            { img: avocadoChicken, name: "Avocado Chicken", price: 15 },
          ]}
        />
      </div>

      <br /><br /><br /><br /><br /><br />
    </>
  );
}

export default FoodPage;
