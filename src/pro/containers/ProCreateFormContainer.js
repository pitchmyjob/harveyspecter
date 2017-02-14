import { SubmissionError, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import ProCreateForm from '../components/ProCreateForm'
import { createPro } from '../ProActions'
import { formatErrors  } from '../../utils/forms/formatters'

const mapStateToProps = (state) => {
    return {
        created: state.pro.created,
    }
}

const config = {
    form: 'ProCreateForm',
    onSubmit: (values, dispatch, props) => {
        return dispatch(createPro(values))
            .catch((error) => {
                throw new SubmissionError(formatErrors(error.response.data))
            })
    },
}

export default connect(mapStateToProps, null)(reduxForm(config)(ProCreateForm))
