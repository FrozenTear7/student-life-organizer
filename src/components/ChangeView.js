import React from 'react'

let ChangeView = ({ view, onViewChange }) => {
    return (
        <div className='container'>
            <button
                type='button'
                className='btn btn-default'
                onClick={() => onViewChange('TODOS')}
            >
                Todos
            </button>
            <br/>
            <button
                type='button'
                className='btn btn-default'
                onClick={() => onViewChange('EXAMS')}
            >
                Exams
            </button>
            <br/>
            <button
                type='button'
                className='btn btn-default'
                onClick={() => onViewChange('FRIDGE')}
            >
                Fridge
            </button>
            <br/>
            <button
                type='button'
                className='btn btn-default'
                onClick={() => onViewChange('SHOPPING_LIST')}
            >
                Shopping list
            </button>
            <br/>
            Active view:
            <br/>
            {view}
        </div>
    )
}

export default ChangeView