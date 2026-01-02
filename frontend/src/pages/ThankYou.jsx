import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css"
function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Registration");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="thank-you-wrapper">
      <h1 className="thank-you-title">Thank You for Logging In!</h1>
      <p style={{ textAlign: "center" }}>
        We're glad to have you with us. You'll be redirected shortly to our registration page.
      </p>
    </div>
  );
}

export default ThankYou;
