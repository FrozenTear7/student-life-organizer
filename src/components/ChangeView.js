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
            <ul className='list-group'>
                <li className='list-group-item' style={{
                    fontSize: '15px'
                }}>
                    Active view:
                    <br/>
                    {view}
                </li>
            </ul>
        </div>
    )
}

export default ChangeView