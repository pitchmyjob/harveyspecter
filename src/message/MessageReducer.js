import { LIST_JOB_CANDIDACY_MESSAGE_PENDING, LIST_JOB_CANDIDACY_MESSAGE_FULFILLED, LIST_JOB_CANDIDACY_MESSAGE_REJECTED,
         LIST_CANDIDACY_MESSAGE_PENDING, LIST_CANDIDACY_MESSAGE_FULFILLED, LIST_CANDIDACY_MESSAGE_REJECTED,
         NEXT_CANDIDACY_MESSAGE_PENDING, NEXT_CANDIDACY_MESSAGE_FULFILLED, NEXT_CANDIDACY_MESSAGE_REJECTED,
         CREATE_MESSAGE_PENDING, CREATE_MESSAGE_FULFILLED, CREATE_MESSAGE_REJECTED
} from './MessageConstants'

const INITIAL_STATE = {
    messageActive: {pending: false, fetched: false, error: null, message: null},
    jobCandidacyMessageList: {pending: false, fetched: false, error: null, jobCandidacyMessages: [], pagination: null},
    candidacyMessageList: {pending: false, fetched: false, nextPending: false, nextFetched: false, error: null, candidacyMessages: [], pagination: null},
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        // LIST JOB CANDIDACY
        case LIST_JOB_CANDIDACY_MESSAGE_PENDING:
            return {
                ...state,
                jobCandidacyMessageList: {
                    ...state.jobCandidacyMessageList,
                    pending: true,
                    fetched: false,
                    error: null,
                    jobCandidacyMessages: []
                }
            }
        case LIST_JOB_CANDIDACY_MESSAGE_FULFILLED:
            return {
                ...state,
                jobCandidacyMessageList: {
                    pending: false,
                    fetched: true,
                    error: null,
                    jobCandidacyMessages: action.payload.data,
                    pagination: {...action.payload.data, results: undefined}
                }
            }
        case LIST_JOB_CANDIDACY_MESSAGE_REJECTED:
            return {
                ...state,
                jobCandidacyMessageList: {
                    pending: false,
                    fetched: false,
                    error: action.payload.response,
                    jobCandidacyMessages: [],
                    pagination: null
                }
            }

        // LIST CANDIDACY MESSAGES
        case LIST_CANDIDACY_MESSAGE_PENDING:
            return {
                ...state,
                candidacyMessageList: {
                    ...state.candidacyMessageList,
                    pending: true,
                    fetched: false,
                    error: null,
                    candidacyMessages: []
                }
            }
        case LIST_CANDIDACY_MESSAGE_FULFILLED:
            return {
                ...state,
                candidacyMessageList: {
                    pending: false,
                    fetched: true,
                    error: null,
                    candidacyMessages: action.payload.data.results.reverse(),
                    pagination: {...action.payload.data, results: undefined}
                }
            }
        case LIST_CANDIDACY_MESSAGE_REJECTED:
            return {
                ...state,
                candidacyMessageList: {
                    pending: false,
                    fetched: false,
                    error: action.payload.response,
                    candidacyMessages: [],
                    pagination: null
                }
            }

        // NEXT CANDIDACY MESSAGES
        case NEXT_CANDIDACY_MESSAGE_PENDING:
            return {
                ...state,
                candidacyMessageList: {
                    ...state.candidacyMessageList,
                    nextPending: true,
                    nextFetched: false,
                    error: null
                }
            }
        case NEXT_CANDIDACY_MESSAGE_FULFILLED:
            return {
                ...state,
                candidacyMessageList: {
                    ...state.candidacyMessageList,
                    nextPending: false,
                    nextFetched: true,
                    error: null,
                    candidacyMessages: action.payload.data.results.reverse().concat(state.candidacyMessageList.candidacyMessages),
                    pagination: {...action.payload.data, results: undefined}
                }
            }
        case NEXT_CANDIDACY_MESSAGE_REJECTED:
            return {
                ...state,
                candidacyMessageList: {
                    ...state.candidacyMessageList,
                    nextPending: false,
                    nextFetched: false,
                    error: action.payload.response,
                    candidacyMessages: [],
                    pagination: null
                }
            }

        // CREATE
        case CREATE_MESSAGE_PENDING:
            return {...state, messageActive: {pending: true, fetched: false, error: null, message: null}}
        case CREATE_MESSAGE_FULFILLED:
            return {
                ...state,
                messageActive: {pending: false, fetched: true, error: null, message: action.payload.data},
                candidacyMessageList: {
                    ...state.candidacyMessageList,
                    candidacyMessages: state.candidacyMessageList.candidacyMessages.concat(action.payload.data)
                },
            }
        case CREATE_MESSAGE_REJECTED:
            return {...state, messageActive: {pending: false, fetched: false, error: action.payload.response, message: null}}

        // DEFAULT
        default:
            return state
    }
}
