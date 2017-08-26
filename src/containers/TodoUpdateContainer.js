import { connect } from 'react-redux'
import { editTodo } from '../actions/index'
import TodoEdit from '../components/TodoEdit'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onEditClick: () => {
        dispatch(editTodo(ownProps.id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoEdit)
