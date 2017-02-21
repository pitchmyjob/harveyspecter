import { connect } from 'react-redux'

import CandidacyList from '../components/CandidacyList'
import { listCandidacy } from '../CandidacyActions'

const mapStateToProps = (state) => {
    return {
        candidacy: state.candidacy,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listCandidacy: (jobId) => {
            return dispatch(listCandidacy(jobId))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidacyList)
