import { connect } from 'react-redux'

import NavBar from '../components/NavBar'

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser,
    }
}

export default connect(mapStateToProps, null)(NavBar)
