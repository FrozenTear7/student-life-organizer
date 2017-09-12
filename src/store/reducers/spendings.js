import {
    DELETE_SPENDINGS, UPDATE_SPENDINGS, RESET_EDIT_SPENDINGS, SUBTRACT_SPENDINGS,
    SUBTRACT_COST
} from '../../constants/index'

const INITIAL_STATE = {
    spendings: { amount: 0.00, amountLeft: 0.00, edit: false }
}

const spendings = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_SPENDINGS:
            return {
                ...state, spendings: { amount: action.amount, amountLeft: action.amountLeft, edit: false }
            }
        case DELETE_SPENDINGS:
            return {
                ...state, spendings: { amount: 0.00, amountLeft: 0.00 }
            }
        case RESET_EDIT_SPENDINGS:
            return {
                ...state, spendings: { ...state.spendings, edit: !state.spendings.edit }
            }
        case SUBTRACT_SPENDINGS:
            return {
                ...state, spendings: { ...state.spendings, amountLeft: ((state.spendings.amountLeft)-(action.subtractAmount)) }
            }
        case SUBTRACT_COST:
            return {
                ...state, spendings: { ...state.spendings, amountLeft: (state.spendings.amountLeft-action.shoppingCost) }
            }
        default:
            return state
    }
}

export default spendings