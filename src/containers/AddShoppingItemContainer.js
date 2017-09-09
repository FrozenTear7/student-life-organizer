import { connect } from 'react-redux'
import { hasSubmitSucceeded } from 'redux-form'
import AddShoppingItem from '../components/AddShoppingItem'

const mapStateToProps = (state, ownProps) => ({
    submitSucceeded: hasSubmitSucceeded('AddShoppingItem')(state)
})

export default connect(mapStateToProps)(AddShoppingItem)
