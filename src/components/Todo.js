import React from 'react'
import { connect } from 'react-redux'
import { updateTodo, todoResetEdit } from '../actions/index'
import renderField from './renderField'
import { reduxForm, Field, reset } from 'redux-form'
import { SHOW_ALL_TODOS, SHOW_HIGH_PRIORITY_TODOS, SHOW_LOW_PRIORITY_TODOS } from '../constants/index'
import moment from 'moment'

const submitTodo = (values, dispatch, props) => {
    dispatch(updateTodo(props.todo.id, values.text, values.highPriority, values.date))
    dispatch(todoResetEdit())
    dispatch(reset('Todo'))
}

const checkDateEnding = (endDate) => {
    const a = moment().format('YYYY-MM-DD')
    const b = moment().add(-1, 'day').format('YYYY-MM-DD')
    if (a === endDate){
        return true
    } else if (b === endDate){
        return true
    }
}

let Todo = ({ filter, handleSubmit, editedTodo, todo, onTodoGoBack, onTodoDelete, onTodoEdit, onTodoComplete }) => {
    if((filter === SHOW_ALL_TODOS) || (filter === SHOW_HIGH_PRIORITY_TODOS && todo.highPriority) || (filter === SHOW_LOW_PRIORITY_TODOS && !todo.highPriority)) {
        if (todo.id !== editedTodo.todo.id) {
            return (
                <li className='list-group-item' key={todo.id} style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.highPriority ? 'red' : 'black',
                    backgroundColor: checkDateEnding(todo.date) ? '#f9ed43' : null
                }}
                >
                    <div className='container'>
                        {todo.text}
                        {todo.date ? <br/> : null}
                        {todo.date}
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
        } else if (todo.id === editedTodo.todo.id) {
            return (
                <li className='list-group-item' key={todo.id}>
                    <form onSubmit={handleSubmit(submitTodo)}>
                        <Field
                            name='text'
                            type='text'
                            label='Edit todo'
                            component={renderField}
                        />
                        <Field
                            name='highPriority'
                            type='checkbox'
                            label='High priority'
                            component={renderField}
                        />
                        <Field
                            name='date'
                            type='date'
                            label='Date'
                            component={renderField}
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
    } else
        return null
}

Todo = reduxForm({
    form: 'Todo',
    enableReinitialize: true
})(Todo)

Todo = connect(
    state => ({
        initialValues: state.todos.editedTodo.todo
    })
)(Todo)

export default Todo