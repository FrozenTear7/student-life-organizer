import React, { Component } from 'react'

class TodoUpdate extends Component {
    render () {
        const { onUpdateClick } = this.props

        return (
            <div className='container'>
                <button
                    onClick={() => onUpdateClick()}
                    className='btn btn-danger'
                >
                    Update todo
                </button>
            </div>
        )
    }
}

export default TodoUpdate
