import { ADD_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO, RESET_EDIT_TODO } from '../../constants/index'

const INITIAL_STATE = {
    todos: [],
    editedTodo: { todo: { id: null, text: null, completed: null, highPriority: null, date: null } }
}

const todos = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, { id: action.id, text: action.text, completed: false, highPriority: action.highPriority, date: action.date }] }
        case TOGGLE_TODO:
            return {
                ...state, todos: state.todos.map(todo =>
                    (todo.id === action.id)
                        ? {...todo, completed: !todo.completed}
                        : todo
                )
            }
        case UPDATE_TODO:
            return {
                ...state, todos: state.todos.map(todo =>
                    (todo.id === action.id)
                        ? {...todo, text: action.text, highPriority: action.highPriority, date: action.date}
                        : todo
                )
            }
        case DELETE_TODO:
            return {
                ...state, todos: state.todos.filter(todo =>
                    (todo.id !== action.id)
                )
            }
        case EDIT_TODO:
            return {
                ...state, editedTodo: { todo: action.todo }
            }
        case RESET_EDIT_TODO:
            return {
                ...state, editedTodo: { todo: { id: null, text: null, completed: null, highPriority: null, date: null } }
            }
        default:
            return state
    }
}

export default todos