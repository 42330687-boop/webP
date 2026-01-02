import React from 'react';

function FoodSection({ id, title, foods }) {
  return (
    <section className="food-section" id={id}>
      <h2>{title}</h2>
      <div className="food-container">
        {foods.map((food, index) => (
          <div className="food" key={index}>
            <img src={food.img} alt={food.name} />
            <p className="food-name">{food.name}</p>
            <p className="food-price">${food.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FoodSection;