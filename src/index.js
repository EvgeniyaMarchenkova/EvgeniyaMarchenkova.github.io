import React from 'react'
import { Provider } from 'react-redux';
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import store from './store';
import App from './components/App'
import Months from './components/Months'
import Weeks from './components/Weeks'


render(
    <Provider store={store}>
        <Router history={hashHistory}>
        <Route path="/" component={App}>
        <Route path="/:repoName" component={Weeks}/>
        <Route path="/:repoName" component={Months}/>
        </Route>
        </Router>
    </Provider>,
    document.getElementById('app'))
