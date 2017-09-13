import { ADD_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO, RESET_EDIT_TODO,
    SHOW_ALL_TODOS, SHOW_HIGH_PRIORITY_TODOS, SHOW_LOW_PRIORITY_TODOS } from '../constants/index'

let nextTodoId = 1

export const addTodo = (text, highPriority, date) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text,
    highPriority,
    date
})

export const updateTodo = (id, text, highPriority, date) => ({
    type: UPDATE_TODO,
    id,
    text,
    highPriority,
    date
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
})

export const editTodo = (todo) => ({
    type: EDIT_TODO,
    todo
})

export const todoResetEdit = () => ({
    type: RESET_EDIT_TODO
})

export const todoShowAll = () => ({
    type: SHOW_ALL_TODOS
})

export const todoShowHighPriority = () => ({
    type: SHOW_HIGH_PRIORITY_TODOS
})

export const todoShowLowPriority = () => ({
    type: SHOW_LOW_PRIORITY_TODOS
})