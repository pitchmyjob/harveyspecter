import request from '../utils/request'

import { RETRIEVE_PRO, CREATE_PRO, UPDATE_PRO } from './ProConstants'

export function retrievePro(values) {
    return {
        type: RETRIEVE_PRO,
        payload: request.get('/pro/me/')
    }
}

export function createPro(values) {
    return {
        type: CREATE_PRO,
        payload: request.post('/auth/pro/register/', values)
    }
}

export function updatePro(values) {
    delete values['logo']

    return {
        type: UPDATE_PRO,
        payload: request.put('/pro/me/', values)
    }
}
