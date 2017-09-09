import { ADD_FRIDGE_ITEM, UPDATE_FRIDGE_ITEM, DELETE_FRIDGE_ITEM, EDIT_FRIDGE_ITEM, RESET_EDIT_FRIDGE } from '../../constants/index'

const INITIAL_STATE = {
    fridge: [{ id: null, text: null, amount: null }],
    editedFridgeItem: { fridgeItem: { id: null, text: null, amount: null } }
}

const fridge = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_FRIDGE_ITEM:
            return { ...state, fridge: [...state.fridge, { id: action.id, text: action.text, amount: action.amount }] }
        case UPDATE_FRIDGE_ITEM:
            return {
                ...state, fridge: state.fridge.map(fridgeItem =>
                    (fridgeItem.id === action.id)
                        ? {...fridgeItem, text: action.text, amount: action.amount }
                        : fridgeItem
                )
            }
        case DELETE_FRIDGE_ITEM:
            return {
                ...state, fridge: state.fridge.filter(fridgeItem =>
                    (fridgeItem.id !== action.id)
                )
            }
        case EDIT_FRIDGE_ITEM:
            return {
                ...state, editedFridgeItem: { fridgeItem: action.fridgeItem }
            }
        case RESET_EDIT_FRIDGE:
            return {
                ...state, editedFridgeItem: { fridgeItem: { id: null, text: null, amount: null } }
            }
        default:
            return state
    }
}

export default fridge