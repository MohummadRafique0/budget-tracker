import React from "react";
function TransactionList({ transactions, editTransaction, deleteTransaction }) {
  return (
    <div className="transaction-list">
      <h2>Transactions:</h2>
      <ul>
        {transactions.map((t) => (
          <li key={t.id} className={t.type.toLowerCase()}>
            {t.description}: ${t.amount.toFixed(2)} ({t.type})
            <button
              onClick={() => deleteTransaction(t.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
