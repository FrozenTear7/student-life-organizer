import React from 'react'
import TodoContainer from '../containers/TodoContainer'
import { SHOW_ALL, SHOW_HIGH_PRIORITY, SHOW_LOW_PRIORITY } from '../constants/index'

let TodoList = ({ filter, todos }) => {
    if(filter === SHOW_ALL)
        return (
            <ul>
                {todos.map((filter, todo) =>
                    <TodoContainer key={todo.id} todo={todo} filter={filter}/>
                )}
            </ul>
        )
    else if (filter === SHOW_HIGH_PRIORITY)
        return (
            <ul>
                {todos.map((filter, todo) =>
                    <TodoContainer key={todo.id} todo={todo} filter={filter}/>
                )}
            </ul>
        )
    else if (filter === SHOW_LOW_PRIORITY)
        return (
            <ul>
                {todos.map((filter, todo) =>
                    <TodoContainer key={todo.id} todo={todo} filter={filter}/>
                )}
            </ul>
        )
}

export default TodoList