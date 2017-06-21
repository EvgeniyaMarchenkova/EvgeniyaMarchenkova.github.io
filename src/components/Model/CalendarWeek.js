import moment from 'moment';
import DateTimeHelper from '../Helper/DateTimeHelper'
import CalendarDay from './CalendarDay'

export default class CalendarWeek {

    constructor(date = moment()) {
        this.showedWeek = date;
        this.setWeek(date);
    }

    setWeek(date) {

        this.startOfWeek = DateTimeHelper.getStartOfWeek(date);
        this.endOfWeek = DateTimeHelper.getEndOfWeek(date);

        if (!this.days) {
            this.days = [];
            let date = moment(this.startOfWeek);
            while (date <= this.endOfWeek) {
                this.days.push(new CalendarDay(date));
                date.add(1, 'day');
            }
        }
    }

    getDays() {

        return this.days;
    }

    getFormattedDays() {

        const range = moment.range(this.startOfWeek, this.endOfWeek);
        return Array.from(range.by('day')).map(m => m.format('DD'))
    }

    getArrayOfDays() {

        const range = moment.range(this.startOfWeek, this.endOfWeek);
        return Array.from(range.by('day'))
    }

}
