import React from 'react'
import { connect } from 'react-redux'
import { updateTodo, editTodo } from '../actions/index'
import renderField from './renderField'
import { reduxForm, Field } from 'redux-form'

const submitTodo = (values, dispatch, props) => {
    dispatch(updateTodo(props.id, values.name))
    dispatch(editTodo(props.id))
}

let TodoList = ({ handleSubmit, dispatch, onTodoSubmit, todos, onTodoEdit, onTodoDelete, onTodoComplete }) => (
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
                    <form onSubmit={handleSubmit(submitTodo)} >
                        <Field
                            name='name'
                            type='text'
                            label='Name'
                            component={renderField}
                        />
                        <button type='submit'>
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

TodoList = reduxForm({
    form: 'TodoList'
})(TodoList)

TodoList = connect()(TodoList)

export default TodoList