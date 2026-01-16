const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { user_id, source, amount, income_date } = req.body;

  db.query(
    "INSERT INTO income (user_id, source, amount, income_date) VALUES (?, ?, ?, ?)",
    [user_id, source, amount, income_date],
    (err, result) => {
      if(err) return res.status(500).json({ error: err });
      res.json({ message: "Income added", incomeId: result.insertId });
    }
  );
});

router.get("/:user_id", (req, res) => {
  const userId = req.params.user_id;

  db.query(
    "SELECT * FROM income WHERE user_id = ? ORDER BY income_date DESC",
    [userId],
    (err, result) => {
      if(err) return res.status(500).json({ error: err });
      res.json(result);
    }
  );
});

module.exports = router;

