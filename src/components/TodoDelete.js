import React, { Component } from 'react'

class TodoDelete extends Component {
    render () {
        const { todoId, onDeleteClick } = this.props

        return (
            <div className='container'>
                <button
                    onClick={() => onDeleteClick(todoId)}
                    className='btn btn-danger'
                >
                    Delete todo
                </button>
            </div>
        )
    }
}

export default TodoDelete
