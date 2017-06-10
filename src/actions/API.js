export function fetchEvents() {

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
