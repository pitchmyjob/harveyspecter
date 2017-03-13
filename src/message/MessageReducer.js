import { LIST_JOB_CANDIDACY_MESSAGE_PENDING, LIST_JOB_CANDIDACY_MESSAGE_FULFILLED, LIST_JOB_CANDIDACY_MESSAGE_REJECTED } from './MessageConstants'

const INITIAL_STATE = {
    jobCandidacyMessageList: {pending: false, fetched: false, error: null, jobCandidacyMessages: [], pagination: null},

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

        // DEFAULT
        default:
            return state
    }
}
