import moment from 'moment';
import DateTimeHelper from '../Helper/DateTimeHelper'

export default  class CalendarDay {

    constructor(date = moment()) {

        this.setDay(date);
    }

    setDay(date) {

        this.startOfDay = DateTimeHelper.getStartOfDay(date);
        this.endOfDay = DateTimeHelper.getEndOfDay(date);
    }

    getHours() {
        if (!this.hours) {
            this.hours = [];
            let date = moment(this.startOfDate);
            while (date <= this.endOfWeek) {
                this.days.push(moment(date));
                date.add(1, 'hour');
            }
        }
        return this.hours;
    }
}
