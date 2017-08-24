import { connect } from 'react-redux'
import { deleteTodo } from '../actions/index'
import TodoDelete from '../components/TodoDelete'

const mapStateToProps = (state, ownProps) => ({
    todoId: ownProps.id,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDeleteClick: (id) => {
        dispatch(deleteTodo(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoDelete)
