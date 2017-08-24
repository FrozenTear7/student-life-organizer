import {ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_TODO} from '../../constants/index'

const INITIAL_STATE = {
    todos: []
}

const addTodo = (id, text) => ({
    id,
    text,
    completed: false
})

const toggleTodo = (state, id) => ({
    state: todos.map(todo =>
    (todo.id === id)
        ? {...todo, completed: !todo.completed}
        : todo
    )
})

const editTodo = (state, id, newText) => ({
    state: todos.map(todo =>
        (todo.id === id)
            ? {...todo, text: newText}
            : todo
    )
})

const deleteTodo = (state, id) => ({
    state: todos.filter(todo =>
        (todo.id !== id)
    )
})

const todos = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, addTodo(action.id, action.text)]
        case TOGGLE_TODO:
            return toggleTodo(state, action.id)
        case EDIT_TODO:
            return editTodo(state, action.id, action.text)
        case DELETE_TODO:
            return deleteTodo(state, action.id)
        default:
            return state
    }
}

export default todos