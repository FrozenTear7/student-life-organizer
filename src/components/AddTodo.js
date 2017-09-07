import React from 'react'
import { reduxForm, Field, reset } from 'redux-form'
import { addTodo } from '../actions'
import { connect } from 'react-redux'
import renderField from './renderField'

const submitTodo = (values, dispatch) => {
    dispatch(addTodo(values.name))
    dispatch(reset('AddTodo'))
}

let AddTodo = ({ handleSubmit }) => {
    return (
        <div>
            <form onSubmit={handleSubmit(submitTodo)} >
                <Field
                    name='name'
                    type='text'
                    label='New Todo'
                    component={renderField}
                />
                <button type='submit'>
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