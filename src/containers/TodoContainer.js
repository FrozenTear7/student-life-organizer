import { connect } from 'react-redux'
import Todo from '../components/Todo'
import { hasSubmitSucceeded } from 'redux-form'
import { deleteTodo, toggleTodo, editTodo, todoResetEdit } from '../actions/todoActions'

const mapStateToProps = (state, ownProps) => ({
    filter: state.todos.filter,
    editedTodo: state.todos.editedTodo,
    submitSucceeded: hasSubmitSucceeded('Todo')(state),
    todo: ownProps.todo
})

const mapDispatchToProps = (dispatch) => ({
    onTodoDelete: (id) => dispatch(deleteTodo(id)),
    onTodoComplete: (id) => dispatch(toggleTodo(id)),
    onTodoEdit: (todo) => dispatch(editTodo(todo)),
    onTodoGoBack: () => dispatch(todoResetEdit())
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
