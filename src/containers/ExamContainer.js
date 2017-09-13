import { connect } from 'react-redux'
import Exam from '../components/Exam'
import { hasSubmitSucceeded } from 'redux-form'
import { deleteExam, toggleExam, editExam, examResetEdit } from '../actions/examActions'

const mapStateToProps = (state, ownProps) => ({
    filter: state.exams.filter,
    editedExam: state.exams.editedExam,
    submitSucceeded: hasSubmitSucceeded('Exam')(state),
    exam: ownProps.exam
})

const mapDispatchToProps = (dispatch) => ({
    onExamDelete: (id) => dispatch(deleteExam(id)),
    onExamComplete: (id) => dispatch(toggleExam(id)),
    onExamEdit: (exam) => dispatch(editExam(exam)),
    onExamGoBack: () => dispatch(examResetEdit())
})

export default connect(mapStateToProps, mapDispatchToProps)(Exam)
