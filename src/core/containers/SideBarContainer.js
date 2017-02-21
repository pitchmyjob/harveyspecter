import { connect } from 'react-redux'
import SideBar from '../components/SideBar'
import { addAlertSuccess } from '../../alert/AlertActions'
import { browserHistory } from 'react-router'


const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logoutUser: () => {
            localStorage.removeItem('token')
            dispatch(addAlertSuccess('Vous êtes deconnecté'))
            browserHistory.push('/login/')
        },
    }
}


export default connect(null, mapDispatchToProps)(SideBar)
