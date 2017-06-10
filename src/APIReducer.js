
export default function ApiReducer(state = {}, action) {
    switch (action.type) {
        case 'GET_PHOTOS_REQUEST': {
            return action.events;
        }
        case 'GET_EVENTS_FAILURE':
        case 'GET_EVENTS_SUCCESS': {
            return action.payload;
        }
        default:
            return state;
    }
}
