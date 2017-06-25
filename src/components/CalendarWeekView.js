import React from 'react';

import Lection from './Lection'
import Deadline from './Deadline'
import DateTimeHelper from './Helper/DateTimeHelper'
import moment from 'moment';

const nameOfDay = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
const monthObj = {0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June', 6:'July', 7:'August', 8: 'September', 9:'October', 10: 'November', 11:'December'}  ;


export default class CalendarWeekView  extends React.Component{


    slideToPrevWeek = () => this.props.slideCalendar.slideToPrevWeek(store.getState().dateState);

    slideToNextWeek = () => this.props.slideCalendar.slideToNextWeek(store.getState().dateState);

    filterEventsByHour(hour, events) {
        let evs = events.filter(function(event) {
            return (DateTimeHelper.getStartOfHour(event.start).valueOf() == hour.valueOf());
        });
        return evs;
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
                <h3>{monthObj[this.props.shownDateMonth]}</h3>
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
                                let events = this.filterEventsByHour(day.getHours()[hourIndex], this.props.events);
                                return <td key={day.startOfDay.valueOf()}>

                                    {events.map(function(event) {
                                        if (event.type == 'deadline') {
                                            return <Deadline key={event.id}
                                                             eventData = {event}
                                                             getTrainersNames = {this.props.getTrainersNames} />
                                        }
                                        else if (event.type == 'webinar' || event.type == 'lection ') {
                                            return <Lection key={event.id}
                                                            eventData = {event} />;
                                        }
                                    }.bind(this))}</td>

                            }.bind(this))}
                            </tr>
                    }.bind(this))}
                    </tbody>
                </table>
            </div>
        )
    }
}
