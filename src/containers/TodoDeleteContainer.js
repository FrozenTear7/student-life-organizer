import { connect } from 'react-redux'
import { deleteTodo } from '../actions/index'
import TodoDelete from '../components/TodoDelete'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDeleteClick: () => {
        dispatch(deleteTodo(ownProps.id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoDelete)
