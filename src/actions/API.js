
export const requestEvents = () => ({
    type: 'REQUEST_EVENTS',

})

export const receiveEvents = (json) => ({
    type: 'RECEIVE_EVENTS',
    events: json
})

/*export const fetchEvents = () => ({
    type: 'FETCH_EVENTS'
})*/

export function fetchEvents() {
    return dispatch => {
        dispatch(requestEvents());
        return fetch(`http://128.199.53.150/events`)
            .then(response => response.json())
            .then(json => dispatch(receiveEvents(json)))
    }
}
/*
export function fetchPosts() {
    return dispatch => {
        dispatch(requestEvents())
        return fetch(`http://128.199.53.150/events`)
            .then(response => response.json())
            .then(json => dispatch(receiveEvents( json)))
    }
}
*/
