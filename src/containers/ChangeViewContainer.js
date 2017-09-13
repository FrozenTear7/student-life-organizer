import { connect } from 'react-redux'
import ChangeView from '../components/ChangeView'
import { changeView } from '../actions/viewActions'

const mapStateToProps = (state) => ({
    view: state.view.view
})

const mapDispatchToProps = (dispatch) => ({
    onViewChange: (view) => dispatch(changeView(view))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeView)
