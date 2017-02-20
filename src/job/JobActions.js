import request from '../utils/request'

import { LIST_JOB, RETRIEVE_JOB, CREATE_JOB, UPDATE_JOB, DESTROY_JOB } from './JobConstants'

export const listJob = () => {
    return {
        type: LIST_JOB,
        payload: request.get('/jobs/')
    }
}

export function retrieveJob(id) {
    return {
        type: RETRIEVE_JOB,
        payload: request.get('/jobs/' + id + '/')
    }
}

export const createJob = (values) => {
    return {
        type: CREATE_JOB,
        payload: request.post('/jobs/', values)
    }
}

export function updateJob(id, values) {
    return {
        type: UPDATE_JOB,
        payload: request.patch('/jobs/' + id + '/', values)
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
