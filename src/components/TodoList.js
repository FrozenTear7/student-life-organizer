import React from 'react'
import ShowTodo from './ShowTodo'

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map(todo =>
            <ShowTodo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ul>
)

export default TodoList