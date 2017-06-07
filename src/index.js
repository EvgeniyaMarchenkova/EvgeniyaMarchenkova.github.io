import React from 'react'
import { Provider } from 'react-redux';
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import store from './store';
import App from './components/App'
import HeaderCalendar from './components/HeaderCalendar'
import Months from './components/Months'
import Weeks from './components/Weeks'

 class Index extends React.Component {

    state = {
        isWeek: false
    }

    switchToWeek = (e) => {
        e.preventDefault();
        this.setState({ isWeek: true});
    }

    switchToMonth = (e) => {
        e.preventDefault()
        this.setState({ isWeek: false})
    }

    render() {
        return <App switchToWeek = {this.switchToWeek} switchToMonth = {this.switchToMonth} isWeek = {this.state.isWeek}/>
    }

}

render(<Index />, document.getElementById('app'));





