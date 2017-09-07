import React from 'react'
import { connect } from 'react-redux'
import { updateTodo, editTodo } from '../actions/index'
import renderField from './renderField'
import { reduxForm, Field } from 'redux-form'

const submitTodo = (values, dispatch, props) => {
    dispatch(updateTodo(props.todo.id, values.name))
    dispatch(editTodo(props.todo.id))
}

let Todo = ({ handleSubmit, todo, onTodoEdit, onTodoDelete, onTodoComplete }) => {
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
                        className='btn btn-info'
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onTodoDelete(todo.id)}
                        className='btn btn-danger'
                    >
                        Delete
                    </button>
                    <button
                        onClick={() => onTodoComplete(todo.id)}
                        className='btn btn-success'
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
                        label='New Todo text'
                        component={renderField}
                    />
                    <button
                        type='submit'
                        className='btn btn-success'
                    >
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
}

Todo = reduxForm({
    form: 'Todo'
})(Todo)

Todo = connect(
    ownProps => ({
        initialValues: ownProps.todo
    })
)(Todo)

export default Todo