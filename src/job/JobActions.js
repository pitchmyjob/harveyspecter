import request from '../utils/request'

import { LIST_JOB } from './JobConstants'

export const listJob = () => {
    return {
        type: LIST_JOB,
        payload: request.get('/jobs/')
    }
}
