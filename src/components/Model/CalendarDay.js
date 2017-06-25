import moment from 'moment';
import DateTimeHelper from '../Helper/DateTimeHelper'

export default class CalendarDay {

    constructor(date = moment()) {

        this.setDay(date);
    }

    setDay(date) {

        this.startOfDay = DateTimeHelper.getStartOfDay(date);
        this.endOfDay = DateTimeHelper.getEndOfDay(date);

        this.hours = [];
        let hour = moment(this.startOfDay);
        while (hour <= this.endOfDay) {
            this.hours.push(moment(hour));
            hour.add(1, 'hour');
        }
    }

    getHours() {
        return this.hours;
    }
}
