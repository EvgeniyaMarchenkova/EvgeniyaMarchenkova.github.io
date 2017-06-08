
export default function switchReducer(state = 'month', action) {
    switch (action.type) {
        case 'SELECT_MODE': {
            return action.payload;
        }
        default:
            return state;
    }
}



