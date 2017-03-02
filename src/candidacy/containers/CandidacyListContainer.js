import { connect } from 'react-redux'

import CandidacyList from '../components/CandidacyList'
import { listCandidacy, retrieveCounterCandidacy } from '../CandidacyActions'

const mapStateToProps = (state) => {
    return {
        candidacyList: state.candidacy.candidacyList,
        candidacyCounter: state.candidacy.candidacyCounter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listCandidacy: (jobId, status, page = null, search = null) => {
            return dispatch(listCandidacy(jobId, status, page, search))
        },
        retrieveCounterCandidacy: (jobId) => {
            return dispatch(retrieveCounterCandidacy(jobId))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidacyList)
