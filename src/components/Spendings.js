import React from 'react'
import { connect } from 'react-redux'
import { updateSpendings, subtractSpendings } from '../actions/spendingsActions'
import renderField from './renderField'
import { reduxForm, Field, reset } from 'redux-form'
import moment from 'moment'
import {required, positiveNumber} from '../utils/validateForm'

const moneyDaily = (money) => {
    const a = moment().endOf('month')
    const b = moment().startOf('month')

    return (money/((a.diff(b, 'days'))+1)).toFixed(2)
}

const moneyDailyLeft = (money) => {
    const a = moment().endOf('month')
    const b = moment()

    return (money/((a.diff(b, 'days'))+1)).toFixed(2)
}

const submitSpendings = (values, dispatch) => {
    dispatch(updateSpendings(values.amount, values.amountLeft))
    dispatch(reset('Spendings'))
}

const submitSubtractSpendings = (values, dispatch) => {
    dispatch(subtractSpendings(values.subtractAmount))
    dispatch(reset('Spendings'))
}

const countDifference = (originalSum, left) => {
    return (left-originalSum)
}

let Spendings = ({ handleSubmit, spendings, onSpendingsEdit, onSpendingsDelete, onSpendingsSubtract }) => {
    if(!spendings.edit) {
        return (
            <div className='container'>
                Spendings for this month: {spendings.amount}
                <br/>
                Estimated daily spendings in this month: {moneyDaily(spendings.amount)}
                <br/>
                <br/>
                Money left this month: {spendings.amountLeft}
                <br/>
                Current daily spendings: {moneyDailyLeft(spendings.amountLeft)}
                <br/>
                <div className='container' style={{
                    color: (countDifference(moneyDaily(spendings.amount), moneyDailyLeft(spendings.amountLeft))>=0.00) ? 'green' : 'red',
                    fontSize: '30px'
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
                <br/><br/>
                <form onSubmit={handleSubmit(submitSubtractSpendings)} >
                    <Field
                        name='subtractAmount'
                        type='number'
                        label='Subtract amount'
                        component={renderField}
                        validate={[required, positiveNumber]}
                    />
                    <button
                        type='submit'
                        className='btn btn-success btn-sm'
                    >
                        Subtract spendings
                    </button>
                </form>
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
                    validate={[required, positiveNumber]}
                />
                <Field
                    name='amountLeft'
                    type='number'
                    label='Edit amount left'
                    component={renderField}
                    validate={[required, positiveNumber]}
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
