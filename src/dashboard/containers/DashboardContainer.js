import { connect } from 'react-redux'

import Dashboard from '../components/Dashboard'
import { addAlertSuccess } from '../../alert/AlertActions'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logoutUser: () => {
            localStorage.removeItem('token')
            dispatch(addAlertSuccess('Vous êtes deconnecté'))
            ownProps.router.push('/login/')
        },
    }
}

export default connect(null, mapDispatchToProps)(Dashboard)
