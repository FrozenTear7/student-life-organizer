import { ADD_FRIDGE_ITEM, UPDATE_FRIDGE_ITEM, DELETE_FRIDGE_ITEM, EDIT_FRIDGE_ITEM } from '../../constants/index'

const INITIAL_STATE = {
    fridge: [{ id: 69, text: 'dupcia', amount: 69, edit: false }]
}

const todos = (state = INITIAL_STATE, action) => {
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
                ...state, fridge: state.fridge.map(fridgeItem =>
                    (fridgeItem.id === action.id)
                        ? {...fridgeItem, edit: !fridgeItem.edit}
                        : fridgeItem
                )
            }
        default:
            return state
    }
}

export default todos