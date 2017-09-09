import { connect } from 'react-redux'
import ExamList from '../components/ExamList'

const mapStateToProps = (state) => ({
    exams: state.exams.exams
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ExamList)
