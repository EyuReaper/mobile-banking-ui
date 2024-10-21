export const SET_ACCOUNT = 'SET_ACCOUNT';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const UPDATE_SEND_MONEY_STATUS = 'UPDATE_SEND_MONEY_STATUS';

export const setAccount = (accountDetails) => ({
    type: SET_ACCOUNT,
    payload: accountDetails,
});

export const AddTransaction = (transaction) => ({
    type: ADD_TRANSACTION,
    payload: transaction,
});

export const UPDATESendMoneyStatus = (status) => ({
    type: UPDATE_SEND_MONEY_STATUS,
    payload: status,
});