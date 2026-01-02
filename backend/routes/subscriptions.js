const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

router.post("/", auth, async (req, res) => {
  const { plan_id, duration, payment_method } = req.body;
  const user_id = req.user.id;

  try {
    await db.query(
      "INSERT INTO subscriptions (user_id,plan_id,duration,payment_method) VALUES ($1,$2,$3,$4)",
      [user_id, plan_id, duration, payment_method]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "DB error" });
  }
});

module.exports = router;
