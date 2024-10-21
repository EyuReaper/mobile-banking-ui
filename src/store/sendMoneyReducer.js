const initialState = {
    status: '', // track status of money transfer

};

const sendMoneyReducer = (state = initialState, action) => {
    switch (action.type) {
        //define any action related to sending money here
        default:
            return state;
    }
};

export default sendMoneyReducer;