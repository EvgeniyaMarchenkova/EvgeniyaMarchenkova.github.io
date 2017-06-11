import { createStore,  applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from './reducers';

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

window.store = store;

Object.defineProperty(window, 'state', {
    get() {
        return store.getState();
    }
});


export default store;

