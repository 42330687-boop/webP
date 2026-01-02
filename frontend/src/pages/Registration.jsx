import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "../assets/Registration.css";
import "../style.css"

function Registration() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, [location]);

  const plans = [
    {
      title: "Full Package",
      id: "full-package-section",
      description:
        "Join us for a month and experience flexible fitness with no long-term commitment.",
      features: ["karate", "football", "jacuzzi", "gym", "swimming"],
      prices: [
        { duration: "1 Month", price: "49.99$", link: "/LogIn" },
        { duration: "3 Months", price: "149.99$", link: "/LogIn" },
        { duration: "12 Months", price: "549.99$", link: "/LogIn" },
      ],
    },
    {
      title: "Swimming",
      id: "swimming-section",
      description:
        "Join us for professional swimming lessons with certified instructors.",
      features: ["swimming"],
      excluded: ["football", "jacuzzi", "gym", "karate"],
      prices: [
        { duration: "1 Month", price: "49.99$", link: "/LogIn" },
        { duration: "3 Months", price: "149.99$", link: "/LogIn" },
        { duration: "12 Months", price: "549.99$", link: "/LogIn" },
      ],
    },
    {
      title: "Football",
      id: "football-section",
      description: "Join us for a month and experience flexible football training.",
      features: ["football"],
      excluded: ["karate", "jacuzzi", "gym", "swimming"],
      prices: [
        { duration: "1 Month", price: "49.99$", link: "/LogIn" },
        { duration: "3 Months", price: "149.99$", link: "/LogIn" },
        { duration: "12 Months", price: "549.99$", link: "/LogIn" },
      ],
    },
  ];

  return (
    <div className="registration-page">
      <div className="register-container">
        <div className="recipies">
          <div className="recipies-texts">
            <h2 className="main-title">
              <span className="highlight">Regi</span>stration
            </h2>
            <br />
            <p className="texts">
              "Don't wait for the perfect moment - make it. <br />
              Join Oxygen Gym & Spa today and take the first step toward a stronger, healthier, and more confident you!"
            </p>
          </div>

          {plans.map((plan, index) => (
            <div key={index} id={plan.id} className="pricing-section">
              <br />
              <br />
              <br />
              <h1 className="h1center">{plan.title}</h1>
              <br />
              <div className="recipies-boxes">
                {plan.prices.map((price, priceIndex) => (
                  <div className="recepies-box" key={priceIndex}>
                    <h2>{price.duration} Registration:</h2>
                    <p>{plan.description}</p>
                    <br />
                    <div className="features-list">
                      {plan.features.map((feature, featureIndex) => (
                        <p key={`included-${featureIndex}`}>&#10004; {feature}</p>
                      ))}
                      {plan.excluded &&
                        plan.excluded.map((feature, featureIndex) => (
                          <p key={`excluded-${featureIndex}`}>&#10060; {feature}</p>
                        ))}
                    </div>
                    <br />
                    <Link to={price.link} className="pricee">
                      {price.price}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Registration;
