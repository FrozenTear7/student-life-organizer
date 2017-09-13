import { connect } from 'react-redux'
import ShoppingList from '../components/ShoppingList'
import { subtractCost } from '../actions/spendingsActions'

const mapStateToProps = (state) => ({
    totalCost: state.shopping.totalCost,
    shopping: state.shopping.shopping
})

const mapDispatchToProps = (dispatch) => ({
    onTotalCostSubtract: (totalCost) => dispatch(subtractCost(totalCost))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)