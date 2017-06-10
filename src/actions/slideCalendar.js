
export const slideToNextWeek = date => ({
    type: 'SLIDE_NEXT_WEEK',
    payload: date
})

export const slideToNextMonth = date => ({
    type: 'SLIDE_NEXT_MONTH',
    payload: date
})

export const slideToPrevWeek = date => ({
    type: 'SLIDE_PREV_WEEK',
    payload: date
})

export const slideToPrevMonth = date => ({
    type: 'SLIDE_PREV_MONTH',
    payload: date
})
