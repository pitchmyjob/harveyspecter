import request from '../utils/request'

import { LIST_JOB_CANDIDACY_MESSAGE } from './MessageConstants'

export const listJobCandidacyMessage = (jobId, page = null) => {
    let values = {job: jobId}
    if (page) {
        values['page'] = page
    }

    return {
        type: LIST_JOB_CANDIDACY_MESSAGE,
        payload: request.get('/messages/job/' + jobId + '/')
    }
}
