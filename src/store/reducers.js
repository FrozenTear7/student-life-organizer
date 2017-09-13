import { combineReducers } from 'redux'
import todos from './reducers/todos'
import spendings from './reducers/spendings'
import exams from './reducers/exams'
import shopping from './reducers/shopping'
import fridge from './reducers/fridge'
import view from './reducers/view'
import { reducer as formReducer } from 'redux-form'

export const rootReducer = () => combineReducers({
    form: formReducer,
    view,
    todos,
    fridge,
    spendings,
    exams,
    shopping
})

export default rootReducer
