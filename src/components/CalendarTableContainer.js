import React from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

import CalendarMonth from './Model/CalendarMonth';
import CalendarWeek from './Model/CalendarWeek'
import CalendarMonthView from './CalendarMonthView'
import CalendarWeekView from './CalendarWeekView'



let nameOfDay = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

export default class Weeks  extends React.Component {


    static propTypes = {
        calendarMonth: React.PropTypes.object.isRequired,
        calendarWeek: React.PropTypes.object.isRequired
    }

    static defaultProps = {
        calendarMonth: new CalendarMonth(),
        calendarWeek: new CalendarWeek()
    }


    render() {

        const {
            calendarMonth,
            calendarWeek
        } = this.props
        if (this.props.route.isWeek) {
            return  <CalendarWeekView  calendarWeek = {this.props.calendarWeek }/>
        }
        return <CalendarMonthView calendarMonth = {this.props.calendarMonth }/>
    }
}

