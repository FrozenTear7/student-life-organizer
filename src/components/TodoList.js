import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from './renderField'
import { updateTodo } from '../actions/index'
import { connect } from 'react-redux'
const alertStyle = 'alert alert-danger mt-2 p-2 pl-3'

const required = (value) =>
    !value
        ? <div className={alertStyle}>Required</div>
        : undefined

const validateAndEditWorker = (values, dispatch, props) => {
    return dispatch(updateTodo(props.id, values))
}

let TodoList = ({ handleSubmit, reset, submitting, todos, onTodoEdit, onTodoDelete, onTodoComplete, onTodoUpdate }) => (
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
                    <form onSubmit={handleSubmit(validateAndEditWorker)}>
                        <Field
                            name='todoText'
                            type='text'
                            component={renderField}
                            label='Edit your todo:'
                            validate={[required]}
                        />
                        <div>
                            <button
                                type='submit'
                                className='btn btn-primary'
                                disabled={submitting}
                            >
                                Update
                            </button>
                            <button
                                onClick={() => onTodoEdit(todo.id)}
                                className='btn btn-secondary'
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </li>
            )
        }
    })}
    </ul>
)

TodoList = connect()(TodoList)

export default reduxForm({
    form: 'TodoList'
})(TodoList)