import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import {todoShowAll, todoShowHighPriority, todoShowLowPriority} from '../actions/index'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    onTodoShowAllClick: () => dispatch(todoShowAll),
    onTodoShowHighPriorityClick: () => dispatch(todoShowHighPriority),
    onTodoShowLowPriorityClick: () => dispatch(todoShowLowPriority),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
