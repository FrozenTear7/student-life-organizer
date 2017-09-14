import React from 'react'

const ExamFilter = ({ filter, onExamShowAllClick, onExamShowHighPriorityClick, onExamShowLowPriorityClick }) => {
    return (
        <div className='container'>
            <button
                onClick={() => onExamShowAllClick()}
                className='btn btn-info btn-sm'
            >
                Show all
            </button>
            <br/>
            <button
                onClick={() => onExamShowHighPriorityClick()}
                className='btn btn-info btn-sm'
            >
                Show high priority
            </button>
            <br/>
            <button
                onClick={() => onExamShowLowPriorityClick()}
                className='btn btn-info btn-sm'
            >
                Show low priority
            </button>
            <ul className='list-group'>
                <li className='list-group-item' style={{
                    fontSize: '15px'
                }}>
                    Active filter:
                    <br/>
                    {filter}
                </li>
            </ul>
        </div>
    )
}

export default ExamFilter