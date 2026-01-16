const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { user_id, expense_name, amount, category, expense_date } = req.body;

  db.query(
    "INSERT INTO expenses (user_id, expense_name, amount, category, expense_date) VALUES (?, ?, ?, ?, ?)",
    [user_id, expense_name, amount, category, expense_date],
    (err, result) => {
      if(err) return res.status(500).json({ error: err });
      res.json({ message: "Expense added", expenseId: result.insertId });
    }
  );
});

router.get("/:user_id", (req, res) => {
  const userId = req.params.user_id;

  db.query(
    "SELECT * FROM expenses WHERE user_id = ? ORDER BY expense_date DESC",
    [userId],
    (err, result) => {
      if(err) return res.status(500).json({ error: err });
      res.json(result);
    }
  );
});

module.exports = router;
