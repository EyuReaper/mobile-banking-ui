const initialState = {
    balance: 1000, // set for demo purpose
    holdername: 'john Doe', // example account holder name

};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        // define any action related to account state here
        default:
            return state;
}
};

export default accountReducer;