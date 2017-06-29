
import DateTimeHelper from '../Helper/DateTimeHelper'
import CalendarWeek from './CalendarWeek'
import _ from 'lodash';

import React from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

export default  class CalendarMonth {

    constructor(date = moment()) {

        this.setMonth(date);
        this.getWeeks();
    }

    setMonth(date) {

        this.startOfMonth = DateTimeHelper.getStartOfMonth(date);
        this.endOfMonth = DateTimeHelper.getEndOfMonth(date);

        this.weeks = [];
        let week = moment(this.startOfMonth);
        while (week <= this.endOfMonth) {
            this.weeks.push(new CalendarWeek(week));
            week.add(1, 'week');
        }
    }

    getWeeks() {
        return this.weeks;
    }

    getFormattedDays() {

        const range = moment.range(this.weeks[0].startOfWeek, this.weeks[4].endOfWeek);
        return _.chunk(Array.from(range.by('day')).map(m => m.format('DD')),7)
    }


    getArrayOfDays() {
        const range = moment.range(this.weeks[0].startOfWeek, this.weeks[4].endOfWeek);
        return Array.from(range.by('day'))
    }
}
