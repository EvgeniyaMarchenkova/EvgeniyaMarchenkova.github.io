import React from 'react';

import { Table, Label, Header, Container, Icon } from 'semantic-ui-react'

import Deadline from './Deadline'
import Lection from './Lection'
import DateTimeHelper from './Helper/DateTimeHelper'
import styles from "../css/main.css";


const nameOfDay = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

const monthObj = {0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June', 6:'July', 7:'August', 8: 'September', 9:'October', 10: 'November', 11:'December'}  ;

export default class CalendarMonthView extends React.Component{

    slideToPrevMonth = () =>  this.props.slideCalendar.slideToPrevMonth(store.getState().dateState);

    slideToNextMonth = () =>  this.props.slideCalendar.slideToNextMonth(store.getState().dateState);

    render() {
        let props = this.props;
        let getTrainersNamesFunction = this.getTrainersNames;
        return (
            <div>
                <div className="headerMonthTable">
                    <a  onClick= {::this.slideToPrevMonth} href='javascript: void(0)'><Icon name="chevron left" />previus month</a>
                    <Header size="large">{monthObj[this.props.calendarMonth.startOfMonth.month()]}</Header>
                    <a  onClick= {::this.slideToNextMonth} href='javascript: void(0)'>next month<Icon name="chevron right" /></a>
                </div>
                <Table  inverted celled>
                    <Table.Header>
                        <Table.Row>
                            {nameOfDay.map(name => <Table.HeaderCell key={name.toString()}>{name}</Table.HeaderCell>)}
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.props.calendarMonth.getWeeks().map(function(week) {
                            return <Table.Row key={week.startOfWeek.isoWeek()}>{week.getDays().map(function(day) {
                                return <Table.Cell key={day.startOfDay.valueOf()}
                                                   { ...(day.startOfDay.month()!=this.props.calendarMonth.startOfMonth.month() && { disabled: true } ) }>

                                    {day.startOfDay.format("D")}
                                    {props.filterEventsByDate(day.startOfDay.valueOf(), props.events).map(function(event) {
                                        if (event.type == 'deadline') {
                                            return <Deadline key={event.id}
                                                             eventData = {event}
                                                             getTrainersNames = {this.props.getTrainersNames}/>
                                        }
                                        else if (event.type == 'webinar' || event.type == 'lection ') {
                                            return <Lection key={event.id}
                                                            eventData = {event}
                                                            getTrainersNames = {this.props.getTrainersNames}/>
                                        }
                                    }.bind(this))}
                                </Table.Cell>;
                            }.bind(this))}</Table.Row>
                        }.bind(this))}

                    </Table.Body>

                </Table>

            </div>
        )
    }
}
