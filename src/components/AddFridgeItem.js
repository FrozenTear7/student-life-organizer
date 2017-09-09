import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset } from 'redux-form'
import { addFridgeItem } from '../actions'
import renderField from './renderField'

const submitFridgeItem = (values, dispatch) => {
    dispatch(addFridgeItem(values.name, values.amount))
    dispatch(reset('AddFridgeItem'))
}

let AddFridgeItem = ({ handleSubmit }) => {
    return (
        <div className='container'>
            <form onSubmit={handleSubmit(submitFridgeItem)} >
                <Field
                    name='name'
                    type='text'
                    label='New Fridge Item'
                    component={renderField}
                />
                <Field
                    name='amount'
                    type='number'
                    label='Amount'
                    component={renderField}
                />
                <button
                    type='submit'
                    className='btn btn-success'
                >
                    Add Fridge Item
                </button>
            </form>
        </div>
    )
}

AddFridgeItem = reduxForm({
    form: 'AddFridgeItem'
})(AddFridgeItem)

AddFridgeItem = connect()(AddFridgeItem)

export default AddFridgeItem