import React, { Component } from 'react'

class TodoComplete extends Component {
    render () {
        const { onCompleteClick } = this.props

        return (
            <div className='container'>
                <button
                    onClick={() => onCompleteClick()}
                    className='btn btn-danger'
                >
                    Complete todo
                </button>
            </div>
        )
    }
}

export default TodoComplete
