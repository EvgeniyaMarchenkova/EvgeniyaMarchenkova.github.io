import React from 'react';

import Deadline from './Deadline'
import DateTimeHelper from './Helper/DateTimeHelper'


const nameOfDay = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

export default class CalendarMonthView extends React.Component{

    slideToPrevMonth = () =>  this.props.slideCalendar.slideToPrevMonth(store.getState().dateState);

    slideToNextMonth = () =>  this.props.slideCalendar.slideToNextMonth(store.getState().dateState);



    render() {

        var events = this.props.events;
        function filterEventsByDate(date) {
            return events.filter(function(event) {
                return (DateTimeHelper.getStartOfDay(event.start).valueOf() == date.valueOf());
            });
        }
        filterEventsByDate.bind(this);


        return (
            <div>
                <Deadline/>
                <a onClick= {::this.slideToPrevMonth} href='javascript: void(0)'>Previus Month</a>
                <a onClick= {::this.slideToNextMonth} href='javascript: void(0)'>Next Month</a>
                <table>
                    <thead>
                        <tr>
                        {nameOfDay.map(name => <td key={name.toString()}>{name}</td>)}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.calendarMonth.getWeeks().map(function(week) {

                            return <tr key={week.startOfWeek.isoWeek()}>{week.getDays().map(function(day) {
                                            return <td key={day.startOfDay.valueOf()}
                                                       className={day.startOfDay.month()}
                                            >{day.startOfDay.format("D")}
                                                {filterEventsByDate(day.startOfDay.valueOf()).map(function(event) {
                                                    return <div>{event.title}</div>
                                                })}</td>;
                            })}</tr>
                        })}
                    </tbody>
                </table>
            </div>
    )
    }
}
