const express = require("express");
const db = require("../db");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, question } = req.body;

  if (!name || !question) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    await db.query(
      "INSERT INTO questions (name, question) VALUES ($1, $2)",
      [name, question]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "DB error" });
  }
});

module.exports = router;
