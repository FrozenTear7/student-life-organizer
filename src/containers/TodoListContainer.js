import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { deleteTodo, toggleTodo, editTodo, updateTodo } from '../actions/index'

const mapStateToProps = (state) => ({
    todos: state.todos.todos
})

const mapDispatchToProps = (dispatch) => ({
    onTodoDelete: (id) => dispatch(deleteTodo(id)),
    onTodoComplete: (id) => dispatch(toggleTodo(id)),
    onTodoEdit: (id) => dispatch(editTodo(id)),
    onTodoUpdate: (id, values) => dispatch(updateTodo(id, values))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
