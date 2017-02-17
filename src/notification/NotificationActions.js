import request from '../utils/request'

import { LIST_NOTIFICATION, TOGGLE_NOTIFICATION } from './NotificationConstants'

export const listNotification = () => {
    return {
        type: LIST_NOTIFICATION,
        payload: request.get('/notifications/')
    }
}

export const toggleNotification = () => {
    return {
        type: TOGGLE_NOTIFICATION,
    }
}
