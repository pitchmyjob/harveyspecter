import { connect } from 'react-redux'

import App from '../components/App'
import { retrieveUserFromToken } from '../../user/UserActions'

const mapDispatchToProps = (dispatch) => {
    return {
        retrieveUserFromToken: () => {
            let token = localStorage.getItem('token')
            if (!token || token === '') {
                return;
            }

            dispatch(retrieveUserFromToken(token))
                .catch((error) => {
                    localStorage.removeItem('token')
                })
        },
    }
}

export default connect(null, mapDispatchToProps)(App)
