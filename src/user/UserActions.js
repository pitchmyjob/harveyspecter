import request from '../utils/request'

import { ACTIVATE_USER, LOGIN_USER, RETRIEVE_FROM_TOKEN_USER, FORGET_PASSWORD_REQUEST_USER } from './UserConstants'

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

export const retrieveUserFromToken = (token) => {
    return {
        type: RETRIEVE_FROM_TOKEN_USER,
        payload: request.get('/auth/me/')
    }
}

export const forgetPasswordRequestUser = (values) => {
    return {
        type: FORGET_PASSWORD_REQUEST_USER,
        payload: request.put('/auth/forget-password-request/', values)
    }
}
