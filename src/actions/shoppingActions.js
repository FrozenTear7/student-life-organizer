import { ADD_SHOPPING_ITEM, UPDATE_SHOPPING_ITEM, DELETE_SHOPPING_ITEM, EDIT_SHOPPING_ITEM, RESET_EDIT_SHOPPING } from '../constants/index'

let nextShoppingItemId = 1

export const addShoppingItem = (text, amount, cost) => ({
    type: ADD_SHOPPING_ITEM,
    id: nextShoppingItemId++,
    text,
    amount,
    cost
})

export const updateShoppingItem = (id, text, amount, cost) => ({
    type: UPDATE_SHOPPING_ITEM,
    id,
    text,
    amount,
    cost
})

export const deleteShoppingItem = (shoppingItem) => ({
    type: DELETE_SHOPPING_ITEM,
    shoppingItem
})

export const editShoppingItem = (shoppingItem) => ({
    type: EDIT_SHOPPING_ITEM,
    shoppingItem
})

export const shoppingItemResetEdit = () => ({
    type: RESET_EDIT_SHOPPING
})