import { createStore,  applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from './reducers';

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

window.store = store;


export default store;

