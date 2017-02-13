import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const combinedReducer = combineReducers({
    form : formReducer,
})

export default combinedReducer
