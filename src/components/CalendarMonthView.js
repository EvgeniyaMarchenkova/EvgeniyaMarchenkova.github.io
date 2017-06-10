import React from 'react';


const nameOfDay = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

export default React.createClass({

    render() {
        const rows = this.props.calendarMonth.getFormattedDays().map(function (item, i){
            const entry = item.map(function (element, j) {
                return (
                    <td key={j}> {element} </td>
                );
            });
            return (
                <tr key={i}> {entry} </tr>
            );
        });
        return (


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
    )
    }
})
