import request from '../utils/request'

import { LIST_CANDIDACY } from './CandidacyConstants'

export const listCandidacy = (jobId) => {
    return {
        type: LIST_CANDIDACY,
        payload: request.get('/pro/candidacies/' + jobId + '/')
    }
}
