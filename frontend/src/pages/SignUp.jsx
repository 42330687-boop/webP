import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/Auth.css";
import "../style.css";
import api from "../axios";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      setLoading(true);
const res = await api.post("/auth/signup", { name, email, password });



      if (res.data.success) {
        alert("Account created successfully! Please log in.");
        navigate("/login");
      } else {
        alert(res.data.message || "SignUp failed!");
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
        <span>Sign</span> Up
      </h1>

      <form className="auth-form" onSubmit={handleSignup}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Create a strong password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="auth-button" disabled={loading}>
          {loading ? "Creating..." : "Create Account"}
        </button>

        <p className="switch-text">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
