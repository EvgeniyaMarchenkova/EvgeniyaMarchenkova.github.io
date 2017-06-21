import moment from 'moment';

export default class DateTimeHelper {

    static getStartOfWeek(date) {
        return moment(date).isoWeekday(1);
    }

    static getEndOfWeek(date) {
        return moment(date).isoWeekday(7);
    }

    static getStartOfMonth(date) {
        return moment(date).startOf('month');
    }

    static getEndOfMonth(date) {
        return moment(date).endOf('month');
    }

    static getStartOfDay(date) {
        return moment(date).startOf('day');
    }

    static getEndOfDay(date) {
        return moment(date).endOf('day');
    }

    static getStartOfHour(date) {
        return moment(date).startOf('hour');
    }
}
