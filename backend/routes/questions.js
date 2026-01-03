const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", async (req, res) => {
  const { name, question } = req.body;

  if (!name || !question) {
    return res.status(400).json({ message: "Missing fields" });
  }

  db.query(
    "INSERT INTO questions (name, question) VALUES (?, ?)",
    [name, question],
    (err) => {
      if (err) return res.status(500).json({ message: "DB error" });
      res.json({ success: true });
    }
  );
});

module.exports = router;
