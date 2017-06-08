import { createStore, combineReducers, applyMiddleware } from 'redux';
import switchReducer from './switchReducer';
import { Api } from './components/API';

const store = createStore(switchReducer);

window.store = store;


export default store;
