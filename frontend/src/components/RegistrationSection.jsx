import React from 'react';
import '../assets/Registration.css';
import '../style.css';

function RegistrationSection({ id, title, plans }) {
  return (
    <section className="registration-section" id={id}>
      <h2>{title}</h2>

      <div className="registration-container">
        {plans.map((plan, index) => (
          <div className="registration-plan" key={index}>
            <h3 className="plan-duration">{plan.duration}</h3>

            <p className="plan-description">{plan.description}</p>

            <div className="features-list">
              {plan.includedFeatures.map((feature, i) => (
                <p key={i} className="feature-included">
                  ✔ {feature}
                </p>
              ))}

              {plan.excludedFeatures?.map((feature, i) => (
                <p key={i} className="feature-excluded">
                  ✖ {feature}
                </p>
              ))}
            </div>

            <p className="plan-price">{plan.price}</p>

            <a href={plan.link} className="register-btn">
              Register Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RegistrationSection;
