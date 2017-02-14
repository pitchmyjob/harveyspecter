import { CREATE_PRO_FULFILLED, CREATE_PRO_REJECTED } from './ProConstants'

const INITIAL_STATE = {
    created: false,
    error: null,
    pro: null,
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        // CREATE
        case CREATE_PRO_FULFILLED:
            return {...state, created: true, pro: action.payload.data}
        case CREATE_PRO_REJECTED:
            return {...state, error: action.payload.response.data}

        // DEFAULT
        default:
            return state
    }
}
