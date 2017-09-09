import React from 'react'
import { connect } from 'react-redux'
import { updateSpendings } from '../actions/index'
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

const getTheMoney = (money) => {
    const date = new Date()
    return (money/ (new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate())).toFixed(2)
}

const submitSpendings = (values, dispatch,) => {
    dispatch(updateSpendings(values.amount))
    dispatch(reset('Spendings'))
}

let Spendings = ({ handleSubmit, spendings, onSpendingsEdit, onSpendingsDelete }) => {
    if(!spendings.edit) {
        return (
            <div className='container'>
                Spendings for this month: {spendings.amount}
                <br/>
                Daily spendings: {getTheMoney(spendings.amount)}
                <br/>
                <button
                    onClick={() => onSpendingsEdit()}
                    className='btn btn-info btn-sm'
                >
                    Edit
                </button>
                <button
                    onClick={() => onSpendingsDelete()}
                    className='btn btn-danger btn-sm'
                >
                    Reset spendings
                </button>
            </div>
        )
    } else {
        return (
            <form onSubmit={handleSubmit(submitSpendings)} >
                <Field
                    name='amount'
                    type='number'
                    label='New amount'
                    component={renderField}
                    validate={[required, number]}
                />
                <button
                    type='submit'
                    className='btn btn-success btn-sm'
                >
                    Update Spendings
                </button>
                <button
                    onClick={() => onSpendingsEdit()}
                    className='btn btn-secondary btn-sm'
                >
                    Go back
                </button>
            </form>
        )
    }
}

Spendings = reduxForm({
    form: 'Spendings'
})(Spendings)

Spendings = connect(
    state => ({
        initialValues: state.spendings.spendings
    })
)(Spendings)

export default Spendings
