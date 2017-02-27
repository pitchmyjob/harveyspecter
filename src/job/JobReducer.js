import { LIST_JOB_PENDING, LIST_JOB_FULFILLED, LIST_JOB_REJECTED,
         RETRIEVE_JOB_PENDING, RETRIEVE_JOB_FULFILLED, RETRIEVE_JOB_REJECTED,
         RETRIEVE_COUNTER_JOB_PENDING, RETRIEVE_COUNTER_JOB_FULFILLED, RETRIEVE_COUNTER_JOB_REJECTED,
         CREATE_JOB_PENDING, CREATE_JOB_FULFILLED, CREATE_JOB_REJECTED,
         UPDATE_JOB_PENDING, UPDATE_JOB_FULFILLED, UPDATE_JOB_REJECTED,
         DESTROY_JOB_PENDING, DESTROY_JOB_FULFILLED, DESTROY_JOB_REJECTED
} from './JobConstants'

const INITIAL_STATE = {
    jobList: {pending: false, fulfilled: false, error: null, jobs: [], pagination: null},
    jobRetrieve: {pending: false, fulfilled: false, error: null, job: null},
    jobCreate: {pending: false, fulfilled: false, error: null, job: null},
    jobUpdate: {pending: false, fulfilled: false, error: null, job: null},
    jobDestroy: {pending: false, fulfilled: false, error: null, job: null},
    jobCounter: {pending: false, fulfilled: false, error: null, results: {pending: null, visible: null, expired: null} }
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        // LIST
        case LIST_JOB_PENDING:
            return {...state, jobList: {...state.jobList, pending: true, fetched: false, error: null, jobs: []}}
        case LIST_JOB_FULFILLED:
            return {...state, jobList: {pending: false, fetched: true, error: null, jobs: action.payload.data.results, pagination: {...action.payload.data, results: undefined}}}
        case LIST_JOB_REJECTED:
            return {...state, jobList: {pending: false, fetched: false, error: action.payload.response, jobs: [], pagination: null}}

        // RETRIEVE
        case RETRIEVE_JOB_PENDING:
            return {...state, jobRetrieve: {pending: true, fetched: false, error: null, job: null}}
        case RETRIEVE_JOB_FULFILLED:
            return {...state, jobRetrieve: {pending: false, fetched: true, error: null, job: action.payload.data}}
        case RETRIEVE_JOB_REJECTED:
            return {...state, jobRetrieve: {pending: false, fetched: false, error: action.payload.response, job: null}}

        // CREATE
        case CREATE_JOB_PENDING:
            return {...state, jobCreate: {pending: true, fetched: false, error: null, job: null}}
        case CREATE_JOB_FULFILLED:
            return {...state, jobCreate: {pending: false, fetched: true, error: null, job: action.payload.data}}
        case CREATE_JOB_REJECTED:
            return {...state, jobCreate: {pending: false, fetched: false, error: action.payload.response, job: null}}

        // UPDATE
        case UPDATE_JOB_PENDING:
            return {...state, jobUpdate: {pending: true, fetched: false, error: null, job: null}}
        case UPDATE_JOB_FULFILLED:
            return {...state, jobUpdate: {pending: false, fetched: true, error: null, job: action.payload.data}}
        case UPDATE_JOB_REJECTED:
            return {...state, jobUpdate: {pending: false, fetched: false, error: action.payload.response, job: null}}

        // DESTROY
        case DESTROY_JOB_PENDING:
            return {...state, jobDestroy: {pending: true, fetched: false, error: null, job: null}}
        case DESTROY_JOB_FULFILLED:
            return {...state, jobDestroy: {pending: false, fetched: true, error: null, job: action.payload.data}}
        case DESTROY_JOB_REJECTED:
            return {...state, jobDestroy: {pending: false, fetched: false, error: action.payload.response, job: null}}

        // RETRIEVE COUNTER
        case RETRIEVE_COUNTER_JOB_PENDING:
            return {...state, jobCounter: {pending: true, fetched: false, error: null, results: {pending: null, visible: null, expired: null}}}
        case RETRIEVE_COUNTER_JOB_FULFILLED:
            return {...state, jobCounter: {pending: false, fetched: true, error: null, results: action.payload.data}}
        case RETRIEVE_COUNTER_JOB_REJECTED:
            return {...state, jobCounter: {pending: false, fetched: false, error: action.payload.response, results: {pending: null, visible: null, expired: null}}}

        // DEFAULT
        default:
            return state
    }
}
