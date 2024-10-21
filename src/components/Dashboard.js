// src/components/Dashboard.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAccount } from '../store/actions';
import { getAccountDetails, getTransactions } from '../services/bankingApi';

const Dashboard = () => {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const transactions = useSelector((state) => state.transactions);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      const response = await getAccountDetails();
      dispatch(setAccount(response.data));
    };

    const fetchTransactions = async () => {
      const response = await getTransactions();
      response.data.forEach((transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
      });
    };

    fetchAccountDetails();
    fetchTransactions();
  }, [dispatch]);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Account Overview</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl">Total Balance: <span className="text-green-500">${account.balance}</span></h2>
        <p className="text-gray-600">Account Holder: {account.holderName}</p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Recent Transactions</h2>
        <ul className="mt-4 space-y-4">
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

export default Dashboard;