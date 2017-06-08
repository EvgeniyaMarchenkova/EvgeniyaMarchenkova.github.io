import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import connect from 'react-redux'

import  HeaderCalendar from './components/HeaderCalendar'
import CalendarTableContainer from './components/CalendarTableContainer'

export default class App  extends React.Component {


    switchToMonth = () => {this.props.dispatch(selectedMode('month'))}

    switchToWeek = () => {this.props.dispatch(selectedMode('week'))}

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={HeaderCalendar} {...this.props}>
                    <Route path="/:reponame" component={CalendarTableContainer} {...this.props}/>
                </Route>
            </Router>
        )
    }
}

function mapStateToProps (state) {
    return {
        selectedMode: state
    }
}

//export default connect(mapStateToProps)(App)
