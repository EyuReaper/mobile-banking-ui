import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000",
});

export const getAccountDetails = () => {
    return instance.get("/account");
};

export const getTransactions = () => {
    return instance.get("/transactions");
};

export const sendMoney = (data) => {
    return instance.post('/transfers', data);
};

const fetchAccountDetails = async() => {
    try{
        const response = await getAccountDetails();
        console.log('Account details', response.data);
    }catch(error){
        console.log('Error fetching account details', error.message);
    }
};

const fetchTransactions = async() => {
    try{
        const response = await getTransactions();
        console.log('Transactions', response.data);
    }catch(error){
        console.log('Error fetching transactions', error.message);
    }
};