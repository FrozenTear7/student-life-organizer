import React from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'

const App = () => (
    <div className='container-fluid'>
        <div className='text-center'>
            <img src='logo.png' alt='Logo Student Life' />
            <h1>Welcome! Student life organizer will help you with your everyday tasks!</h1>
        </div>
        <br />
        <AddTodoContainer />
        <TodoListContainer />
    </div>
)

export default App
