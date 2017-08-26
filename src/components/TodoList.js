import React from 'react'
import { connect } from 'react-redux'
import { updateTodo, editTodo } from '../actions/index'

let input

let TodoList = ({ dispatch, onTodoSubmit, todos, onTodoEdit, onTodoDelete, onTodoComplete }) => (
    <ul>
    { todos.map(todo => {
        if(!todo.edit) {
            return (
                <li className='list-group-item' key={todo.id} style={{
                    textDecoration: todo.completed ? 'line-through' : 'none'
                }}
                >
                    <div className='container'>
                        {todo.text}
                        <br/>
                        <button
                            onClick={() => onTodoEdit(todo.id)}
                            className='btn btn-secondary'
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => onTodoDelete(todo.id)}
                            className='btn btn-secondary'
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => onTodoComplete(todo.id)}
                            className='btn btn-secondary'
                        >
                            Complete
                        </button>
                    </div>
                </li>
        )
        } else {
            return (
                <li className='list-group-item' key={todo.id}>
                    <form onSubmit={e => {
                        e.preventDefault()
                        if (!input.value.trim()) {
                            return
                        }
                        dispatch(updateTodo(todo.id, input.value))
                        dispatch(editTodo(todo.id))
                        input.value = ''
                    }}>
                        <input
                            value={todo.text}
                            ref={node => {
                            input = node
                        }} />
                        <button type="submit">
                            Update Todo
                        </button>
                        <button
                            onClick={() => onTodoEdit(todo.id)}
                            className='btn btn-secondary'
                        >
                            Go back
                        </button>
                    </form>
                </li>
            )
        }
    })}
    </ul>
)

TodoList = connect()(TodoList)

export default TodoList