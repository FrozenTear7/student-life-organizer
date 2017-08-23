import { ADD_TODO, EDIT_TODO, DELETE_TODO } from '../constants/index'

let nextTodoId = 0

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
})

export const editTodo = (id, text) => ({
    type: EDIT_TODO,
    id,
    text
})
