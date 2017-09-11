import React from 'react'

const TodoFilter = ({ setAllFilter, setHighPriorityFilter, setLowPriorityFilter }) => {
    return (
        <div className='container'>
            <div className='container'>
                <button
                    onClick={() => setAllFilter()}
                    className='btn btn-info btn-sm'
                >
                    Show all
                </button>
                <button
                    onClick={() => setHighPriorityFilter()}
                    className='btn btn-info btn-sm'
                >
                    Show high priority
                </button>
                <button
                    onClick={() => setLowPriorityFilter()}
                    className='btn btn-info btn-sm'
                >
                    Show low priority
                </button>
            </div>
        </div>
    )
}

export default TodoFilter
