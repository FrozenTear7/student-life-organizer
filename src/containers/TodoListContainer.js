import { connect } from 'react-redux'
import { toggleTodo } from '../actions/index'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    onTodoClick: toggleTodo
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
