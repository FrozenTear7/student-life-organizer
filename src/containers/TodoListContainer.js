import { connect } from 'react-redux'
import { deleteTodo, toggleTodo } from '../actions/index'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    onTodoClickDelete: (id) => {
        dispatch(deleteTodo(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
