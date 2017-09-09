import React from 'react'
import TodoContainer from '../containers/TodoContainer'

let TodoList = ({ handleSubmit, dispatch, onTodoSubmit, todos, onTodoEdit, onTodoDelete, onTodoComplete }) => (
    <ul>
    { todos.map(todo =>
        <TodoContainer key={todo.id} todo={todo} />
    )}
    </ul>
)

export default TodoList