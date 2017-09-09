import { connect } from 'react-redux'
import Todo from '../components/Todo'
import { hasSubmitSucceeded } from 'redux-form'
import { deleteTodo, toggleTodo, editTodo, resetEdit } from '../actions/index'

const mapStateToProps = (state, ownProps) => ({
    editedTodo: state.todos.editedTodo,
    submitSucceeded: hasSubmitSucceeded('TodoList')(state),
    todo: ownProps.todo
})

const mapDispatchToProps = (dispatch) => ({
    onTodoDelete: (id) => dispatch(deleteTodo(id)),
    onTodoComplete: (id) => dispatch(toggleTodo(id)),
    onTodoEdit: (id) => dispatch(editTodo(id)),
    onTodoGoBack: (id) => dispatch(resetEdit())
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
