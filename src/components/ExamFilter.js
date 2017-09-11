import React from 'react'

const ExamFilter = ({ onExamShowAllClick, onExamShowHighPriorityClick, onExamShowLowPriorityClick }) => {
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
        </div>
    )
}

export default ExamFilter