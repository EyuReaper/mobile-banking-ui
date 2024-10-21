import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000",
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