import React from 'react'
import PropTypes from 'prop-types'

const renderField = ({ input, label, type, meta: { touched, error, invalid, warning } }) => (
    <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
        <label className='control-label text'><strong>{label}</strong></label>
        <div>
            <input {...input} className='form-control' placeholder={label} type={type} />
            <div className='help-block'>
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    </div>
)
renderField.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired
}

export default renderField
