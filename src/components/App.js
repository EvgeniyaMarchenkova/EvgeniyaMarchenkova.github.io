import React from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { Router, Route, hashHistory } from 'react-router'

const moment = extendMoment(Moment);
import Calendar from './Calendar';
import CalendarMonth from './Model/CalendarMonth';
import CalendarWeek from './Model/CalendarWeek'
import NavLink from './NavLink'
import  HeaderCalendar from './HeaderCalendar'
import Weeks from './CalendarTableContainer'


export default class App  extends React.Component {


    render() {
        return (
            <Router history={hashHistory}>
            <Route path="/" component={HeaderCalendar} switchToWeek = {this.props.switchToWeek} switchToMonth = {this.props.switchToMonth}>
            <Route path="/:reponame" component={Weeks} isWeek = {this.props.isWeek}/>
            </Route>
            </Router>

        )
    }
}


