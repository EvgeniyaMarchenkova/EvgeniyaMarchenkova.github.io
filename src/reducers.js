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

function fetchEventsReducer() {

    return (dispatch) => {
        dispatch({
            type: 'GET_PHOTOS_REQUEST',
            json: events
        })

        fetch('http://128.199.53.150/events')
            .then (response => response.json())
            .then (response => dispatch({
                type: 'GET_EVENTS_SUCCESS',
                payload: response.events
            }))
            .catch( error => dispatch({
                type: 'GET_EVENTS_FAILURE',
                payload: error
            }))

    }
}

function slideReducer(state = moment(), action) {

    switch (action.type) {
        case 'SLIDE_NEXT_MONTH': {
            return   state.clone().add(1, 'month');
        }
        case 'SLIDE_PREV_MONTH': {
            return state.clone().subtract(1, 'month');
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
    fetchEvents: fetchEventsReducer,
    dateState: slideReducer
});

export default reducers
