import React from 'react';

import Lection from './Lection'
import Deadline from './Deadline'
import DateTimeHelper from './Helper/DateTimeHelper'

const nameOfDay = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

export default class CalendarWeekView  extends React.Component{


    slideToPrevWeek = () => this.props.slideCalendar.slideToPrevWeek(store.getState().dateState);

    slideToNextWeek = () => this.props.slideCalendar.slideToNextWeek(store.getState().dateState);

    filterEventsByHour(hour, events) {
        console.log(hour);
        return events.filter(function(event) {
            return (DateTimeHelper.getStartOfHour(event.start).valueOf() == hour.valueOf());
        });
    }

    render() {

        let resultArr = [];
        for (let i=0; i<=6; i++) {
            let cell = nameOfDay[i] + '/' + this.props.calendarWeek.getFormattedDays()[i];
            resultArr.push(cell)
        }

        return (
            <div>
                <a onClick= {::this.slideToPrevWeek} href='javascript: void(0)'>Previus Week</a>
                <a onClick= {::this.slideToNextWeek} href='javascript: void(0)'>Next Week</a>
                <table>
                    <thead>
                        <tr>
                            <td></td>
                            {resultArr.map(name => <td key={name.toString()}>{name}</td>)}
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.calendarWeek.getDays()[0].getHours().map(function(hour, hourIndex){
                        return <tr key={this.props.calendarWeek.startOfWeek.format('D/M/Y') + hour.format('H:mm')}>
                            <td>{hour.format('H:mm')}</td>
                            {this.props.calendarWeek.getDays().map(function(day){

                                return <td key={day.startOfDay.valueOf()}>{this.filterEventsByHour(day.getHours()[hourIndex].valueOf(), this.props.events).map(function(event) {
                                    if (event.type == 'deadline') {
                                        return <Deadline key={event.id} eventData = {event} /* trainers = {::this.getTrainersNames(event.speakers)} *//>
                                    }
                                    else if (event.type == 'webinar' || event.type == 'lection ') {
                                        return <Lection key={event.id} eventData = {event} />;
                                    }
                                })}</td>

                            }.bind(this))}
                            </tr>
                    }.bind(this))}
                    </tbody>
                </table>
            </div>
        )
    }
}
