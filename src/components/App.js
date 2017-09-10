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
            <tbody>
                <tr>
                    <th>
                        <AddTodoContainer />
                        <br/>
                        <TodoListContainer />
                    </th>
                    <th>
                        <AddExamContainer />
                        <br/>
                        <ExamListContainer />
                    </th>
                    <th>
                        <AddFridgeItemContainer/>
                        <br/>
                        <FridgeListContainer />
                    </th>
                    <th>
                        <AddShoppingContainer />
                        <br />
                        <ShoppingListContainer />
                    </th>
                    <th>
                        <SpendingsContainer />
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
)

export default App
