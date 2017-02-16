import { connect } from 'react-redux'

import CollaboratorList from '../components/CollaboratorList'
import { listCollaborator, destroyCollaborator } from '../CollaboratorActions'
import { addAlertSuccess } from '../../alert/AlertActions'

const mapStateToProps = (state) => {
    return {
        collaborator: state.collaborator,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listCollaborator: () => {
            return dispatch(listCollaborator())
        },
        destroyCollaborator: (id) => {
            return dispatch(destroyCollaborator(id)).then((response) => {
                dispatch(addAlertSuccess('Collaborateur supprimé'))
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollaboratorList)
