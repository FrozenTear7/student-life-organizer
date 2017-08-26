import React, { Component } from 'react'

class TodoEdit extends Component {
    render () {
        const { onEditClick } = this.props

        return (
            <div className='container'>
                <button
                    onClick={() => onEditClick()}
                    className='btn btn-danger'
                >
                    Edit todo
                </button>
            </div>
        )
    }
}

export default TodoEdit
