import React from 'react'
import Calendar from './Calendar'
import CalendarMonth from './Model/CalendarMonth'


export default class  extends React.Component {
    constructor(props) {
       let calendarMonth = new CalendarMonth();
       console.log(calendarMonth.getWeeks());
       super(props);
       this.state = {
        isWeek: false
       }
    }

    render() {
        return (
            <Calendar {...this.props}/>
        )
    }
}


