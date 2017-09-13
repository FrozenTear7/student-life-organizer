import { connect } from 'react-redux'
import TodoFilter from '../components/TodoFilter'
import { todoShowAll, todoShowHighPriority, todoShowLowPriority } from '../actions/todoActions'

const mapStateToProps = (state) => ({
    filter: state.todos.filter
})

const mapDispatchToProps = (dispatch) => ({
    onTodoShowAllClick: () => dispatch(todoShowAll()),
    onTodoShowHighPriorityClick: () => dispatch(todoShowHighPriority()),
    onTodoShowLowPriorityClick: () => dispatch(todoShowLowPriority()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter)
