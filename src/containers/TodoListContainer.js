import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { editTodo, toggleTodo, deleteTodo } from '../actions/index'

const mapStateToProps = (state) => ({
    todos: state.todos.todos
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onEditClick: () => {
        dispatch(editTodo(ownProps.id))
    },
    onCompleteClick: () => {
        dispatch(toggleTodo(ownProps.id))
    },
    onDeleteClick: () => {
        dispatch(deleteTodo(ownProps.id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
