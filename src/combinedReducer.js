import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import AlertReducer from './alert/AlertReducer'
import CollaboratorReducer from './collaborator/CollaboratorReducer'
import EmployeeReducer from './employee/EmployeeReducer'
import IndustryReducer from './industry/IndustryReducer'
import NotificationReducer from './notification/NotificationReducer'
import ProReducer from './pro/ProReducer'
import UserReducer from './user/UserReducer'

const combinedReducer = combineReducers({
    form : formReducer,
    alert: AlertReducer,
    collaborator: CollaboratorReducer,
    employee: EmployeeReducer,
    industry: IndustryReducer,
    notification: NotificationReducer,
    pro: ProReducer,
    user: UserReducer,
})

export default combinedReducer
