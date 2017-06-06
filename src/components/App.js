import React from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);
import Calendar from './Calendar';
import CalendarMonth from './Model/CalendarMonth';
import CalendarWeek from './Model/CalendarWeek'
import NavLink from './NavLink'



export default class  extends React.Component {

    state = {
        isWeek: false
    }

    static propTypes = {
        calendarMonth: React.PropTypes.object.isRequired,
        calendarWeek: React.PropTypes.object.isRequired
    }

    static defaultProps = {
        calendarMonth: new CalendarMonth(),
        calendarWeek: new CalendarWeek()
    }

    switchToWeek = (e) => {
        e.preventDefault();
        this.setState({ isWeek: true});
    }

    switchToMonth = (e) => {
        e.preventDefault()
        this.setState({ isWeek: false})
    }

    render() {
        const {
            calendarMonth,
            calendarWeek
        } = this.props
        return (
            <div>
                <h1>RS-calendar</h1>
                    <ul role="nav">
                    <li><NavLink onClick={this.switchToWeek} to="/weeks">Weeks</NavLink></li>
                    <li><NavLink onClick={this.switchToMonth} to="/month">Month</NavLink></li>
                    </ul>
                {this.props.children}
            </div>
        )
    }
}


