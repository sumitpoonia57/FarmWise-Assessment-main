// actions/fieldActions.js

export const addField = (field) => {
    return {
        type: 'ADD_FIELD',
        payload: field,
    };
};

export const clearFields = () => {
    return {
        type: 'CLEAR_FIELDS',
    };
};