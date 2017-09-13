import React from 'react'

const TodoFilter = ({ filter, onTodoShowAllClick, onTodoShowHighPriorityClick, onTodoShowLowPriorityClick }) => {
    return (
        <div className='container'>
            <button
                onClick={() => onTodoShowAllClick()}
                className='btn btn-info btn-sm'
            >
                Show all
            </button>
            <br/>
            <button
                onClick={() => onTodoShowHighPriorityClick()}
                className='btn btn-info btn-sm'
            >
                Show high priority
            </button>
            <br/>
            <button
                onClick={() => onTodoShowLowPriorityClick()}
                className='btn btn-info btn-sm'
            >
                Show low priority
            </button>
            <br/>
            Active filter: {filter}
        </div>
    )
}

export default TodoFilter