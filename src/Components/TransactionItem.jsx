import React from "react";

function TransactionItem({ transaction, deleteTransaction }) {
  return (
    <li>
      <span>
        {transaction.description}: ${transaction.amount.toFixed(2)}
      </span>
      <span>({transaction.type})</span>
      <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
    </li>
  );
}

export default TransactionItem;
