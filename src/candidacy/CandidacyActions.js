import request from '../utils/request'

import { LIST_CANDIDACY, RETRIEVE_COUNTER_CANDIDACY, RETRIEVE_CANDIDACY } from './CandidacyConstants'

export const listCandidacy = (jobId, status, page = null, search = null) => {
    let args = {params: {status: status}}
    if (page) {
        args['params']['page'] = page
    }
    if (search) {
        args['params']['search'] = search
    }

    return {
        type: LIST_CANDIDACY,
        payload: request.get('/pro/candidacies/' + jobId + '/', args)
    }
}

export const retrieveCounterCandidacy = (jobId) => {
    return {
        type: RETRIEVE_COUNTER_CANDIDACY,
        payload: request.get('/jobs/' + jobId + '/count-candidacies/')
    }
}

export const retrieveCandidacy = (id) => {
    return {
        type: RETRIEVE_CANDIDACY,
        payload: request.get('/pro/candidacy/' + id + '/')
    }
}
