import { ACTIVATE_USER_PENDING, ACTIVATE_USER_FULFILLED, ACTIVATE_USER_REJECTED,
         RETRIEVE_FROM_TOKEN_USER_PENDING, RETRIEVE_FROM_TOKEN_USER_FULFILLED, RETRIEVE_FROM_TOKEN_USER_REJECTED,
         FORGET_PASSWORD_REQUEST_USER_FULFILLED, FORGET_PASSWORD_REQUEST_USER_REJECTED,
         FORGET_PASSWORD_CONFIRM_USER_FULFILLED, FORGET_PASSWORD_CONFIRM_USER_REJECTED
} from './UserConstants'

const INITIAL_STATE = {
    activating: false,
    activated: false,
    fetching: false,
    fetched: false,
    forgetPasswordRequested: false,
    forgetPasswordConfirmed: false,
    errorRetrieve: null,
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

        // RETRIEVE FROM TOKEN
        case RETRIEVE_FROM_TOKEN_USER_PENDING:
            return {...state, fetching: true}
        case RETRIEVE_FROM_TOKEN_USER_FULFILLED:
            return {...state, fetching: false, fetched: true, currentUser: action.payload.data}
        case RETRIEVE_FROM_TOKEN_USER_REJECTED:
            return {...state, fetching: false, errorRetrieve: action.payload.response.data}

        // FOREGET PASSWORD REQUEST
        case FORGET_PASSWORD_REQUEST_USER_FULFILLED:
            return {...state, forgetPasswordRequested: true}
        case FORGET_PASSWORD_REQUEST_USER_REJECTED:
            return {...state, error: action.payload.response.data}

        // FOREGET PASSWORD CONFIRM
        case FORGET_PASSWORD_CONFIRM_USER_FULFILLED:
            return {...state, forgetPasswordConfirmed: true}
        case FORGET_PASSWORD_CONFIRM_USER_REJECTED:
            return {...state, error: action.payload.response}

        // DEFAULT
        default:
            return state
    }
}
