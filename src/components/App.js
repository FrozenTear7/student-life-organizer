import React from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'
import AddFridgeItemContainer from '../containers/AddFridgeItemContainer'
import FridgeListContainer from '../containers/FridgeListContainer'
import SpendingsContainer from '../containers/SpendingsContainer'
import AddShoppingContainer from '../containers/AddShoppingItemContainer'
import ShoppingListContainer from '../containers/ShoppingListContainer'
import AddExamContainer from '../containers/AddExamContainer'
import ExamListContainer from '../containers/ExamListContainer'

const App = () => (
    <div className='container-fluid'>
        <div className='text-center'>
            <br />
            <h1>Welcome! Student life organizer will help you with your everyday tasks!</h1>
        </div>
        <br />

        <table className='table'>
            <th>
                <tr>
                    <AddTodoContainer />
                </tr>
                <tr>
                    <br/>
                    <TodoListContainer />
                </tr>
            </th>
            <th>
                <tr>
                    <AddExamContainer />
                </tr>
                <tr>
                    <br/>
                    <ExamListContainer />
                </tr>
            </th>
            <th>
                <tr>
                    <AddFridgeItemContainer/>
                </tr>
                <tr>
                    <br/>
                    <FridgeListContainer />
                </tr>
            </th>
            <th>
                <tr>
                    <AddShoppingContainer />
                </tr>
                <tr>
                    <br/>
                    <ShoppingListContainer />
                </tr>
            </th>
            <th>
                <SpendingsContainer />
            </th>
        </table>
    </div>
)

export default App
