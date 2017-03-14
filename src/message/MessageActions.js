import request from '../utils/request'

import { LIST_JOB_CANDIDACY_MESSAGE, LIST_CANDIDACY_MESSAGE, NEXT_CANDIDACY_MESSAGE, CREATE_MESSAGE } from './MessageConstants'

export const listJobCandidacyMessage = (jobId, page = null, search = null) => {
    let args = {params: {}}
    if (page) {
        args['params']['page'] = page
    }
    if (search) {
        args['params']['search'] = search
    }

    return {
        type: LIST_JOB_CANDIDACY_MESSAGE,
        payload: request.get('/messages/job/' + jobId + '/', args)
    }
}

export const listCandidacyMessage = (candidacyId) => {
    let args = {params: {candidacy: candidacyId}}

    return {
        type: LIST_CANDIDACY_MESSAGE,
        payload: request.get('/messages/', args)
    }
}

export const nextCandidacyMessage = (candidacyId, cursor) => {
    let args = {
        params: {
            candidacy: candidacyId,
            cursor: cursor,
        }
    }

    return {
        type: NEXT_CANDIDACY_MESSAGE,
        payload: request.get('/messages/', args)
    }
}

export const createMessage = (values) => {
    return {
        type: CREATE_MESSAGE,
        payload: request.post('/messages/', values)
    }
}
