import React from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'
import FridgeListContainer from '../containers/FridgeListContainer'
import AddFridgeItemContainer from '../containers/AddFridgeItemContainer'

const App = () => (
    <div className='container-fluid'>
        <div className='text-center'>
            <img src='logo.png' alt='Logo Student Life' />
            <h1>Welcome! Student life organizer will help you with your everyday tasks!</h1>
        </div>
        <br />

        <table>
            <th>
                <tr>
                    <AddTodoContainer />
                </tr>
                <tr>
                    <TodoListContainer />
                </tr>
            </th>
            <th>
                <tr>
                    <AddFridgeItemContainer/>
                </tr>
                <tr>
                    <FridgeListContainer />
                </tr>
            </th>
        </table>
    </div>
)

export default App
