import { connect } from 'react-redux'

import Dashboard from '../components/Dashboard'
import { addAlertSuccess } from '../../alert/AlertActions'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(null, mapDispatchToProps)(Dashboard)
