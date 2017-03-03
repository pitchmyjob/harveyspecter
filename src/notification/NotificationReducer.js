import { LIST_NOTIFICATION_PENDING, LIST_NOTIFICATION_FULFILLED, LIST_NOTIFICATION_REJECTED,
         RETRIEVE_COUNTER_NOTIFICATION_PENDING, RETRIEVE_COUNTER_NOTIFICATION_FULFILLED, RETRIEVE_COUNTER_NOTIFICATION_REJECTED
} from './NotificationConstants'

const INITIAL_STATE = {
    notificationToggle: false,
    notificationList: {pending: false, fetched: false, error: null, notifications: [], pagination: null},
    notificationCounter: {pending: false, fetched: false, error: null, results: {pending: null, visible: null, expired: null} }
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        // LIST
        case LIST_NOTIFICATION_PENDING:
            return {...state, notificationList: {...state.notificationList, pending: true, fetched: false, error: null, notifications: []}}
        case LIST_NOTIFICATION_FULFILLED:
            return {...state, notificationList: {pending: false, fetched: true, error: null, notifications: action.payload.data.results, pagination: {...action.payload.data, results: undefined}}}
        case LIST_NOTIFICATION_REJECTED:
            return {...state, notificationList: {pending: false, fetched: false, error: action.payload.response, notifications: [], pagination: null}}

        // RETRIEVE COUNTER
        case RETRIEVE_COUNTER_NOTIFICATION_PENDING:
            return {...state, notificationCounter: {pending: true, fetched: false, error: null, results: {pending: null, visible: null, expired: null}}}
        case RETRIEVE_COUNTER_NOTIFICATION_FULFILLED:
            return {...state, notificationCounter: {pending: false, fetched: true, error: null, unreadCount: action.payload.data.unread_count}}
        case RETRIEVE_COUNTER_NOTIFICATION_REJECTED:
            return {...state, notificationCounter: {pending: false, fetched: false, error: action.payload.response, results: {pending: null, visible: null, expired: null}}}

        // DEFAULT
        default:
            return state
    }
}
