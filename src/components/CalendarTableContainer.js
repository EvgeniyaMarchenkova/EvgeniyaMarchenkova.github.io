import React from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

import DateTimeHelper from './Helper/DateTimeHelper'
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
            dateState: store.getState().dateState,
            events: store.getState().events.items,
        };

        this.calendarMonth = new CalendarMonth();
        this.calendarWeek = new CalendarWeek();

    }

    changeDate() {
            let date = store.getState().dateState;
            this.state.calendarMonth.setMonth(date);
            this.state.calendarWeek.setWeek(date);
            this.setState({
                dateState: date,
                events: store.getState().events.items
            });
    }

    filterEventsByDate(date, events) {
        return events.filter(function(event) {
            return (DateTimeHelper.getStartOfDay(event.start).valueOf() == date.valueOf());
        });
    }

    getTrainersNames(eventData) {
        let urls = eventData.speakers.map(function (id) {
            return fetch('http://localhost:4000/trainers/' + id)
                .then(function (response) {
                    return response.json();
                })
                .then(function (response) {
                    return response.name;
                })

        });
        console.log(this)
        Promise.all(urls).then(values => {
            console.log(this)
            this.setState({
                trainers : values.join(',')
            });
        })
    }

    render() {


        if (this.props.location.pathname == "/week") {
            return  <CalendarWeekView shownDateMonth={this.state.dateState.month()}
                                      calendarWeek = {this.state.calendarWeek}
                                      slideCalendar = {this.props.route.slideCalendar}
                                      events = {this.state.events}
                                      filterEventsByDate = {this.filterEventsByDate }
                                      getTrainersNames = {this.getTrainersNames} />
        }
        return  <CalendarMonthView shownDateWeek={this.state.dateState.week()}
                                   calendarMonth = {this.state.calendarMonth}
                                   slideCalendar = {this.props.route.slideCalendar}
                                   events = {this.state.events}
                                   filterEventsByDate = {this.filterEventsByDate }
                                   getTrainersNames = {this.getTrainersNames} />
    }
}

