export const SET_SOURCE = 'SET_SOURCE'

const reducer = (state, { type, payload }) => {
    console.log(payload)
    if (type === SET_SOURCE) {
        return {
            ...state,
            imageData: payload.data
        }
    }
    return state
}

export default reducer