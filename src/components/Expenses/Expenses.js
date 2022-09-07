import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const onSelectedYear = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  if (filteredExpenses.length > 0) {
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onSelected={onSelectedYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList data={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
