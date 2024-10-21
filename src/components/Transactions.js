// src/components/Transactions.js
import React from 'react';
import { useSelector } from 'react-redux';

const Transactions = () => {
  const transactions = useSelector((state) => state.transactions);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Transaction History</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <ul className="space-y-4">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="border-b pb-2">
              <div className="flex justify-between items-center">
                <p className="text-lg">{transaction.description}</p>
                <p className="text-lg text-gray-700">${transaction.amount}</p>
              </div>
              <p className="text-gray-500">{transaction.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Transactions;