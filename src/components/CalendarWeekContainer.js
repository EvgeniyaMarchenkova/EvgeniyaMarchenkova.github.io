import React from 'react'
import {connect} from 'react-redux'

import CalendarWeek from './Model/CalendarWeek';
import CalendarWeekView from './CalendarWeekView'

export default class CalendarWeekContainer  extends React.Component {


    static defaultProps = {
        calendar: new CalendarWeek(),
    }

    render() {
        return  <CalendarWeekView  calendarWeek = {this.props.calendar }/>
    }
}
