import React, { Component } from 'react'

class TodoList extends Component {
    componentDidMount () {
        this.props.onTodoClick()
    }

    renderTodos = (todos) => {
        return todos.map(todo => (
            <li className='list-group-item' key={todo.id} >
                <div className='row'>
                    <div className='col-md-1'>
                        <strong>{todo.text}</strong>
                    </div>
                </div>
            </li>
        ))
    }

    render () {
        const { todos } = this.props.todos

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