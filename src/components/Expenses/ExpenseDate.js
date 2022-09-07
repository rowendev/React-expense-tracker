import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const year = props.data.getFullYear();
  const month = props.data.toLocaleString("en-US", { month: "long" });
  const day = props.data.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
