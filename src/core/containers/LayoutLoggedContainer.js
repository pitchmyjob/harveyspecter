import { connect } from 'react-redux'

import LayoutLogged from '../components/LayoutLogged'

const mapStateToProps = (state) => {
    return {
        currentUser: state.user,
    }
}

export default connect(mapStateToProps, null)(LayoutLogged)
