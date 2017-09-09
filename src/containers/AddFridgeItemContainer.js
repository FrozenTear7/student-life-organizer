import { connect } from 'react-redux'
import { hasSubmitSucceeded } from 'redux-form'
import AddFridgeItem from '../components/AddFridgeItem'

const mapStateToProps = (state, ownProps) => ({
    submitSucceeded: hasSubmitSucceeded('AddFridgeItem')(state)
})

export default connect(mapStateToProps)(AddFridgeItem)
