const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await db.query(`
      SELECT 
        p.id AS plan_id,
        p.title,
        pp.duration,
        pp.price
      FROM plans p
      JOIN plan_prices pp ON p.id = pp.plan_id
    `);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "DB error" });
  }
});

module.exports = router;
