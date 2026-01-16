import { useState } from "react";
import API from "../services/api";

function AddExpense() {
  const [expense_name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const submitExpense = async (e) => {
    e.preventDefault();

    await API.post("/expenses", {
      user_id: localStorage.getItem("user_id"),
      expense_name,
      amount,
      category,
      expense_date: new Date().toISOString().split("T")[0]
    });

    alert("Expense added");
  };

  return (
    <form onSubmit={submitExpense}>
      <h3>Add Expense</h3>

      <input placeholder="Expense Name" onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Amount (XAF)" onChange={(e) => setAmount(e.target.value)} />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option>Transport</option>
        <option>Food</option>
        <option>School</option>
        <option>Others</option>
      </select>

      <button>Add Expense</button>
    </form>
  );
}

export default AddExpense;
