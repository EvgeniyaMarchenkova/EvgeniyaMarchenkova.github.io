
export default function switchReducer(state = 'month', action) {
    switch (action.type) {
        case 'SWITCH_TO_MONTH': {
            return 'month';
        }
        case 'SWITCH_TO_WEEK': {
            return 'week';
        }
        default:
            return state;
    }
}


