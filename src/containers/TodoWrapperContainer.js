import { connect } from 'react-redux'
import TodoWrapper from '../components/TodoWrapper'

const mapStateToProps = (state) => ({
    todos: state.todos.todos
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoWrapper)
