import React from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'
import FridgeListContainer from '../containers/FridgeListContainer'
import AddFridgeItemContainer from '../containers/AddFridgeItemContainer'
import DailySpendingsContainer from '../containers/DailySpendingsContainer'

const App = () => (
    <div className='container-fluid'>
        <div className='text-center'>
            <img src='logo.png' alt='Logo Student Life' />
            <h1>Welcome! Student life organizer will help you with your everyday tasks!</h1>
        </div>
        <br />

        <table>
            <th>
                <th>
                    <AddTodoContainer />
                </th>
                <th>
                    <br/>
                    <TodoListContainer />
                </th>
            </th>
            <th>
                <th>
                    <AddFridgeItemContainer/>
                </th>
                <th>
                    <br/>
                    <FridgeListContainer />
                </th>
            </th>
            <th>
                <DailySpendingsContainer />
            </th>
        </table>
    </div>
)

export default App
