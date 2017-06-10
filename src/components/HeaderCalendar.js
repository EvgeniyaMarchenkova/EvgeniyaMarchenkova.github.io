import React from 'react'
import NavLink from './NavLink'
import CalendarWeek from './Model/CalendarWeek'
import CalendarMonth from './Model/CalendarMonth'

export default class HeaderCalendar  extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        /*if (props.selectedMode == 'week') {
            props.calendar = new CalendarWeek();
        } else {
            props.calendar = new CalendarMonth();
        }*/

    }

    switchToMonth = () => this.props.route.selectMode.selectMode('month')

    switchToWeek = () => this.props.route.selectMode.selectMode('week')

    render() {
        return (
            <div>
            <h1>RS-calendar</h1>
            <ul role="nav">
                <li><NavLink to="/week">Weeks</NavLink></li>
                <li><NavLink to="/month">Month</NavLink></li>
            </ul>
                    <div>
            {this.props.children}
                    </div>

            </div>
    )
    }
}
