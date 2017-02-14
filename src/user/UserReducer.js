import { ACTIVATE_USER_PENDING, ACTIVATE_USER_FULFILLED, ACTIVATE_USER_REJECTED } from './UserConstants'

const INITIAL_STATE = {
    activating: false,
    activated: false,
    error: null,
    currentUser: null,
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        // ACTIVATE
        case ACTIVATE_USER_PENDING:
            return {...state, activating: true}
        case ACTIVATE_USER_FULFILLED:
            return {...state, activating: false, activated: true}
        case ACTIVATE_USER_REJECTED:
            return {...state, activating: false, error: action.payload.response.data}

        // DEFAULT
        default:
            return state
    }
}
