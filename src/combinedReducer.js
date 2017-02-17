import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import AlertReducer from './alert/AlertReducer'
import CollaboratorReducer from './collaborator/CollaboratorReducer'
import EmployeeReducer from './employee/EmployeeReducer'
import IndustryReducer from './industry/IndustryReducer'
import JobReducer from './job/JobReducer'
import NotificationReducer from './notification/NotificationReducer'
import ProReducer from './pro/ProReducer'
import UserReducer from './user/UserReducer'

const combinedReducer = combineReducers({
    form : formReducer,
    alert: AlertReducer,
    collaborator: CollaboratorReducer,
    employee: EmployeeReducer,
    industry: IndustryReducer,
    job: JobReducer,
    notification: NotificationReducer,
    pro: ProReducer,
    user: UserReducer,
})

export default combinedReducer
