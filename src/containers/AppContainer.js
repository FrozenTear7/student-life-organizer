import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = (state) => ({
    view: state.view.view
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
