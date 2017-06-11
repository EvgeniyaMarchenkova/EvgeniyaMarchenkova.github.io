import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import  HeaderCalendar from './components/HeaderCalendar'
import CalendarTableContainer from './components/CalendarTableContainer'
import CalendarWeekContainer from './components/CalendarWeekContainer'
import CalendarMonthContainer from './components/CalendarMonthContainer'
import * as selectMode from './actions/index'
import * as fetchEvents from './actions/Api'
import * as slideCalendar from './actions/slideCalendar'


class App  extends React.Component {

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={HeaderCalendar}>
                    <Route path="/week" component={CalendarTableContainer} slideCalendar={this.props.slideCalendar} />
                    <Route path="/month" component={CalendarTableContainer}  slideCalendar={this.props.slideCalendar}  />
                </Route>
            </Router>
        )
    }
}

function mapStateToProps (store) {
    return {
        selectedMode: store.modeState,
        shownDate: store.dateState
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectMode: bindActionCreators(selectMode, dispatch),
        fetchEvents:bindActionCreators(fetchEvents, dispatch),
        slideCalendar:bindActionCreators(slideCalendar, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
