import { useState } from "react";
import Login from "./components/login";
import Dashboard from "./components/Dashboard";
import AddExpense from "./components/AddExpense";
import AddIncome from "./components/AddIncome";
import IncomeList from "./components/IncomeList";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <>
      <Dashboard />
      <IncomeList />
      <AddIncome />
      <AddExpense />
    </>
  );
}

export default App;
