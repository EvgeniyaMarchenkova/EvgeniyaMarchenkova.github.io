import { createStore,  applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import switchReducer from './switchReducer';
import { Api } from './API';


const middleware = [ thunk ]

const store = createStore(
    switchReducer,
    applyMiddleware(middleware)
)

window.store = store;


export default store;

