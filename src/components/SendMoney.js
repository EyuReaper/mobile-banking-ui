// src/components/SendMoney.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMoney } from '../services/bankingApi'; 

const SendMoney = () => {
  const [amount, setAmount] = useState('');
  const [beneficiary, setBeneficiary] = useState('');
  const dispatch = useDispatch();

  const handleSendMoney = async () => {
    try {
      const response = await sendMoney({ amount, beneficiary });
      alert('Money sent successfully!');
      // Dispatch action to update state if needed
    } catch (error) {
      alert('Failed to send money.');
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Send Money</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Beneficiary"
          value={beneficiary}
          onChange={(e) => setBeneficiary(e.target.value)}
          className="border rounded w-full p-3 mb-4"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded w-full p-3 mb-4"
        />
        <button
          onClick={handleSendMoney}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default SendMoney;