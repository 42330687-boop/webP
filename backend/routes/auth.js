const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body || {};
  if (!name || !email || !password)
    return res.status(400).json({ message: "Missing fields" });

  const hashed = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (name,email,password) VALUES (?,?,?)",
    [name, email, hashed],
    (err) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY")
          return res.status(400).json({ message: "Email exists" });
        return res.status(500).json({ message: "DB error" });
      }
      res.json({ success: true });
    }
  );
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password)
    return res.status(400).json({ message: "Missing credentials" });

  db.query(
    "SELECT * FROM users WHERE email=?",
    [email],
    async (err, rows) => {
      if (err) return res.status(500).json({ message: "DB error" });
      if (rows.length === 0)
        return res.status(401).json({ message: "Invalid credentials" });

      const user = rows[0];
      const match = await bcrypt.compare(password, user.password);
      if (!match)
        return res.status(401).json({ message: "Invalid credentials" });

      const token = jwt.sign({ id: user.id }, "secret", {
        expiresIn: "1d",
      });

      res.json({
        success: true,
        token,
        user: { id: user.id, name: user.name, email: user.email },
      });
    }
  );
});

module.exports = router;
