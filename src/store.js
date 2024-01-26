
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers';

const storedFields = JSON.parse(localStorage.getItem('fields')) || [];

const store = createStore(rootReducer, { fields: { fields: storedFields } }, applyMiddleware(thunk));

export default store;
