import request from '../utils/request'

import { LIST_JOB, RETRIEVE_JOB, RETRIEVE_COUNTER_JOB, CREATE_JOB, UPDATE_JOB, DESTROY_JOB, PUBLISH_JOB } from './JobConstants'

export const listJob = (page = null, search = null) => {
    let args = {params: {}}
    if (page) {
        args['params']['page'] = page
    }
    if (search) {
        args['params']['search'] = search
    }

    return {
        type: LIST_JOB,
        payload: request.get('/jobs/', args)
    }
}

export const retrieveJob = (id) => {
    return {
        type: RETRIEVE_JOB,
        payload: request.get('/jobs/' + id + '/')
    }
}

export const retrieveCounterJob = () => {
    return {
        type: RETRIEVE_COUNTER_JOB,
        payload: request.get('/jobs/count/')
    }
}

export const createJob = (values) => {
    return {
        type: CREATE_JOB,
        payload: request.post('/jobs/', values)
    }
}

export const updateJob = (id, values) => {
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

export const publishJob = (id) => {
    return {
        type: PUBLISH_JOB,
        payload: request.put('/jobs/publish/', {job: id}),
    }
}
