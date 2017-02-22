import { LIST_CANDIDACY_PENDING, LIST_CANDIDACY_FULFILLED, LIST_CANDIDACY_REJECTED } from './CandidacyConstants'

const INITIAL_STATE = {
    fetching: false,
    fetched: false,
    error: null,
    candidacies: [],
    currentCandidacy: null,
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

        // DEFAULT
        default:
            return state
    }
}
