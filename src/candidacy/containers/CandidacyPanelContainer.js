import { connect } from 'react-redux'

import CandidacyPanel from '../components/CandidacyPanel'
import { retrieveCandidacy, listCommentsCandidacy, nextCommentsCandidacy } from '../CandidacyActions'

const mapStateToProps = (state) => {
    return {
        candidacyActive: state.candidacy.candidacyActive,
        commentsCandidacyList: state.candidacy.commentsCandidacyList,
        currentUser: state.user.currentUser,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        retrieveCandidacy: (id) => {
            return dispatch(retrieveCandidacy(id))
        },
        listCommentsCandidacy: (candidacyId) => {
            return dispatch(listCommentsCandidacy(candidacyId))
        },
        nextCommentsCandidacy: (candidacyId, cursor) => {
            return dispatch(nextCommentsCandidacy(candidacyId, cursor))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidacyPanel)
