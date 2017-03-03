import { connect } from 'react-redux'

import NavBar from '../components/NavBar'
import { listNotification, retrieveCounterNotification } from '../../notification/NotificationActions'

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser,
        notificationList: state.notification.notificationList,
        notificationCounter: state.notification.notificationCounter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listNotification: () => {
            return dispatch(listNotification())
        },
        retrieveCounterNotification: () => {
            return dispatch(retrieveCounterNotification())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
