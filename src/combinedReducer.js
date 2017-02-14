import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import ProReducer from './pro/ProReducer'

const combinedReducer = combineReducers({
    form : formReducer,
    pro: ProReducer,
})

export default combinedReducer
