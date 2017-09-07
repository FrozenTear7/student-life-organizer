import { connect } from 'react-redux'
import { hasSubmitSucceeded } from 'redux-form'
import AddTodo from '../components/AddTodo'

const mapStateToProps = (state, ownProps) => ({
    submitSucceeded: hasSubmitSucceeded('AddTodo')(state)
})

export default connect(mapStateToProps)(AddTodo)
