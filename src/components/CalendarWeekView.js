import React from 'react';

const nameOfDay = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

export default class CalendarWeekView  extends React.Component{

    slideToPrevWeek = (date) => this.props.slideCalendar.slideToPrevWeek(date)

    slideToNextWeek = (date) => this.props.slideCalendar.slideToNextWeek(date)

    render() {
        console.log(this.props)
        let resultArr = [];
        for (let i=0; i<=6; i++) {
            let cell = nameOfDay[i] + '/' + this.props.calendarWeek.getFormattedDays()[i];
            resultArr.push(cell)
        }
        return (
            <div>
                <a onClick= {::this.slideToPrevWeek} href='#'>Previus Week</a>
                <a onClick= {::this.slideToNextWeek} href='#'>Next Week</a>
                <table>
                    <thead>
                        <tr>
                        {resultArr.map(name => <td key={name.toString()}>{name}</td>)}
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
    )
    }
}
