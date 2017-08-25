import React, { Component } from 'react'
import TodoDeleteContainer from '../containers/TodoDeleteContainer'
import TodoCompleteContainer from '../containers/TodoCompleteContainer'

class TodoList extends Component {
    renderTodos = ( todos ) => {
        return todos.map(todo => (
            <li className='list-group-item' key={todo.id} style={{
                textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
                {todo.text}
                <TodoDeleteContainer id={todo.id} />
                <TodoCompleteContainer id={todo.id} />
            </li>
        ))
    }

    render () {
        const { todos } = this.props

        return (
            <div className='container'>
                <h2>Todos</h2>
                <ul className='list-group'>
                    {this.renderTodos(todos)}
                </ul>
            </div>
        )
    }
}

export default TodoList