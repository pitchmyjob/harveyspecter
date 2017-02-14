import { SubmissionError, reduxForm } from 'redux-form'

import UserLoginForm from '../components/UserLoginForm'
import { loginUser } from '../UserActions'
import { addAlertSuccess } from '../../alert/AlertActions'
import { formatErrors  } from '../../utils/forms/formatters'

const config = {
    form: 'UserLoginForm',
    onSubmit: (values, dispatch, props) => {
        return dispatch(loginUser(values))
            .then((response) => {
                localStorage.setItem('token', response.action.payload.data.token)
                dispatch(addAlertSuccess('Vous êtes connecté'))
                props.router.push('/')
            })
            .catch((error) => {
                throw new SubmissionError(formatErrors(error.response.data))
            })
    },
}

export default reduxForm(config)(UserLoginForm)
