import {
    ADD_SHOPPING_ITEM, UPDATE_SHOPPING_ITEM, DELETE_SHOPPING_ITEM, EDIT_SHOPPING_ITEM, RESET_EDIT_SHOPPING,
    SUBTRACT_COST
} from '../../constants/index'

const INITIAL_STATE = {
    shopping: [],
    editedShoppingItem: { shoppingItem: { id: null, text: null, amount: null, cost: null } },
    totalCost: 0.00
}

const shopping = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_SHOPPING_ITEM:
            return { ...state, shopping: [...state.shopping, { id: action.id, text: action.text, amount: (action.amount || 0), cost: (action.cost || 0) }],
                totalCost: ((state.totalCost+(action.amount*action.cost)) || state.totalCost) }
        case UPDATE_SHOPPING_ITEM:
            return {
                ...state, shopping: state.shopping.map(shoppingItem =>
                    (shoppingItem.id === action.id)
                        ? {...shoppingItem, text: action.text, amount: (action.amount || 0), cost: (action.cost || 0) }
                        : shoppingItem
                ),
                totalCost: ((state.totalCost+(action.amount*action.cost)) || state.totalCost)
            }
        case DELETE_SHOPPING_ITEM:
            return {
                ...state, shopping: state.shopping.filter(shoppingItem =>
                    (shoppingItem.id !== action.shoppingItem.id)
                ),
                totalCost: ((state.totalCost-(action.shoppingItem.amount*action.shoppingItem.cost) || state.totalCost))
            }
        case EDIT_SHOPPING_ITEM:
            return {
                ...state, editedShoppingItem: { shoppingItem: action.shoppingItem }
            }
        case RESET_EDIT_SHOPPING:
            return {
                ...state, editedShoppingItem: { shoppingItem: { id: null, text: null, amount: null } }
            }
        case SUBTRACT_COST:
            return {
                ...state, shopping: [], totalCost: 0.00
            }
        default:
            return state
    }
}

export default shopping