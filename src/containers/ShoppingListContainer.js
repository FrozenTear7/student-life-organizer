import { connect } from 'react-redux'
import ShoppingList from '../components/ShoppingList'

const mapStateToProps = (state) => ({
    shopping: state.shopping.shopping
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)