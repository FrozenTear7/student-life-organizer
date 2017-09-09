import { ADD_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO, RESET_EDIT_TODO,
    ADD_FRIDGE_ITEM, UPDATE_FRIDGE_ITEM, DELETE_FRIDGE_ITEM, EDIT_FRIDGE_ITEM, RESET_EDIT_FRIDGE,
    UPDATE_SPENDINGS, DELETE_SPENDINGS, RESET_EDIT_SPENDINGS } from '../constants/index'

// Todos

let nextTodoId = 0

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
})

export const updateTodo = (id, text) => ({
    type: UPDATE_TODO,
    id,
    text
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

// Fridge

let nextFridgeItemId = 0

export const addFridgeItem = (text, amount) => ({
    type: ADD_FRIDGE_ITEM,
    id: nextFridgeItemId++,
    text,
    amount
})

export const updateFridgeItem = (id, text, amount) => ({
    type: UPDATE_FRIDGE_ITEM,
    id,
    text,
    amount
})

export const deleteFridgeItem = (id) => ({
    type: DELETE_FRIDGE_ITEM,
    id
})

export const editFridgeItem = (fridgeItem) => ({
    type: EDIT_FRIDGE_ITEM,
    fridgeItem
})

export const fridgeItemResetEdit = () => ({
    type: RESET_EDIT_FRIDGE
})

// Spendings

export const updateSpendings = (amount) => ({
    type: UPDATE_SPENDINGS,
    amount
})

export const deleteSpendings = () => ({
    type: DELETE_SPENDINGS
})

export const spendingsResetEdit = () => ({
    type: RESET_EDIT_SPENDINGS
})
