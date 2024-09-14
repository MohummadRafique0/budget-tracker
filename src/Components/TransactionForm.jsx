import React, { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description.trim()) {
      setError("Description is required");
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      setError("Amount must be a positive number");
      return;
    }

    setError("");
    addTransaction({ description, amount: parseFloat(amount), type });
    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        min="0.01"
        step="0.01"
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <button type="submit">Add Transaction</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default TransactionForm;
