import React from 'react'
import { connect } from 'react-redux'
import { updateFridgeItem, fridgeItemResetEdit } from '../actions/index'
import renderField from './renderField'
import { reduxForm, Field, reset } from 'redux-form'

const submitFridgeItem = (values, dispatch, props) => {
    dispatch(updateFridgeItem(props.fridgeItem.id, values.text, values.amount))
    dispatch(fridgeItemResetEdit())
    dispatch(reset('Fridge'))
}

let Fridge = ({ handleSubmit, editedFridgeItem, fridgeItem, onFridgeItemEdit, onFridgeItemDelete, onFridgeItemGoBack }) => {
    if(fridgeItem.id !== editedFridgeItem.fridgeItem.id) {
        return (
            <li className='list-group-item' key={fridgeItem.id} >
                <div className='container'>
                    {fridgeItem.text}
                    <br/>
                    Amount: {fridgeItem.amount}
                    <br/>
                    <button
                        onClick={() => onFridgeItemEdit(fridgeItem)}
                        className='btn btn-info'
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onFridgeItemDelete(fridgeItem.id)}
                        className='btn btn-danger'
                    >
                        Delete
                    </button>
                </div>
            </li>
        )
    } else {
        return (
            <li className='list-group-item' key={fridgeItem.id}>
                <form onSubmit={handleSubmit(submitFridgeItem)} >
                    <Field
                        name='text'
                        type='text'
                        label='New Fridge Item text'
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
                        Edit Fridge Item
                    </button>
                    <button
                        onClick={() => onFridgeItemGoBack()}
                        className='btn btn-secondary'
                    >
                        Go back
                    </button>
                </form>
            </li>
        )
    }
}

Fridge = reduxForm({
    form: 'Fridge'
})(Fridge)

Fridge = connect(
    state => ({
        initialValues: state.fridge.editedFridgeItem.fridgeItem
    })
)(Fridge)

export default Fridge