import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset } from 'redux-form'
import { addShoppingItem } from '../actions'
import renderField from './renderField'

const submitShoppingItem = (values, dispatch) => {
    dispatch(addShoppingItem(values.name, values.amount, values.cost))
    dispatch(reset('AddShoppingItem'))
}

let AddShoppingItem = ({ handleSubmit }) => {
    return (
        <div className='container'>
            <form onSubmit={handleSubmit(submitShoppingItem)} >
                <Field
                    name='name'
                    type='text'
                    label='New Shopping Item'
                    component={renderField}
                />
                <Field
                    name='amount'
                    type='number'
                    label='Amount'
                    component={renderField}
                />
                <Field
                    name='cost'
                    type='number'
                    label='Cost'
                    component={renderField}
                />
                <button
                    type='submit'
                    className='btn btn-success'
                >
                    Add Shopping Item
                </button>
            </form>
        </div>
    )
}

AddShoppingItem = reduxForm({
    form: 'AddShoppingItem'
})(AddShoppingItem)

AddShoppingItem = connect()(AddShoppingItem)

export default AddShoppingItem