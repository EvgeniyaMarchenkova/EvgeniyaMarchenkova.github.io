import Immutable from 'immutable';
window.Immutable = Immutable;

const initialState = Immutable.List();

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SWITCH_TO_WEEK': {
            const calendar = createTable(week);
            return state.push(calendar);
        }
        case 'SWITCH_TO_MONTH': {
            const calendar = createTable(month);
            return state.push(calendar);
        }

        default:
            return state;
    }
}
