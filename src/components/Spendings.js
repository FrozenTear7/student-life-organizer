import React from 'react'
import { connect } from 'react-redux'
import { updateSpendings } from '../actions/index'
import renderField from './renderField'
import { reduxForm, Field, reset } from 'redux-form'

const moneyDaily = (money) => {
    const date = new Date()
    return (money/(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate())).toFixed(2)
}

const moneyDailyLeft = (money) => {
    const date = new Date()
    return (money/((new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() - date.getDate())+1)).toFixed(2)
}

const submitSpendings = (values, dispatch,) => {
    dispatch(updateSpendings(values.amount, values.amountLeft))
    dispatch(reset('Spendings'))
}

const countDifference = (originalSum, left) => {
    return (left-originalSum)
}

let Spendings = ({ handleSubmit, spendings, onSpendingsEdit, onSpendingsDelete }) => {
    if(!spendings.edit) {
        return (
            <div className='container'>
                Spendings for this month: {spendings.amount}
                <br/>
                Money left this month: {spendings.amountLeft}
                <br/>
                <br/>
                Estimated daily spendings: {moneyDaily(spendings.amount)}
                <br/>
                Current daily spendings: {moneyDailyLeft(spendings.amountLeft)}
                <br/>
                <div className='container' style={{
                    color: (countDifference(moneyDaily(spendings.amount), moneyDailyLeft(spendings.amountLeft))>=0.00) ? 'green' : 'red'
                }}
                >
                    Daily spendings difference: {(countDifference(moneyDaily(spendings.amount), moneyDailyLeft(spendings.amountLeft))).toFixed(2)}
                </div>
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
                <Field
                    name='amountLeft'
                    type='number'
                    label='Edit amount left'
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
