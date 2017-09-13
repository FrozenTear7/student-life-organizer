import React from 'react'
import { connect } from 'react-redux'
import { updateShoppingItem, shoppingItemResetEdit } from '../actions/shoppingActions'
import renderField from './renderField'
import { reduxForm, Field, reset } from 'redux-form'
import {positiveNumber, required} from '../utils/validateForm'

const submitShoppingItem = (values, dispatch, props) => {
    dispatch(updateShoppingItem(props.shoppingItem.id, values.text, values.amount, values.cost))
    dispatch(shoppingItemResetEdit())
    dispatch(reset('Shopping'))
}

let Shopping = ({ handleSubmit, editedShoppingItem, shoppingItem, onShoppingItemEdit, onShoppingItemDelete, onShoppingItemGoBack }) => {
    if(shoppingItem.id !== editedShoppingItem.shoppingItem.id) {
        return (
            <li className='list-group-item' key={shoppingItem.id} >
                <div className='container'>
                    {shoppingItem.text}
                    {shoppingItem.amount ?
                        <div>
                            Amount: {shoppingItem.amount}
                        </div>
                        : null
                    }
                    {shoppingItem.cost ?
                        <div>
                            Cost: {shoppingItem.cost}
                        </div>
                        : null
                    }
                    <button
                        onClick={() => onShoppingItemEdit(shoppingItem)}
                        className='btn btn-info btn-sm'
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onShoppingItemDelete(shoppingItem)}
                        className='btn btn-danger btn-sm'
                    >
                        Delete
                    </button>
                </div>
            </li>
        )
    } else {
        return (
            <li className='list-group-item' key={shoppingItem.id}>
                <form onSubmit={handleSubmit(submitShoppingItem)} >
                    <Field
                        name='text'
                        type='text'
                        label='Edit Shopping Item'
                        component={renderField}
                        validate={required}
                    />
                    <Field
                        name='amount'
                        type='number'
                        label='Amount'
                        component={renderField}
                        validate={positiveNumber}
                    />
                    <Field
                        name='cost'
                        type='number'
                        label='Cost'
                        component={renderField}
                        validate={positiveNumber}
                    />
                    <button
                        type='submit'
                        className='btn btn-success btn-sm'
                    >
                        Update Shopping Item
                    </button>
                    <button
                        onClick={() => onShoppingItemGoBack()}
                        className='btn btn-secondary btn-sm'
                    >
                        Go back
                    </button>
                </form>
            </li>
        )
    }
}

Shopping = reduxForm({
    form: 'Shopping',
    enableReinitialize: true
})(Shopping)

Shopping = connect(
    state => ({
        initialValues: state.shopping.editedShoppingItem.shoppingItem
    })
)(Shopping)

export default Shopping