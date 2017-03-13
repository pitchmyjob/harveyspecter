import { reduxForm } from 'redux-form'

import ResumePanelContactForm from '../components/ResumePanelContactForm'
import { requestCandidacy } from '../../candidacy/CandidacyActions'
import { addAlertSuccess } from '../../alert/AlertActions'
import { handleFormErrors  } from '../../utils/forms/formatters'

const config = {
    form: 'ResumePanelContactForm',
    onSubmit: (values, dispatch, props) => {
        return dispatch(requestCandidacy(props.jobId, props.applicantId))
            .then((response) => {
                // dispatch(createMessage())
                    // .then((response) => {
                        dispatch(addAlertSuccess('Message envoyé'))
                        props.onClose()
                    // })
                // })
            })
            .catch((error) => {
                handleFormErrors(error.response)
            })
    },
}

export default reduxForm(config)(ResumePanelContactForm)
