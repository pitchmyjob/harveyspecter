import { CREATE_ALERT, DESTROY_ALERT } from './AlertConstants'

export const addAlert = (alertType, message) => {
    return {
        type: CREATE_ALERT,
        alertType: alertType,
        message: message,
    }
}

export const addAlertSuccess = (message) => {
    return addAlert('SUCCESS', message)
}

export const addAlertError = (message) => {
    return addAlert('DANGER', message)
}

export const hideAlert = (key) => {
    return {
        type: DESTROY_ALERT,
        key: key,
    }
}
