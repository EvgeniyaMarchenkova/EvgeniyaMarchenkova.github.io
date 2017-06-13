import React from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

import CalendarMonth from './Model/CalendarMonth';
import CalendarWeek from './Model/CalendarWeek'
import CalendarMonthView from './CalendarMonthView'
import CalendarWeekView from './CalendarWeekView'



let nameOfDay = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

export default class CalendarTableContainer  extends React.Component {

    calendarMonth = new CalendarMonth();
    calendarWeek = new CalendarWeek();

    constructor(props) {
        super(props);
        let unsubscribe = store.subscribe(::this.changeDate);
        this.state = {
            calendarMonth: new CalendarMonth(),
            calendarWeek: new CalendarWeek(),
            dateState: store.getState().dateState.format('D/M/Y'),
            events: store.getState().events.items
        };

        this.calendarMonth = new CalendarMonth();
        this.calendarWeek = new CalendarWeek();
    }


        changeDate() {

            let date = store.getState().dateState;
            this.state.calendarMonth.setMonth(date);
            this.state.calendarWeek.setWeek(date);
            this.setState({
                dateState: date.format('D/M/Y'),
                events: store.getState().events.items
            });
        }



        static propTypes = {
            calendarMonth: React.PropTypes.object.isRequired,
            calendarWeek: React.PropTypes.object.isRequired,
    /*        slideCalendar: React.PropTypes.object.isRequired,
            selectedMode: React.PropTypes.string.isRequired*/
        }

    render() {

        if (this.props.location.pathname == "/week") {
            return  <CalendarWeekView  calendarWeek = {this.state.calendarWeek} slideCalendar = {this.props.route.slideCalendar} events = {this.state.events} />
        }
        return  <CalendarMonthView  calendarMonth = {this.state.calendarMonth} slideCalendar = {this.props.route.slideCalendar} events = {this.state.events} />
    }
}

