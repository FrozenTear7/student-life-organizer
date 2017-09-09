import { connect } from 'react-redux'
import Shopping from '../components/Shopping'
import { hasSubmitSucceeded } from 'redux-form'
import { deleteShoppingItem, editShoppingItem, shoppingItemResetEdit } from '../actions/index'

const mapStateToProps = (state, ownProps) => ({
    editedShoppingItem: state.shopping.editedShoppingItem,
    submitSucceeded: hasSubmitSucceeded('Shopping')(state),
    shoppingItem: ownProps.shoppingItem
})

const mapDispatchToProps = (dispatch) => ({
    onShoppingItemDelete: (id) => dispatch(deleteShoppingItem(id)),
    onShoppingItemEdit: (shoppingItem) => dispatch(editShoppingItem(shoppingItem)),
    onShoppingItemGoBack: () => dispatch(shoppingItemResetEdit())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shopping)
