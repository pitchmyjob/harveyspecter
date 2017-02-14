import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import ProReducer from './pro/ProReducer'
import UserReducer from './user/UserReducer'

const combinedReducer = combineReducers({
    form : formReducer,
    pro: ProReducer,
    user: UserReducer,
})

export default combinedReducer
