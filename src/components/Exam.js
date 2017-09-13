import React from 'react'
import { connect } from 'react-redux'
import { updateExam, examResetEdit } from '../actions/examActions'
import renderField from './renderField'
import { reduxForm, Field, reset } from 'redux-form'
import {SHOW_ALL_EXAMS, SHOW_HIGH_PRIORITY_EXAMS, SHOW_LOW_PRIORITY_EXAMS} from '../constants/index'
import moment from 'moment'
import { required } from '../utils/validateForm'

const submitExam = (values, dispatch, props) => {
    dispatch(updateExam(props.exam.id, values.text, values.subject, values.highPriority, values.date))
    dispatch(examResetEdit())
    dispatch(reset('Exam'))
}

const checkDateEnding = (endDate) => {
    const a = moment().format('YYYY-MM-DD')
    const b = moment().add(-1, 'day').format('YYYY-MM-DD')
    if (a === endDate){
        return true
    } else if (b === endDate){
        return true
    }
}

let Exam = ({ filter, handleSubmit, editedExam, exam, onExamGoBack, onExamDelete, onExamEdit, onExamComplete }) => {
    if((filter === SHOW_ALL_EXAMS) || (filter === SHOW_HIGH_PRIORITY_EXAMS && exam.highPriority) || (filter === SHOW_LOW_PRIORITY_EXAMS && !exam.highPriority)) {
        if (exam.id !== editedExam.exam.id) {
            return (
                <li className='list-group-item' key={exam.id} style={{
                    textDecoration: exam.completed ? 'line-through' : 'none',
                    color: exam.highPriority ? 'red' : 'black',
                    backgroundColor: checkDateEnding(exam.date) ? '#f9ed43' : null
                }}
                >
                    <div className='container'>
                        Exam: {exam.text}
                        {exam.date ?
                            <div>
                                Date: {exam.date}
                            </div>
                            : null
                        }
                        {exam.subject ?
                            <div>
                                Subject: {exam.subject}
                            </div>
                            : null
                        }
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
                    <form onSubmit={handleSubmit(submitExam)}>
                        <Field
                            name='text'
                            type='text'
                            label='Edit exam'
                            component={renderField}
                            validate={[required]}
                        />
                        <Field
                            name='subject'
                            type='text'
                            label='Edit subject'
                            component={renderField}
                        />
                        <Field
                            name='highPriority'
                            type='checkbox'
                            label='High priority'
                            component={renderField}
                        />
                        <Field
                            name='date'
                            type='date'
                            label='Date'
                            component={renderField}
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
    } else
        return null
}

Exam = reduxForm({
    form: 'Exam',
    enableReinitialize: true
})(Exam)

Exam = connect(
    state => ({
        initialValues: state.exams.editedExam.exam
    })
)(Exam)

export default Exam