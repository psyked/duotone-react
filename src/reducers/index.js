export const SET_SOURCE = 'SET_SOURCE'
export const SET_FILTER = 'SET_FILTER'

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
    }
    return state
}

export default reducer