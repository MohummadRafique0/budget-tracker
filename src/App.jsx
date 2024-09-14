import React, { useState, useEffect } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./index.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const savedTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(savedTransactions);
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const calculateBalance = () => {
    const income = transactions
      .filter((t) => t.type === "Income")
      .reduce((acc, t) => acc + t.amount, 0);
    const expense = transactions
      .filter((t) => t.type === "Expense")
      .reduce((acc, t) => acc + t.amount, 0);
    return income - expense;
  };

  return (
    <div className="app">
      <h1>Personal Budget Tracker</h1>
      <TransactionForm addTransaction={addTransaction} />
      <h2>Balance: ${calculateBalance().toFixed(2)}</h2>
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;
