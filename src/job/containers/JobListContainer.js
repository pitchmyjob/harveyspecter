import { connect } from 'react-redux'

import JobList from '../components/JobList'
import { listJob } from '../JobActions'

const mapStateToProps = (state) => {
    return {
        job: state.job,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listJob: () => {
            return dispatch(listJob())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList)
