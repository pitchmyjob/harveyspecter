import { LIST_JOB_PENDING, LIST_JOB_FULFILLED, LIST_JOB_REJECTED,
         DESTROY_JOB_FULFILLED, DESTROY_JOB_REJECTED
} from './JobConstants'

const INITIAL_STATE = {
    fetching: false,
    fetched: false,
    error: null,
    jobs: [],
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        // LIST
        case LIST_JOB_PENDING:
            return {...state, fetching: true}
        case LIST_JOB_FULFILLED:
            return {...state, fetching: false, fetched: true, jobs: action.payload.data}
        case LIST_JOB_REJECTED:
            return {...state, fetching: false, error: action.payload.response}

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
