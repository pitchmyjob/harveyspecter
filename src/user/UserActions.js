import request from '../utils/request'

import { ACTIVATE_USER, LOGIN_USER } from './UserConstants'

export function activateUser(email, token) {
    return {
        type: ACTIVATE_USER,
        payload: request.put('/auth/pro/confirm/', {email, token})
    }
}

export function loginUser(values) {
    return {
        type: LOGIN_USER,
        payload: request.post('/auth/pro/login/', values)
    }
}
