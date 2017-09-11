import { connect } from 'react-redux'
import TodoFilter from '../components/TodoFilter'
import { todoShowAll, todoShowHighPriority, todoShowLowPriority } from '../actions/index'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    onTodoShowAllClick: () => dispatch(todoShowAll()),
    onTodoShowHighPriorityClick: () => dispatch(todoShowHighPriority()),
    onTodoShowLowPriorityClick: () => dispatch(todoShowLowPriority()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter)
