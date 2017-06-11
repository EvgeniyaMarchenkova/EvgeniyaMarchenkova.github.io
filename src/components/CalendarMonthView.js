import React from 'react';


const nameOfDay = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

export default class CalendarMonthView extends React.Component{

    slideToPrevMonth = () =>  store.dispatch(this.props.slideCalendar.slideToPrevMonth(store.getState().dateState));

    slideToNextMonth = () =>  store.dispatch(this.props.slideCalendar.slideToNextMonth(store.getState().dateState));

    render() {
        /*const rows = this.props.calendarMonth.getFormattedDays().map(function (item, i){
            const entry = item.map(function (element, j) {
                return (
                    <td key={j}> {element} </td>
                );
            });
            return (
                <tr key={i}> {entry} </tr>
            );
        });*/
        return (
            <div>
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
                                            return <td key={day.startOfDay.valueOf()}>{day.startOfDay.format("D")}</td>;
                                        })}</tr>
                        })}
                    </tbody>
                </table>
            </div>
    )
    }
}
