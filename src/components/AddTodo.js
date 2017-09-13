import React from 'react'
import { reduxForm, Field, reset } from 'redux-form'
import { addTodo } from '../actions/todoActions'
import { connect } from 'react-redux'
import renderField from './renderField'
import { required } from '../utils/validateForm'

const submitTodo = (values, dispatch) => {
    dispatch(addTodo(values.text, values.highPriority, values.date))
    dispatch(reset('AddTodo'))
}

let AddTodo = ({ handleSubmit }) => {
    return (
        <div className='container'>
            <form onSubmit={handleSubmit(submitTodo)} >
                <Field
                    name='text'
                    type='text'
                    label='New Todo'
                    component={renderField}
                    validate={[required]}
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
                    className='btn btn-success'
                >
                    Add Todo
                </button>
            </form>
        </div>
    )
}


AddTodo = reduxForm({
    form: 'AddTodo'
})(AddTodo)

AddTodo = connect()(AddTodo)

export default AddTodo