import { ADD_SHOPPING_ITEM, UPDATE_SHOPPING_ITEM, DELETE_SHOPPING_ITEM, EDIT_SHOPPING_ITEM, RESET_EDIT_SHOPPING } from '../../constants/index'

const INITIAL_STATE = {
    shopping: [{ id: 0, text: 'Add new products!', amount: 1 }],
    editedShoppingItem: { shoppingItem: { id: null, text: null, amount: null } }
}

const shopping = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_SHOPPING_ITEM:
            return { ...state, shopping: [...state.shopping, { id: action.id, text: action.text, amount: action.amount }] }
        case UPDATE_SHOPPING_ITEM:
            return {
                ...state, shopping: state.shopping.map(shoppingItem =>
                    (shoppingItem.id === action.id)
                        ? {...shoppingItem, text: action.text, amount: action.amount }
                        : shoppingItem
                )
            }
        case DELETE_SHOPPING_ITEM:
            return {
                ...state, shopping: state.shopping.filter(shoppingItem =>
                    (shoppingItem.id !== action.id)
                )
            }
        case EDIT_SHOPPING_ITEM:
            return {
                ...state, editedShoppingItem: { shoppingItem: action.shoppingItem }
            }
        case RESET_EDIT_SHOPPING:
            return {
                ...state, editedShoppingItem: { shoppingItem: { id: null, text: null, amount: null } }
            }
        default:
            return state
    }
}

export default shopping