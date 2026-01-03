import React, { useState } from "react";
import api from "../api/axios";
import "../assets/AskPage.css";
import "../style.css";

function AskPage() {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await api.post("/api/questions", {
        name,
        question,
      });

      if (res.data.success) {
        setSent(true);
        setName("");
        setQuestion("");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to submit question");
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Your Question</label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />

          <button disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      ) : (
        <div>
          <h2>Thank you!</h2>
        </div>
      )}
    </div>
  );
}

export default AskPage;
