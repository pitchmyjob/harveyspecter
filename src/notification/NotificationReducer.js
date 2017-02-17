import { LIST_NOTIFICATION_PENDING, LIST_NOTIFICATION_FULFILLED, LIST_NOTIFICATION_REJECTED,
         TOGGLE_NOTIFICATION
} from './NotificationConstants'

const INITIAL_STATE = {
    isVisible: false,
    fetching: false,
    fetched: false,
    error: null,
    notifications: [],
    unreadCount: 0,
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        // LIST
        case LIST_NOTIFICATION_PENDING:
            return {...state, fetching: true}
        case LIST_NOTIFICATION_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                notifications: action.payload.data,
                unreadCount: action.payload.data.filter((notification) => {
                    return notification.is_unread
                }).length
            }
        case LIST_NOTIFICATION_REJECTED:
            return {...state, fetching: false, error: action.payload.response}

        // TOGGLE
        case TOGGLE_NOTIFICATION:
            return {...state, isVisible: !state.isVisible}

        // DEFAULT
        default:
            return state
    }
}
