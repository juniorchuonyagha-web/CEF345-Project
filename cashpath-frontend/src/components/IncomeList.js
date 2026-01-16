import { useEffect, useState } from "react";
import API from "../services/api";

function IncomeList() {
  const [income, setIncome] = useState([]);

  useEffect(() => {
    API.get(`/income/${localStorage.getItem("user_id")}`)
      .then(res => setIncome(res.data));
  }, []);

  return (
    <div>
      <h2>Income</h2>
      <ul>
        {income.map(i => (
          <li key={i.id}>
            {i.source} - {i.amount} XAF
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IncomeList;
