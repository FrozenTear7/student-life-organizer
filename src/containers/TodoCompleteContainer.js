import { connect } from 'react-redux'
import { toggleTodo} from '../actions/index'
import TodoComplete from '../components/TodoComplete'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCompleteClick: () => {
        dispatch(toggleTodo(ownProps.id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoComplete)
