export const SET_SOURCE = 'SET_SOURCE'
export const SET_FILTER = 'SET_FILTER'
export const SET_BLUR_VALUE = 'SET_BLUR_VALUE'

const reducer = (state, { type, payload }) => {
    if (type === SET_SOURCE) {
        const { data: imageData } = payload
        return {
            ...state,
            imageData
        }
    } else if (type === SET_FILTER) {
        const { filter } = payload
        return {
            ...state,
            filter
        }
    } else if (type === SET_BLUR_VALUE) {
        const { blurValue } = payload
        return {
            ...state,
            blurValue
        }
    }
    return state
}

export default reducer