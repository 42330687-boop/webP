const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  const sql = `
    SELECT p.id AS plan_id, p.title, pp.duration, pp.price
    FROM plans p
    JOIN plan_prices pp ON p.id = pp.plan_id
  `;

  db.query(sql, (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

module.exports = router;
