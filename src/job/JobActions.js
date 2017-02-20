import request from '../utils/request'

import { LIST_JOB, CREATE_JOB } from './JobConstants'

export const listJob = () => {
    return {
        type: LIST_JOB,
        payload: request.get('/jobs/')
    }
}

export const createJob = (values) => {
    return {
        type: CREATE_JOB,
        payload: request.post('/jobs/', values)
    }
}
