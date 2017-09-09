import { DELETE_SPENDINGS, UPDATE_SPENDINGS, RESET_EDIT_SPENDINGS } from '../../constants/index'

const INITIAL_STATE = {
    spendings: { amount: 0.00, edit: false }
}

const spendings = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_SPENDINGS:
            return {
                ...state, spendings: { amount: action.amount, edit: false }
            }
        case DELETE_SPENDINGS:
            return {
                ...state, spendings: { amount: 0.00 }
            }
        case RESET_EDIT_SPENDINGS:
            return {
                ...state, spendings: { ...state.spendings, edit: !state.spendings.edit }
            }
        default:
            return state
    }
}

export default spendings