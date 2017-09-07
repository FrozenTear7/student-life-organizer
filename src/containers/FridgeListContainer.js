import { connect } from 'react-redux'
import FridgeList from '../components/FridgeList'
import { hasSubmitSucceeded } from 'redux-form'
import { deleteFridgeItem, editFridgeItem } from '../actions/index'

const mapStateToProps = (state) => ({
    submitSucceeded: hasSubmitSucceeded('FridgeList')(state),
    fridge: state.fridge.fridge
})

const mapDispatchToProps = (dispatch) => ({
    onFridgeItemDelete: (id) => dispatch(deleteFridgeItem(id)),
    onFridgeItemEdit: (id) => dispatch(editFridgeItem(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FridgeList)