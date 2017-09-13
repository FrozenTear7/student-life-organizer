import { connect } from 'react-redux'
import Spendings from '../components/Spendings'
import { hasSubmitSucceeded } from 'redux-form'
import { deleteSpendings, spendingsResetEdit } from '../actions/spendingsActions'

const mapStateToProps = (state, ownProps) => ({
    submitSucceeded: hasSubmitSucceeded('Spendings')(state),
    spendings: state.spendings.spendings
})

const mapDispatchToProps = (dispatch) => ({
    onSpendingsEdit: () => dispatch(spendingsResetEdit()),
    onSpendingsDelete: () => dispatch(deleteSpendings())
})

export default connect(mapStateToProps, mapDispatchToProps)(Spendings)
