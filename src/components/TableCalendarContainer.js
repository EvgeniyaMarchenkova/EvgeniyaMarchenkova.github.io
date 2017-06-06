import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { List } from 'immutable';
import ReactDOM from 'react-dom';

import CalendarWeek from './CalendarWeek';
import CalendarMonth from './CalendarMonth';


export default class TableCalendarContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isWeek: false
        }
    }

    switchToWeek() {
        this.setState({
            isWeek: true
        });
    }

    switchToMonth() {
        this.setState({
            isWeek: false
        });
    }

    render() {
        if (this.state.isWeek) {
            return <CalendarWeek />;
        }
        return <CalendarMonth />;
    }
}




