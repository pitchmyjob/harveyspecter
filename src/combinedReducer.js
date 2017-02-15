import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import AlertReducer from './alert/AlertReducer'
import EmployeeReducer from './employee/EmployeeReducer'
import IndustryReducer from './industry/IndustryReducer'
import ProReducer from './pro/ProReducer'
import UserReducer from './user/UserReducer'

const combinedReducer = combineReducers({
    form : formReducer,
    alert: AlertReducer,
    employee: EmployeeReducer,
    industry: IndustryReducer,
    pro: ProReducer,
    user: UserReducer,
})

export default combinedReducer
