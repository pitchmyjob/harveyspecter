import request from '../utils/request'

import { LIST_NOTIFICATION, RETRIEVE_COUNTER_NOTIFICATION } from './NotificationConstants'

export const listNotification = () => {
    return {
        type: LIST_NOTIFICATION,
        payload: request.get('/notifications/')
    }
}

export const retrieveCounterNotification = () => {
    return {
        type: RETRIEVE_COUNTER_NOTIFICATION,
        payload: request.get('/notifications/unread-count/')
    }
}
