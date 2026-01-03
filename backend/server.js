require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const planRoutes = require("./routes/plans");
const questionRoutes = require("./routes/questions");
const subRoutes = require("./routes/subscriptions");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/plans", planRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/subscriptions", subRoutes);

app.get("/", (req, res) => {
  res.send("API running ✅");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
