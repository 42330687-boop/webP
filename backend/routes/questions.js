router.post("/", async (req, res) => {
  const { name, question } = req.body;

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
