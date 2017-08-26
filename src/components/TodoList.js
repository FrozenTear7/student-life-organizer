import React, { Component } from 'react'

class TodoList extends Component {
    render () {
        const { todos, onEditClick, onDeleteClick, onCompleteClick } = this.props

        return (
            <div className='container'>
                <h2>Todos</h2>
                <ul className='list-group'>
                    {todos.map(todo => (
                    <li className='list-group-item' key={todo.id} style={{
                        textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                        {todo.text}
                        <div className='container'>
                            <button
                                onClick={onEditClick}
                                className='btn btn-danger'
                            >
                                Edit todo
                            </button>
                        </div>
                        <div className='container'>
                            <button
                                onClick={onDeleteClick}
                                className='btn btn-danger'
                            >
                                Delete todo
                            </button>
                        </div>
                        <div className='container'>
                            <button
                                onClick={onCompleteClick}
                                className='btn btn-danger'
                            >
                                Complete todo
                            </button>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default TodoList