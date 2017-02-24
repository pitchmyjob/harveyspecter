import { LIST_JOB_PENDING, LIST_JOB_FULFILLED, LIST_JOB_REJECTED,
         RETRIEVE_JOB_PENDING, RETRIEVE_JOB_FULFILLED, RETRIEVE_JOB_REJECTED,
         RETRIEVE_COUNTER_JOB_PENDING, RETRIEVE_COUNTER_JOB_FULFILLED, RETRIEVE_COUNTER_JOB_REJECTED,
         UPDATE_JOB_FULFILLED, UPDATE_JOB_REJECTED,
         DESTROY_JOB_FULFILLED, DESTROY_JOB_REJECTED
} from './JobConstants'

const INITIAL_STATE = {
    fetching: false,
    fetched: false,
    error: null,
    jobs: [],
    currentJob: null,
    counter: {
        fetching: false,
        fetched: false,
        error: null,
        results: {
            pending: 0,
            visible: 0,
            expired: 0,
        },
    },
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        // LIST
        case LIST_JOB_PENDING:
            return {...state, fetching: true, fetched: false, error: false}
        case LIST_JOB_FULFILLED:
            return {...state, fetching: false, fetched: true, jobs: action.payload.data, error: false}
        case LIST_JOB_REJECTED:
            return {...state, fetching: false, error: action.payload.response}

        // RETRIEVE
        case RETRIEVE_JOB_PENDING:
            return {...state, fetching: true}
        case RETRIEVE_JOB_FULFILLED:
            return {...state, fetching: false, fetched: true, currentJob: action.payload.data}
        case RETRIEVE_JOB_REJECTED:
            return {...state, fetching: false, error: action.payload.response}

        // RETRIEVE COUNTER
        case RETRIEVE_COUNTER_JOB_PENDING:
            return {...state, counter: {...state.counter, fetching: true}}
        case RETRIEVE_COUNTER_JOB_FULFILLED:
            return {...state, counter: {...state.counter, fetching: false, fetched: true, results: action.payload.data}}
        case RETRIEVE_COUNTER_JOB_REJECTED:
            return {...state, counter: {...state.counter, fetching: false, error: action.payload.response}}

        // UPDATE
        case UPDATE_JOB_FULFILLED:
            return {...state, currentJob: action.payload.data}
        case UPDATE_JOB_REJECTED:
            return {...state, error: action.payload.response}

        // DESTROY
        case DESTROY_JOB_FULFILLED:
            return {
                ...state,
                deleted: true,
                jobs: state.jobs.filter((job) => { return job.id !== action.meta.id })
            }
        case DESTROY_JOB_REJECTED:
            return {...state, error: action.payload.response}

        // DEFAULT
        default:
            return state
    }
}
