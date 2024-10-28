// src/components/Transactions.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransactions as fetchTransactionsAPI } from '../services/api.service';
import { setTransactions } from '../store/actions'; // Correctly import setTransactions

const Transactions = () => {
    const dispatch = useDispatch();
    const transactions = useSelector((state) => state.transactions);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetchTransactionsAPI();
                console.log('Transactions', response.data);
                dispatch(setTransactions(response.data)); // Dispatch the action
            } catch (error) {
                console.log('Error fetching transactions', error.message);
            }
        };

        fetchTransactions();
    }, [dispatch]);

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