import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import  HeaderCalendar from './components/HeaderCalendar'
import CalendarTableContainer from './components/CalendarTableContainer'
import * as selectMode from './actions/index'


class App  extends React.Component {



    render() {


        return (
            <Router history={hashHistory}>
                <Route path="/" component={HeaderCalendar} selectMode = {this.props.selectMode}>
                    <Route path="/:reponame" component={CalendarTableContainer} selectedMode = {this.props.selectedMode}/>
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

function mapDispatchToProps(dispatch) {
    return {
        selectMode: bindActionCreators(selectMode, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
