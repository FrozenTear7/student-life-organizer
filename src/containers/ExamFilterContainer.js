import { connect } from 'react-redux'
import ExamFilter from '../components/ExamFilter'
import { examShowAll, examShowHighPriority, examShowLowPriority } from '../actions/examActions'

const mapStateToProps = (state) => ({
    filter: state.exams.filter
})

const mapDispatchToProps = (dispatch) => ({
    onExamShowAllClick: () => dispatch(examShowAll()),
    onExamShowHighPriorityClick: () => dispatch(examShowHighPriority()),
    onExamShowLowPriorityClick: () => dispatch(examShowLowPriority()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExamFilter)
