import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import  HeaderCalendar from './components/HeaderCalendar'
import CalendarTableContainer from './components/CalendarTableContainer'
import * as selectMode from './actions/index'
import { fetchEvents } from './actions/Api'
import * as slideCalendar from './actions/slideCalendar'


class App  extends React.Component {

    componentDidMount() {
        store.dispatch(fetchEvents());
        //store.dispatch(this.props.fetchEvents);
    }

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
        shownDate: store.dateState,
        events: store.fetchEvents
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
