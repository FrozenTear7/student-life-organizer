import { ADD_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO, RESET_EDIT } from '../../constants/index'

const INITIAL_STATE = {
    todos: [{ id: 69, text: 'Topkeke', completed: false }],
    editedTodo: { id: null }
}

const todos = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, { id: action.id, text: action.text, completed: false }] }
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
                        ? {...todo, text: action.text}
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
                ...state, editedTodo: { id: action.id }
            }
        case RESET_EDIT:
            return {
                ...state, editedTodo: { id: null }
            }
        default:
            return state
    }
}

export default todos