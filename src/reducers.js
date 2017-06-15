import moment from 'moment';
import { combineReducers } from 'redux';

function switchReducer(state = 'month', action) {
    switch (action.type) {
        case 'SELECT_MODE': {
            return action.payload;
        }
        default:
            return state;
    }
}

const fetchEventsReducer = (state = {
    isFetching: false,
    items: []
}, action) => {
    switch (action.type) {
        case 'REQUEST_EVENTS':
            return {
                ...state,
                isFetching: true
            }
        case 'RECEIVE_EVENTS':
            return {
                ...state,
                isFetching: false,
                items: action.events
            }
        default:
            return state
    }
}

function slideReducer(state = moment(), action) {

    switch (action.type) {
        case 'SLIDE_NEXT_MONTH': {
            return   moment(state).add(1, 'month');
        }
        case 'SLIDE_PREV_MONTH': {
            return moment(state).subtract(1, 'month');
        }
        case 'SLIDE_NEXT_WEEK': {
            return state.clone().add(7, 'days');
        }
        case 'SLIDE_PREV_WEEK': {
            return state.clone().subtract(7, 'days');
        }
        default:
            return state;
    }
}

const reducers = combineReducers({
    modeState: switchReducer,
    events: fetchEventsReducer,
    dateState: slideReducer
});

export default reducers
