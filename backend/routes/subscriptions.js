const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });

  jwt.verify(token, "secret", (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

router.post("/", auth, (req, res) => {
  const { plan_id, duration, payment_method } = req.body;
  const user_id = req.user.id;

  db.query(
    "INSERT INTO subscriptions (user_id,plan_id,duration,payment_method) VALUES (?,?,?,?)",
    [user_id, plan_id, duration, payment_method],
    (err) => {
      if (err) return res.status(500).json({ success: false });
      res.json({ success: true });
    }
  );
});

module.exports = router;
