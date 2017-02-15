import { SubmissionError, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import ProUpdateForm from '../components/ProUpdateForm'
import { listEmployee } from '../../employee/EmployeeActions'
import { listIndustry } from '../../industry/IndustryActions'
import { retrievePro, updatePro } from '../ProActions'
import { addAlertSuccess } from '../../alert/AlertActions'
import { formatErrors  } from '../../utils/forms/formatters'

const mapStateToProps = (state) => {
    return {
        employee: state.employee,
        industry: state.industry,
        initialValues: state.pro.pro,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listEmployee: () => {
            return dispatch(listEmployee())
        },
        listIndustry: () => {
            return dispatch(listIndustry())
        },
        retrievePro: () => {
            return dispatch(retrievePro())
        },
    }
}

const config = {
    form: 'ProUpdateForm',
    enableReinitialize: true,
    onSubmit: (values, dispatch, props) => {
        return dispatch(updatePro(values))
            .then((response) => {
                dispatch(addAlertSuccess('Pro modifié'))
            })
            .catch((error) => {
                throw new SubmissionError(formatErrors(error.response.data))
            })
    },
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(ProUpdateForm))
