import React from 'react';

import Deadline from './Deadline'
import Lection from './Lection'
import DateTimeHelper from './Helper/DateTimeHelper'
import styles from "../css/main.css";


const nameOfDay = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

export default class CalendarMonthView extends React.Component{

    constructor(props) {
        super(props);

    }

    getTrainersNames(arr) {
        let trainersNameArr = [];
        console.log(arr);
        if (arr) {
            arr.forEach(function (id) {
                fetch('http://localhost:4000/trainers/' + id)
                    .then(function (response) {
                        trainersNameArr.push(response.name)
                    })
            });
        }
        return trainersNameArr.join(',');

    }

    slideToPrevMonth = () =>  this.props.slideCalendar.slideToPrevMonth(store.getState().dateState);

    slideToNextMonth = () =>  this.props.slideCalendar.slideToNextMonth(store.getState().dateState);

    render() {
        let props = this.props;
        let getTrainersNamesFunction = this.getTrainersNames;
        return (
            <div>
                <style jsx>{`
                        table {
                            border-collapse: collapse;
                            margin: 0 auto;
                        }
                        td {
                            height: 80px;
                            width: 100px;
                            border: 1px solid grey;
                            position: relative;
                            text-align:center;
                        }
                        thead td {
                            height: 50px;
                        }

                    `}</style>
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
                                                       className={day.startOfDay.month()}> {day.startOfDay.format("D")}

                                                {props.filterEventsByDate(day.startOfDay.valueOf(), props.events).map(function(event) {

                                                    if (event.type == 'deadline') {
                                                        return <Deadline key={event.id} eventData = {event}  trainers = {this.getTrainersNames(event.speakers)} />
                                                    }
                                                    else if (event.type == 'webinar' || event.type == 'lection ') {
                                                        return <Lection key={event.id} eventData = {event} />
                                                    }
                                                }.bind(this))}
                                                </td>;
                            }.bind(this))}</tr>
                        }.bind(this))}
                    </tbody>
                </table>
            </div>
        )
    }
}
