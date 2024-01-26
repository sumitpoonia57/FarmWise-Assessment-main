// reducers/fieldReducer.js

const initialState = {
    fields: [],
};

const fieldReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FIELD':
            const newState = {
                ...state,
                fields: [...state.fields, action.payload],
            };
            localStorage.setItem('fields', JSON.stringify(newState.fields));
            return newState;

        case 'CLEAR_FIELDS':
            localStorage.setItem('fields', JSON.stringify([]));  
            return { ...state, fields: [] };  // Clear fields in state

        default:
            return state;
    }
};

export default fieldReducer;
