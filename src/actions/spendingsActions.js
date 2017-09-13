import { UPDATE_SPENDINGS, DELETE_SPENDINGS, RESET_EDIT_SPENDINGS, SUBTRACT_SPENDINGS, SUBTRACT_COST } from '../constants/index'

export const updateSpendings = (amount, amountLeft) => ({
    type: UPDATE_SPENDINGS,
    amount,
    amountLeft
})

export const deleteSpendings = () => ({
    type: DELETE_SPENDINGS
})

export const spendingsResetEdit = () => ({
    type: RESET_EDIT_SPENDINGS
})

export const subtractSpendings = (subtractAmount) => ({
    type: SUBTRACT_SPENDINGS,
    subtractAmount
})

export const subtractCost = (shoppingCost) => ({
    type: SUBTRACT_COST,
    shoppingCost
})