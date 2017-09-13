import React from 'react'

export const alertStyle = 'alert alert-danger mt-2 p-2 pl-3'

export const required = (value) =>
    !value
        ? <div className={alertStyle}>Required</div>
        : undefined

export const positiveNumber = (value) =>
    value && !/(^\d*\.?\d*[1-9]+\d*$)|(^[1-9]+\d*\.\d*$)/.test(value)
        ? <div className={alertStyle}>Only positive numbers</div>
        : undefined
