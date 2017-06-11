import React from 'react';

const nameOfDay = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

export default class CalendarWeekView  extends React.Component{


    slideToPrevWeek = () => store.dispatch(this.props.slideCalendar.slideToPrevWeek(store.getState().dateState));

    slideToNextWeek = () => store.dispatch(this.props.slideCalendar.slideToNextWeek(store.getState().dateState));

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
                { this.props.calendarWeek.startOfWeek.format('D/M/Y') }
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
