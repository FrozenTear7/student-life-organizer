import { ADD_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO, RESET_EDIT_TODO,
    ADD_FRIDGE_ITEM, UPDATE_FRIDGE_ITEM, DELETE_FRIDGE_ITEM, EDIT_FRIDGE_ITEM, RESET_EDIT_FRIDGE,
    UPDATE_SPENDINGS, DELETE_SPENDINGS, RESET_EDIT_SPENDINGS,
    ADD_EXAM, UPDATE_EXAM, DELETE_EXAM, TOGGLE_EXAM, EDIT_EXAM, RESET_EDIT_EXAM,
    ADD_SHOPPING_ITEM, UPDATE_SHOPPING_ITEM, DELETE_SHOPPING_ITEM, EDIT_SHOPPING_ITEM, RESET_EDIT_SHOPPING,
    SHOW_ALL, SHOW_HIGH_PRIORITY, SHOW_LOW_PRIORITY} from '../constants/index'

// Todos

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

export const showAllTodos = () => ({
    type: SHOW_ALL
})

export const showHighPriorityTodos = () => ({
    type: SHOW_HIGH_PRIORITY
})

export const showLowPriorityTodos = () => ({
    type: SHOW_LOW_PRIORITY
})

// Fridge

let nextFridgeItemId = 1

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

// Exams

let nextExamId = 1

export const addExam = (text, highPriority, date) => ({
    type: ADD_EXAM,
    id: nextExamId++,
    text,
    highPriority,
    date
})

export const updateExam = (id, text, highPriority, date) => ({
    type: UPDATE_EXAM,
    id,
    text,
    highPriority,
    date
})

export const toggleExam = (id) => ({
    type: TOGGLE_EXAM,
    id
})

export const deleteExam = (id) => ({
    type: DELETE_EXAM,
    id
})

export const editExam = (exam) => ({
    type: EDIT_EXAM,
    exam
})

export const examResetEdit = () => ({
    type: RESET_EDIT_EXAM
})

export const showAllExams = () => ({
    type: SHOW_ALL
})

export const showHighPriorityExams = () => ({
    type: SHOW_HIGH_PRIORITY
})

export const showLowPriorityExams = () => ({
    type: SHOW_LOW_PRIORITY
})

// Shopping list

let nextShoppingItemId = 1

export const addShoppingItem = (text, amount) => ({
    type: ADD_SHOPPING_ITEM,
    id: nextShoppingItemId++,
    text,
    amount
})

export const updateShoppingItem = (id, text, amount) => ({
    type: UPDATE_SHOPPING_ITEM,
    id,
    text,
    amount
})

export const deleteShoppingItem = (id) => ({
    type: DELETE_SHOPPING_ITEM,
    id
})

export const editShoppingItem = (shoppingItem) => ({
    type: EDIT_SHOPPING_ITEM,
    shoppingItem
})

export const shoppingItemResetEdit = () => ({
    type: RESET_EDIT_SHOPPING
})