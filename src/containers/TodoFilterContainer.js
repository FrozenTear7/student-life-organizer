import { connect } from 'react-redux'
import TodoFilter from '../components/TodoFilter'
import { showAllTodos, showHighPriorityTodos, showLowPriorityTodos } from '../actions/index'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    setAllFilter: () => dispatch(showAllTodos()),
    setHighPriorityFilter: () => dispatch(showHighPriorityTodos()),
    setLowPriorityFilter: () => dispatch(showLowPriorityTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter)
