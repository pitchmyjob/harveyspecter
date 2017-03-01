import { LIST_CANDIDACY_PENDING, LIST_CANDIDACY_FULFILLED, LIST_CANDIDACY_REJECTED,
         RETRIEVE_COUNTER_CANDIDACY_PENDING, RETRIEVE_COUNTER_CANDIDACY_FULFILLED, RETRIEVE_COUNTER_CANDIDACY_REJECTED
} from './CandidacyConstants'

const INITIAL_STATE = {
    fetching: false,
    fetched: false,
    error: null,
    candidacies: [],
    currentCandidacy: null,
    candidacyCounter: {pending: false, fetched: false, error: null, results: {not_selected: null, like: null, request: null, video: null, selected: null} }
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        // LIST
        case LIST_CANDIDACY_PENDING:
            return {...state, fetching: true}
        case LIST_CANDIDACY_FULFILLED:
            return {...state, fetching: false, fetched: true, candidacies: action.payload.data}
        case LIST_CANDIDACY_REJECTED:
            return {...state, fetching: false, error: action.payload.response}

        // RETRIEVE COUNTER
        case RETRIEVE_COUNTER_CANDIDACY_PENDING:
            return {...state, candidacyCounter: {pending: true, fetched: false, error: null, results: {not_selected: null, like: null, request: null, video: null, selected: null}}}
        case RETRIEVE_COUNTER_CANDIDACY_FULFILLED:
            return {...state, candidacyCounter: {pending: false, fetched: true, error: null, results: action.payload.data}}
        case RETRIEVE_COUNTER_CANDIDACY_REJECTED:
            return {...state, candidacyCounter: {pending: false, fetched: false, error: action.payload.response, results: {not_selected: null, like: null, request: null, video: null, selected: null}}}

        // DEFAULT
        default:
            return state
    }
}
