import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initial_expenses = [
  {
    id: "1",
    title: "food",
    amount: 50,
    date: new Date(2022, 8, 25),
  },
  {
    id: "2",
    title: "drink",
    amount: 60,
    date: new Date(2022, 8, 22),
  },
  {
    id: "3",
    title: "iphone",
    amount: 3500,
    date: new Date(2022, 7, 2),
  },
  {
    id: "4",
    title: "car",
    amount: 50000,
    date: new Date(2022, 5, 20),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initial_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
