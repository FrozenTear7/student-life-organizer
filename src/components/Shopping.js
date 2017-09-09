import React from 'react'
import { connect } from 'react-redux'
import { updateShoppingItem, shoppingItemResetEdit } from '../actions/index'
import renderField from './renderField'
import { reduxForm, Field, reset } from 'redux-form'

export const alertStyle = 'alert alert-danger mt-2 p-2 pl-3'

export const required = (value) =>
    !value
        ? <div className={alertStyle}>Text required</div>
        : undefined

export const number = (value) =>
    value && !/^[1-9]\d*$/i.test(value)
        ? <div className={alertStyle}>Invalid number, must be positive</div>
        : undefined

const submitShoppingItem = (values, dispatch, props) => {
    dispatch(updateShoppingItem(props.shoppingItem.id, values.text, values.amount))
    dispatch(shoppingItemResetEdit())
    dispatch(reset('Shopping'))
}

let Shopping = ({ handleSubmit, editedShoppingItem, shoppingItem, onShoppingItemEdit, onShoppingItemDelete, onShoppingItemGoBack }) => {
    if(shoppingItem.id !== editedShoppingItem.shoppingItem.id) {
        return (
            <li className='list-group-item' key={shoppingItem.id} >
                <div className='container'>
                    {shoppingItem.text}
                    <br/>
                    Amount: {shoppingItem.amount}
                    <br/>
                    <button
                        onClick={() => onShoppingItemEdit(shoppingItem)}
                        className='btn btn-info btn-sm'
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onShoppingItemDelete(shoppingItem.id)}
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
                        label='New Shopping Item text'
                        component={renderField}
                        validate={[required]}
                    />
                    <Field
                        name='amount'
                        type='number'
                        label='Amount'
                        component={renderField}
                        validate={[required, number]}
                    />
                    <button
                        type='submit'
                        className='btn btn-success btn-sm'
                    >
                        Edit Shopping Item
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
    form: 'Shopping'
})(Shopping)

Shopping = connect(
    state => ({
        initialValues: state.shopping.editedShoppingItem.shoppingItem
    })
)(Shopping)

export default Shopping