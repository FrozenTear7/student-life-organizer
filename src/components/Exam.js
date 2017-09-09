import React from 'react'
import { connect } from 'react-redux'
import { updateExam, examResetEdit } from '../actions/index'
import renderField from './renderField'
import { reduxForm, Field, reset } from 'redux-form'

export const alertStyle = 'alert alert-danger mt-2 p-2 pl-3'

export const required = (value) =>
    !value
        ? <div className={alertStyle}>Text required</div>
        : undefined

const submitExam = (values, dispatch, props) => {
    dispatch(updateExam(props.exam.id, values.text))
    dispatch(examResetEdit())
    dispatch(reset('Exam'))
}

let Exam = ({ handleSubmit, editedExam, exam, onExamGoBack, onExamDelete, onExamEdit, onExamComplete }) => {
    if(exam.id !== editedExam.exam.id) {
        return (
            <li className='list-group-item' key={exam.id} style={{
                textDecoration: exam.completed ? 'line-through' : 'none'
            }}
            >
                <div className='container'>
                    {exam.text}
                    <br/>
                    <button
                        onClick={() => onExamEdit(exam)}
                        className='btn btn-info btn-sm'
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onExamDelete(exam.id)}
                        className='btn btn-danger btn-sm'
                    >
                        Delete
                    </button>
                    <button
                        onClick={() => onExamComplete(exam.id)}
                        className='btn btn-success btn-sm'
                    >
                        Complete
                    </button>
                </div>
            </li>
        )
    } else {
        return (
            <li className='list-group-item' key={exam.id}>
                <form onSubmit={handleSubmit(submitExam)} >
                    <Field
                        name='text'
                        type='text'
                        label='New Exam text'
                        component={renderField}
                        validate={[required]}
                    />
                    <button
                        type='submit'
                        className='btn btn-success btn-sm'
                    >
                        Update Exam
                    </button>
                    <button
                        onClick={() => onExamGoBack(exam)}
                        className='btn btn-secondary btn-sm'
                    >
                        Go back
                    </button>
                </form>
            </li>
        )
    }
}

Exam = reduxForm({
    form: 'Exam'
})(Exam)

Exam = connect(
    state => ({
        initialValues: state.exams.editedExam.exam
    })
)(Exam)

export default Exam