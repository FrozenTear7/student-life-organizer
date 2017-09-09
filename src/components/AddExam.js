import React from 'react'
import { reduxForm, Field, reset } from 'redux-form'
import { addExam } from '../actions'
import { connect } from 'react-redux'
import renderField from './renderField'

const submitExam = (values, dispatch) => {
    dispatch(addExam(values.text))
    dispatch(reset('AddExam'))
}

let AddExam = ({ handleSubmit }) => {
    return (
        <div className='container'>
            <form onSubmit={handleSubmit(submitExam)} >
                <Field
                    name='text'
                    type='text'
                    label='New Exam'
                    component={renderField}
                />
                <button
                    type='submit'
                    className='btn btn-success'
                >
                    Add Exam
                </button>
            </form>
        </div>
    )
}


AddExam = reduxForm({
    form: 'AddExam'
})(AddExam)

AddExam = connect()(AddExam)

export default AddExam