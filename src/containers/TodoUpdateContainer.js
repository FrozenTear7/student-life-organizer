import { connect } from 'react-redux'
import { updateTodo } from '../actions/index'
import TodoDelete from '../components/TodoDelete'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onUpdateClick: () => {
        dispatch(updateTodo(ownProps.id, ownProps.text))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoDelete)
