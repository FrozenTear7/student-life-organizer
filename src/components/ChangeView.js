import React from 'react'

let ChangeView = ({ onViewChange }) => {
    return (
        <div className='container'>
            <div className='btn-group-vertical' role='group' aria-label='...'>
                <button
                    type='button'
                    className='btn btn-default'
                    onClick={() => onViewChange('TODOS')}
                >
                    Todos
                </button>
                <button
                    type='button'
                    className='btn btn-default'
                    onClick={() => onViewChange('EXAMS')}
                >
                    Exams
                </button>
                <button
                    type='button'
                    className='btn btn-default'
                    onClick={() => onViewChange('FRIDGE')}
                >
                    Fridge
                </button>
                <button
                    type='button'
                    className='btn btn-default'
                    onClick={() => onViewChange('SHOPPING_LIST')}
                >
                    Shopping list
                </button>
            </div>
        </div>
    )
}

export default ChangeView