import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import JobForm from '../components/JobForm'
import { listContractType } from '../../contracttype/ContractTypeActions'
import { listExperience } from '../../experience/ExperienceActions'
import { listStudyLevel } from '../../studylevel/StudyLevelActions'
import { createJob } from '../JobActions'
import { addAlertSuccess } from '../../alert/AlertActions'
import { handleFormErrors  } from '../../utils/forms/formatters'

const mapStateToProps = (state) => {
    return {
        contractType: state.contractType,
        experience: state.experience,
        studyLevel: state.studyLevel,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listContractType: () => {
            return dispatch(listContractType())
        },
        listExperience: () => {
            return dispatch(listExperience())
        },
        listStudyLevel: () => {
            return dispatch(listStudyLevel())
        },
    }
}

const config = {
    form: 'JobCreateForm',
    onSubmit: (values, dispatch, props) => {
        values['skills'] = values['skills'].split(',')

        return dispatch(createJob(values))
            .then((response) => {
                dispatch(addAlertSuccess('Job créé'))
                props.router.push('/jobs/')
            })
            .catch((error) => {
                handleFormErrors(error.response)
            })
    },
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(JobForm))
