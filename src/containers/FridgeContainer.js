import { connect } from 'react-redux'
import Fridge from '../components/Fridge'
import { hasSubmitSucceeded } from 'redux-form'
import { deleteFridgeItem, editFridgeItem, fridgeItemResetEdit } from '../actions/index'

const mapStateToProps = (state, ownProps) => ({
    editedFridgeItem: state.fridge.editedFridgeItem,
    submitSucceeded: hasSubmitSucceeded('Fridge')(state),
    fridgeItem: ownProps.fridgeItem
})

const mapDispatchToProps = (dispatch) => ({
    onFridgeItemDelete: (id) => dispatch(deleteFridgeItem(id)),
    onFridgeItemEdit: (fridgeItem) => dispatch(editFridgeItem(fridgeItem)),
    onFridgeItemGoBack: () => dispatch(fridgeItemResetEdit())
})

export default connect(mapStateToProps, mapDispatchToProps)(Fridge)
