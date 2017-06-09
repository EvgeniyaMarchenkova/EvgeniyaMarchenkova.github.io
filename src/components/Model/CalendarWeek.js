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
            let date = moment(this.startOfWeek);
            while (date <= this.endOfWeek) {
                this.days.push(new CalendarDay(date));
                date.add(1, 'day');
            }
        }
        return this.days;
    }

    getFormattedDays() {

        const days = this.getDays();
        const range = moment.range(this.days[0].startOfDay, this.days[6].endOfDay);

        return Array.from(range.by('day')).map(m => m.format('DD'))
    }

    prevWeek() {
        console.log(this.currentDate.add(7, 'days'))
        this.setWeek(this.currentDate.add(7, 'days'));
    }
}
