import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import AlertReducer from './alert/AlertReducer'
import CandidacyReducer from './candidacy/CandidacyReducer'
import CollaboratorReducer from './collaborator/CollaboratorReducer'
import ContractTypeReducer from './contracttype/ContractTypeReducer'
import EmployeeReducer from './employee/EmployeeReducer'
import ExperienceReducer from './experience/ExperienceReducer'
import IndustryReducer from './industry/IndustryReducer'
import JobReducer from './job/JobReducer'
import JobQuestionReducer from './jobquestion/JobQuestionReducer'
import NotificationReducer from './notification/NotificationReducer'
import ProReducer from './pro/ProReducer'
import StudyLevelReducer from './studylevel/StudyLevelReducer'
import UserReducer from './user/UserReducer'

const combinedReducer = combineReducers({
    form : formReducer,
    alert: AlertReducer,
    candidacy: CandidacyReducer,
    collaborator: CollaboratorReducer,
    contractType: ContractTypeReducer,
    employee: EmployeeReducer,
    experience: ExperienceReducer,
    industry: IndustryReducer,
    job: JobReducer,
    jobQuestion: JobQuestionReducer,
    notification: NotificationReducer,
    pro: ProReducer,
    studyLevel: StudyLevelReducer,
    user: UserReducer,
})

export default combinedReducer
