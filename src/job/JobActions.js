import request from '../utils/request'

import { LIST_JOB, CREATE_JOB, DESTROY_JOB } from './JobConstants'

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

export const destroyJob = (id) => {
    return {
        type: DESTROY_JOB,
        payload: request.delete('/jobs/' + id + '/'),
        meta: {
            id: id,
        },
    }
}
