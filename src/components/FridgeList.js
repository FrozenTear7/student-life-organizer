import React from 'react'
import { connect } from 'react-redux'
import { updateFridgeItem, editFridgeItem } from '../actions/index'
import renderField from './renderField'
import { reduxForm, Field } from 'redux-form'

const submitFridgeItem = (values, dispatch, props) => {
    dispatch(updateFridgeItem(props.id, values.name, values.amount))
    dispatch(editFridgeItem(props.id))
}

let FridgeList = ({ handleSubmit, dispatch, onFridgeItemSubmit, fridge, onFridgeItemEdit, onFridgeItemDelete }) => (
    <ul>
        { fridge.map(fridgeItem => {
            if(!fridgeItem.edit) {
                return (
                    <li className='list-group-item' key={fridgeItem.id} >
                        <div className='container'>
                            {fridgeItem.text}
                            <br/>
                            {fridgeItem.amount}
                            <br/>
                            <button
                                onClick={() => onFridgeItemEdit(fridgeItem.id)}
                                className='btn btn-secondary'
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onFridgeItemDelete(fridgeItem.id)}
                                className='btn btn-secondary'
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
                                name='name'
                                type='text'
                                label='Text'
                                component={renderField}
                            />
                            <Field
                                name='amount'
                                type='number'
                                label='Amount'
                                component={renderField}
                            />
                            <button type='submit'>
                                Add Fridge Item
                            </button>
                            <button
                                onClick={() => onFridgeItemEdit(fridgeItem.id)}
                                className='btn btn-secondary'
                            >
                                Go back
                            </button>
                        </form>
                    </li>
                )
            }
        })}
    </ul>
)

FridgeList = reduxForm({
    form: 'FridgeList'
})(FridgeList)

FridgeList = connect()(FridgeList)

export default FridgeList