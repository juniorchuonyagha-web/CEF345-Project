import { useState } from "react";
import API from "../services/api";

function AddIncome() {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");

  const submitIncome = async (e) => {
    e.preventDefault();

    await API.post("/income", {
      user_id: localStorage.getItem("user_id"),
      source,
      amount,
      income_date: new Date().toISOString().split("T")[0]
    });

    alert("Income added");
  };

  return (
    <form onSubmit={submitIncome}>
      <h3>Add Income</h3>

      <input placeholder="Source" onChange={(e) => setSource(e.target.value)} />
      <input type="number" placeholder="Amount (XAF)" onChange={(e) => setAmount(e.target.value)} />

      <button>Add Income</button>
    </form>
  );
}

export default AddIncome;
