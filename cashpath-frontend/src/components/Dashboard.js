import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    API.get(`/expenses/${localStorage.getItem("user_id")}`)
      .then(res => setExpenses(res.data));
  }, []);

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map(e => (
          <li key={e.id}>
            {e.expense_name} - {e.amount} XAF ({e.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
