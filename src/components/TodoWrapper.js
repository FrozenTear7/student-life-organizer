import React from 'react'
import TodoDeleteContainer from '../containers/TodoDeleteContainer'
import TodoCompleteContainer from '../containers/TodoCompleteContainer'
import TodoUpdateContainer from '../containers/TodoUpdateContainer'
import TodoEditContainer from '../containers/TodoEditContainer'

const TodoWrapper = todo => (
    (!todo.edit) ?
        <li style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
            }}
        >
            {todo.text}
            <TodoDeleteContainer id={todo.id}/>
            <TodoCompleteContainer id={todo.id}/>
            <TodoEditContainer id={todo.id}/>
        </li>
        :
        <li>
            <TodoUpdateContainer todo={todo}/>
        </li>

    )

export default TodoWrapper
