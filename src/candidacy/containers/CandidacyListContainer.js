import { connect } from 'react-redux'

import CandidacyList from '../components/CandidacyList'
import { listCandidacy, retrieveCounterCandidacy } from '../CandidacyActions'

const mapStateToProps = (state) => {
    return {
        candidacy: state.candidacy,
        candidacyCounter: state.candidacy.candidacyCounter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listCandidacy: (jobId) => {
            return dispatch(listCandidacy(jobId))
        },
        retrieveCounterCandidacy: (jobId) => {
            return dispatch(retrieveCounterCandidacy(jobId))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidacyList)
