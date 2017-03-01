import request from '../utils/request'

import { LIST_CANDIDACY, RETRIEVE_COUNTER_CANDIDACY } from './CandidacyConstants'

export const listCandidacy = (jobId) => {
    return {
        type: LIST_CANDIDACY,
        payload: request.get('/pro/candidacies/' + jobId + '/')
    }
}

export const retrieveCounterCandidacy = (jobId) => {
    return {
        type: RETRIEVE_COUNTER_CANDIDACY,
        payload: request.get('/jobs/' + jobId + '/count-candidacies/')
    }
}
