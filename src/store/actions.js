// src/store/actions.js

// Define action types
export const SET_ACCOUNT = 'SET_ACCOUNT';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const UPDATE_SEND_MONEY_STATUS = 'UPDATE_SEND_MONEY_STATUS';
export const SET_TRANSACTIONS = 'SET_TRANSACTIONS'; // Moved up for clarity

// Action creators
export const setAccount = (accountDetails) => ({
    type: SET_ACCOUNT,
    payload: accountDetails,
});

export const addTransaction = (transaction) => ({ // Changed to camelCase
    type: ADD_TRANSACTION,
    payload: transaction,
});

export const updateSendMoneyStatus = (status) => ({ // Changed to camelCase
    type: UPDATE_SEND_MONEY_STATUS,
    payload: status,
});

export const setTransactions = (transactions) => ({
    type: SET_TRANSACTIONS,
    payload: transactions,
});