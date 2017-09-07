import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { hasSubmitSucceeded } from 'redux-form'
import { deleteTodo, toggleTodo, editTodo } from '../actions/index'

const mapStateToProps = (state) => ({
    submitSucceeded: hasSubmitSucceeded('TodoList')(state),
    todos: state.todos.todos
})

const mapDispatchToProps = (dispatch) => ({
    onTodoDelete: (id) => dispatch(deleteTodo(id)),
    onTodoComplete: (id) => dispatch(toggleTodo(id)),
    onTodoEdit: (id) => dispatch(editTodo(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
