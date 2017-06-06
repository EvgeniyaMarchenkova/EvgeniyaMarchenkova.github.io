import React from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);
import Calendar from './Calendar';
import CalendarMonth from './Model/CalendarMonth';
import CalendarWeek from './Model/CalendarWeek'



export default class  extends React.Component {

    state = {
        isWeek: false
    }

    static propTypes = {
        calendarMonth: React.PropTypes.object.isRequired,
        calendarWeek: React.PropTypes.object.isRequired
    }

    static defaultProps = {
        calendarMonth: new CalendarMonth(),
        calendarWeek: new CalendarWeek()
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
        const {
            calendarMonth,
            calendarWeek
        } = this.props
        return (
            <Calendar {...this.props}  /* switchToWeek = {this.switchToWeek} switchToMonth = {this.switchToMonth} *//>
        )
    }
}


