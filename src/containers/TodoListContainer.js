import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => ({
    todos: state.todos.todos
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
