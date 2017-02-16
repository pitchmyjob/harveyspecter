import { reduxForm } from 'redux-form'

import CollaboratorCreateForm from '../components/CollaboratorCreateForm'
import { handleFormErrors  } from '../../utils/forms/formatters'
import { listCollaborator, createCollaborator } from '../CollaboratorActions'
import { addAlertSuccess } from '../../alert/AlertActions'

const config = {
    form: 'CollaboratorCreateForm',
    onSubmit: (values, dispatch, props) => {
        return dispatch(createCollaborator(values))
            .then((response) => {
                dispatch(listCollaborator())
                dispatch(addAlertSuccess('Collaborateur ajouté'))
                props.reset()
            })
            .catch((error) => {
                handleFormErrors(error.response)
            })
    }
}

export default reduxForm(config)(CollaboratorCreateForm)
