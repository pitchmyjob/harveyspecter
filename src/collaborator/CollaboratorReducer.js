import { LIST_COLLABORATOR_PENDING, LIST_COLLABORATOR_FULFILLED, LIST_COLLABORATOR_REJECTED,
         CREATE_COLLABORATOR_FULFILLED, CREATE_COLLABORATOR_REJECTED,
         DESTROY_COLLABORATOR_FULFILLED, DESTROY_COLLABORATOR_REJECTED
} from './CollaboratorConstants'

const INITIAL_STATE = {
    fetching: false,
    fetched: false,
    created: false,
    deleted: false,
    error: null,
    collaborators: [],
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        // LIST
        case LIST_COLLABORATOR_PENDING:
            return {...state, fetching: true}
        case LIST_COLLABORATOR_FULFILLED:
            return {...state, fetching: false, fetched: true, collaborators: action.payload.data}
        case LIST_COLLABORATOR_REJECTED:
            return {...state, fetching: false, error: action.payload.response.data}

        // CREATE
        case CREATE_COLLABORATOR_FULFILLED:
            return {
                ...state,
                created: true,
                collaborators: state.collaborators.concat(action.payload.data)
            }
        case CREATE_COLLABORATOR_REJECTED:
            return {...state, error: action.payload.response.data}

        // DESTROY
        case DESTROY_COLLABORATOR_FULFILLED:
            return {...state, deleted: true}
        case DESTROY_COLLABORATOR_REJECTED:
            return {...state, error: action.payload.response.data}

        // DEFAULT
        default:
            return state
    }
}
