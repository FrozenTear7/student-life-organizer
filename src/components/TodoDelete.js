import React, { Component } from 'react'

class TodoDelete extends Component {
    render () {
        const { onDeleteClick } = this.props

        return (
            <div className='container'>
                <button
                    onClick={() => onDeleteClick()}
                    className='btn btn-danger'
                >
                    Delete todo
                </button>
            </div>
        )
    }
}

export default TodoDelete
