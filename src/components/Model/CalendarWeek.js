import moment from 'moment';
import DateTimeHelper from '../Helper/DateTimeHelper'
import CalendarDay from './CalendarDay'

export default class CalendarWeek {

    constructor(date = moment()) {

        this.setWeek(date);
    }

    setWeek(date) {

        this.startOfWeek = DateTimeHelper.getStartOfWeek(date);
        this.endOfWeek = DateTimeHelper.getEndOfWeek(date);
    }

    getDays() {
        if (!this.days) {
            this.days = [];
            date = moment(this.startOfWeek);
            while (date <= this.endOfWeek) {
                this.days.push(new CalendarDay(date));
                date.add(1, 'day');
            }
        }
        return this.days;
    }
}
