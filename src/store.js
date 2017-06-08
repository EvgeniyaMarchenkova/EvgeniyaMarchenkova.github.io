import { createStore,  applyMiddleware } from 'redux';
import logger from 'redux-logger'

import switchReducer from './switchReducer';
import { Api } from './components/API';


const store = createStore(
    switchReducer,
    applyMiddleware(logger)
)

window.store = store;


export default store;

