import moment from 'moment';
import DateTimeHelper from '../Helper/DateTimeHelper'
import CalendarWeek from './CalendarWeek'
import _ from 'lodash';

export default  class CalendarMonth {

    constructor(date = moment()) {

        this.setMonth(date);
    }

    setMonth(date) {

        this.startOfMonth = DateTimeHelper.getStartOfMonth(date);
        this.endOfMonth = DateTimeHelper.getEndOfMonth(date);
    }

    getWeeks() {

        if (!this.weeks) {
            this.weeks = [];
            let date = moment(this.startOfMonth);
            while (date <= this.endOfMonth) {
                this.weeks.push(new CalendarWeek(date));
                date.add(1, 'week');
            }
        }

        return this.weeks;
    }

    getFormattedDays() {

        const weeks = this.getWeeks();
        const range = moment.range(this.weeks[0].startOfWeek, this.weeks[4].endOfWeek);

        return _.chunk(Array.from(range.by('day')).map(m => m.format('DD')),7)
    }
}
