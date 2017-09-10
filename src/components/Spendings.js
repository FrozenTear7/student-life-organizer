import React from 'react'
import { connect } from 'react-redux'
import { updateSpendings } from '../actions/index'
import renderField from './renderField'
import { reduxForm, Field, reset } from 'redux-form'

const getMonthDaysLeft = (money) => {
    const date = new Date()
    return (money/(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() - date.getDate())).toFixed(2)
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
                Daily spendings: {getMonthDaysLeft(spendings.amount)}
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
                    label='Edit amount'
                    component={renderField}
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
    form: 'Spendings',
    enableReinitialize: true
})(Spendings)

Spendings = connect(
    state => ({
        initialValues: state.spendings.spendings
    })
)(Spendings)

export default Spendings
