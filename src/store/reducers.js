import { combineReducers } from 'redux'
import todos from './reducers/todos'

export const rootReducer = () => combineReducers({
    todos
})

export default rootReducer
