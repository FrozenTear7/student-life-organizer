import React from 'react'
import { connect } from 'react-redux'
import { updateFridgeItem, fridgeItemResetEdit } from '../actions/fridgeActions'
import renderField from './renderField'
import { reduxForm, Field, reset } from 'redux-form'
import {positiveNumber, required} from '../utils/validateForm'

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
                    {fridgeItem.amount ?
                        <div>
                            Amount: {fridgeItem.amount}
                        </div>
                        : null
                    }
                    <button
                        onClick={() => onFridgeItemEdit(fridgeItem)}
                        className='btn btn-info btn-sm'
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onFridgeItemDelete(fridgeItem.id)}
                        className='btn btn-danger btn-sm'
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
                        label='Edit Fridge Item'
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
                    <button
                        type='submit'
                        className='btn btn-success btn-sm'
                    >
                        Udpate Fridge Item
                    </button>
                    <button
                        onClick={() => onFridgeItemGoBack()}
                        className='btn btn-secondary btn-sm'
                    >
                        Go back
                    </button>
                </form>
            </li>
        )
    }
}

Fridge = reduxForm({
    form: 'Fridge',
    enableReinitialize: true
})(Fridge)

Fridge = connect(
    state => ({
        initialValues: state.fridge.editedFridgeItem.fridgeItem
    })
)(Fridge)

export default Fridge