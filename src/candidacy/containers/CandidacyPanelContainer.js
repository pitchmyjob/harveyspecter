import { connect } from 'react-redux'

import CandidacyPanel from '../components/CandidacyPanel'
import { retrieveCandidacy } from '../CandidacyActions'

const mapStateToProps = (state) => {
    return {
        candidacyActive: state.candidacy.candidacyActive,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        retrieveCandidacy: (id) => {
            return dispatch(retrieveCandidacy(id))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidacyPanel)
