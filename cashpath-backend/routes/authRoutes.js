const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/register", (req, res) => {
  const { username, password } = req.body;

  db.query(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, password],
    (err, result) => {
      if(err) return res.status(500).json({ error: err });
      res.json({ message: "User registered", userId: result.insertId });
    }
  );
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if(err) return res.status(500).json({ error: err });
      if(result.length === 0)
        return res.status(401).json({ error: "Invalid credentials" });
      res.json({ message: "Login successful", userId: result[0].id });
    }
  );
});

module.exports = router;

