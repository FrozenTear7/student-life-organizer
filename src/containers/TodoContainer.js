import { connect } from 'react-redux'
import Todo from '../components/Todo'
import { hasSubmitSucceeded } from 'redux-form'
import { deleteTodo, toggleTodo, editTodo } from '../actions/index'

const mapStateToProps = (state, ownProps) => ({
    submitSucceeded: hasSubmitSucceeded('TodoList')(state),
    todo: ownProps.todo
})

const mapDispatchToProps = (dispatch) => ({
    onTodoDelete: (id) => dispatch(deleteTodo(id)),
    onTodoComplete: (id) => dispatch(toggleTodo(id)),
    onTodoEdit: (id) => dispatch(editTodo(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
