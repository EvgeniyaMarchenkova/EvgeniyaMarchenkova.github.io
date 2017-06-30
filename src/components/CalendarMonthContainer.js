import React from 'react'
import {connect} from 'react-redux'

import CalendarMonth from './Model/CalendarMonth';
import CalendarMonthView from './CalendarMonthView'

export default class CalendarMonthContainer  extends React.Component {


    static defaultProps = {
        calendar: new CalendarMonth(),
    }

    render() {
        return  <CalendarMonthView  calendarMonth = {this.props.calendar }/>
    }
}
