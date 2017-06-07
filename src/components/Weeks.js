import React from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);
import Calendar from './Calendar';
import CalendarMonth from './Model/CalendarMonth';
import CalendarWeek from './Model/CalendarWeek'
import NavLink from './NavLink'



export default class Weeks  extends React.Component {


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
        if (this.props.route.isWeek) {
            return <h1>111</h1>
        }
        return <h1>222</h1>
    }
}

