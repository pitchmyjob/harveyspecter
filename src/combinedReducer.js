import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import AlertReducer from './alert/AlertReducer'
import CollaboratorReducer from './collaborator/CollaboratorReducer'
import ContractTypeReducer from './contracttype/ContractTypeReducer'
import EmployeeReducer from './employee/EmployeeReducer'
import ExperienceReducer from './experience/ExperienceReducer'
import IndustryReducer from './industry/IndustryReducer'
import JobReducer from './job/JobReducer'
import NotificationReducer from './notification/NotificationReducer'
import ProReducer from './pro/ProReducer'
import UserReducer from './user/UserReducer'

const combinedReducer = combineReducers({
    form : formReducer,
    alert: AlertReducer,
    collaborator: CollaboratorReducer,
    contractType: ContractTypeReducer,
    employee: EmployeeReducer,
    experience: ExperienceReducer,
    industry: IndustryReducer,
    job: JobReducer,
    notification: NotificationReducer,
    pro: ProReducer,
    user: UserReducer,
})

export default combinedReducer
