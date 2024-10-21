import {createStore, combineReducers} from 'redux';
import accountReducer from './accountReducer';
import transactionReducer from './transactionReducer';
import sendMoneyReducer from './sendMoneyReducer';

const rootReducer = combineReducers({
    
    account: accountReducer,
    transactions: transactionReducer,
    sendMoney: sendMoneyReducer
});

const store = createStore(rootReducer);

export default store;