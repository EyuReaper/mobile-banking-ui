import { SET_TRANSACTIONS } from './actions';


const initialState = {
    balance: 1000, // set for demo purpose
    holdername: 'john Doe', // example account holder name
    transactions: [],
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TRANSACTIONS:
            return {
                ...state,
                Transactions: action.payload,
            };
        default:
            return state;
}
};

export default accountReducer;