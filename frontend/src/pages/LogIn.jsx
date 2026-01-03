import React, { useState } from "react";
import "../assets/Auth.css";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password!");
      return;
    }

    try {
      setLoading(true);

     const res = await axios.post(
  "https://webp-y7mb.onrender.com/api/auth/login",
  { email, password }
);

      if (res.data.success) {
        // حفظ payment method
        localStorage.setItem("paymentMethod", paymentMethod);

        // توجه للصفحة التالية
        navigate("/AllOffer");
      } else {
        alert(res.data.message || "Login failed!");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Server error");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <h1 className="auth-title">
        <span>Log</span> In
      </h1>

      <form className="auth-form" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="payment">Payment Method</label>
        <select
          id="payment"
          className="payment-select"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="cash">Cash</option>
          <option value="visa">Visa / MasterCard</option>
          <option value="paypal">PayPal</option>
          <option value="online">Online Payment</option>
        </select>

        <button type="submit" className="auth-button" disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </button>

        <p className="switch-text">
          Don’t have an account? <Link to="/SignUp">Create one</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
