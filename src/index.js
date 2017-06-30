import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';


require("./css/main.css");

import App from './App';
import store from './store';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#app')
);
