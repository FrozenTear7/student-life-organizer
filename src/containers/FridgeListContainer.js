import { connect } from 'react-redux'
import FridgeList from '../components/FridgeList'

const mapStateToProps = (state) => ({
    fridge: state.fridge.fridge
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(FridgeList)