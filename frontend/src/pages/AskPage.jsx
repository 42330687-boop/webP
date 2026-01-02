import React, { useState } from "react";
import axios from "axios";
import "../assets/AskPage.css";
import "../style.css";

function AskPage() {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = "https://web-p-eight.vercel.app//api/questions";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(API_URL, {
        name,
        question,
      });

      if (response.status === 201 || response.status === 200) {
        setSent(true);
        setName("");
        setQuestion("");
      }
    } catch (err) {
      console.error("Error submitting question:", err);
      setError("Failed to submit question. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ask-wrapper">
      <h1 className="ask-title">
        <span>Ask</span> a Question
      </h1>

      {!sent ? (
        <form className="ask-form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}

          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={loading}
          />

          <label>Your Question</label>
          <textarea
            placeholder="Write your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            disabled={loading}
          />

          <button type="submit" className="ask-button" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      ) : (
        <div className="thanks-box">
          <h2>Thank You!</h2>
          <p>Your question has been submitted.</p>
          <button
            className="ask-button"
            onClick={() => setSent(false)}
            style={{ marginTop: "20px" }}
          >
            Ask Another Question
          </button>
        </div>
      )}
    </div>
  );
}

export default AskPage;
