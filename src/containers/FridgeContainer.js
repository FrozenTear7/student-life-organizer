import { connect } from 'react-redux'
import Fridge from '../components/Fridge'
import { hasSubmitSucceeded } from 'redux-form'
import { deleteFridgeItem, editFridgeItem } from '../actions/index'

const mapStateToProps = (state, ownProps) => ({
    submitSucceeded: hasSubmitSucceeded('FridgeList')(state),
    fridgeItem: ownProps.fridgeItem
})

const mapDispatchToProps = (dispatch) => ({
    onFridgeItemDelete: (id) => dispatch(deleteFridgeItem(id)),
    onFridgeItemEdit: (id) => dispatch(editFridgeItem(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Fridge)
