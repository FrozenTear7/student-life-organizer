import { ADD_FRIDGE_ITEM, UPDATE_FRIDGE_ITEM, DELETE_FRIDGE_ITEM, EDIT_FRIDGE_ITEM, RESET_EDIT_FRIDGE } from '../constants/index'

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