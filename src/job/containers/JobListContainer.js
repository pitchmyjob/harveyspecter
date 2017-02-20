import { connect } from 'react-redux'

import JobList from '../components/JobList'
import { listJob, destroyJob } from '../JobActions'
import { addAlertSuccess } from '../../alert/AlertActions'

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
        destroyJob: (id) => {
            return dispatch(destroyJob(id)).then((response) => {
                dispatch(addAlertSuccess('Job supprimé'))
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList)
