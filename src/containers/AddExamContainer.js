import { connect } from 'react-redux'
import { hasSubmitSucceeded } from 'redux-form'
import AddExam from '../components/AddExam'

const mapStateToProps = (state, ownProps) => ({
    submitSucceeded: hasSubmitSucceeded('AddExam')(state)
})

export default connect(mapStateToProps)(AddExam)
