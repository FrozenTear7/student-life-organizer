import { combineReducers } from 'redux'
import todos from './reducers/todos'
import fridge from './reducers/fridge'
import { reducer as formReducer } from 'redux-form'

export const rootReducer = () => combineReducers({
    form: formReducer,
    todos,
    fridge
})

export default rootReducer
