export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_MODE = 'SELECT_MODE'
export const UPDATE_DATA = 'UPDATE_DATA'

export const selectMode = mode => ({
    type: SELECT_REDDIT,
    payload: mode
})

export const updateData = data => ({
    type: UPDATE_DATA,
    payload: data
})

export const requestPosts = reddit => ({
    type: REQUEST_POSTS,
    payload: reddit
})

export const receivePosts = (reddit, json) => ({
    type: RECEIVE_POSTS,
    reddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
})

const fetchPosts = reddit => dispatch => {
    dispatch(requestPosts(reddit))
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(reddit, json)))
}

const shouldFetchPosts = (state, reddit) => {
    const posts = state.postsByReddit[reddit]
    if (!posts) {
        return true
    }
    if (posts.isFetching) {
        return false
    }
    return posts.didInvalidate
}

export const fetchPostsIfNeeded = reddit => (dispatch, getState) => {
    if (shouldFetchPosts(getState(), reddit)) {
        return dispatch(fetchPosts(reddit))
    }
}
