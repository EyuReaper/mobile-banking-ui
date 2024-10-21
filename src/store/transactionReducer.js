const initialState = [
    //example of transaction data
    {id:1, description: 'Deposit', amount: 200, date: '2024-10-1'},
    {id:2, description: 'Withdrawal', amount: 100, date: '2024-10-05'},

];

const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        // define any action related to transaction state here
        default:
            return state;
    }
};

export default transactionReducer;