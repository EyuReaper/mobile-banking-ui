const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const cors = require('cors');
app.use(cors()); //enable CORS
app.use(express.json()); //enable JSON

// Mock data for account and transactions
const account = {
    balance: 1000,
    holderName: 'John Doe',
};

const transactionsData = [
    {
        id: 1,
        date: '2024-01-01',
        type: 'deposit',
        amount: 500,
    },
    {
        id: 2,
        date: '2024-01-02',
        type: 'withdrawal',
        amount: 200,
    },
    {
        id: 3,
        date: '2024-01-03',
        type: 'transfer',
        amount: 100,
        recipient: 'Jane Doe',
    },
];

// API routes
app.get('/account', (req, res) => {
    res.status(200).json(accountData);
});

app.get('/transactions', (req, res) => {
    res.status(200).json(transactionsData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});