import React from 'react'
import { connect } from 'react-redux'
import { updateTodo, todoResetEdit } from '../actions/index'
import renderField from './renderField'
import { reduxForm, Field, reset } from 'redux-form'

export const alertStyle = 'alert alert-danger mt-2 p-2 pl-3'

export const required = (value) =>
    !value
        ? <div className={alertStyle}>Text required</div>
        : undefined

const submitTodo = (values, dispatch, props) => {
    dispatch(updateTodo(props.todo.id, values.text))
    dispatch(todoResetEdit())
    dispatch(reset('Todo'))
}

let Todo = ({ handleSubmit, editedTodo, todo, onTodoGoBack, onTodoDelete, onTodoEdit, onTodoComplete }) => {
    if(todo.id !== editedTodo.todo.id) {
        return (
            <li className='list-group-item' key={todo.id} style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
            }}
            >
                <div className='container'>
                    {todo.text}
                    <br/>
                    <button
                        onClick={() => onTodoEdit(todo)}
                        className='btn btn-info btn-sm'
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onTodoDelete(todo.id)}
                        className='btn btn-danger btn-sm'
                    >
                        Delete
                    </button>
                    <button
                        onClick={() => onTodoComplete(todo.id)}
                        className='btn btn-success btn-sm'
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
                        name='text'
                        type='text'
                        label='New Todo text'
                        component={renderField}
                        validate={[required]}
                    />
                    <button
                        type='submit'
                        className='btn btn-success btn-sm'
                    >
                        Update Todo
                    </button>
                    <button
                        onClick={() => onTodoGoBack(todo)}
                        className='btn btn-secondary btn-sm'
                    >
                        Go back
                    </button>
                </form>
            </li>
        )
    }
}

Todo = reduxForm({
    form: 'Todo'
})(Todo)

Todo = connect(
    state => ({
        initialValues: state.todos.editedTodo.todo
    })
)(Todo)

export default Todo