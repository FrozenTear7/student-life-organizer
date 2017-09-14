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
import TodoFilterContainer from '../containers/TodoFilterContainer'
import ExamFilterContainer from '../containers/ExamFilterContainer'
import ChangeViewContainer from '../containers/ChangeViewContainer'

const App = ({ view }) =>  {
    return (
        <div className='container-fluid'>
            <div className='text-center'>
                <br/>
                <div style={{
                    fontSize: '45px'
                }}>
                    Student life organizer
                </div>
                <small>Manage your daily tasks, exams, shopping and spendings in one place!</small>
            </div>
            <br/>
            <div className='row'>
                <div className='col-lg-2'>
                    Choose category to show:
                    <br/>
                    <ChangeViewContainer/>
                    {
                        (view === 'TODOS') ?
                            <div>
                                <br/>
                                Filter todos:
                                <br/>
                                <TodoFilterContainer/>
                            </div> :
                            null
                    }
                    {
                        (view === 'EXAMS') ?
                            <div>
                                <br/>
                                Filter exams:
                                <br/>
                                <ExamFilterContainer/>
                            </div> :
                            null
                    }
                </div>
                <div className='col-lg-6'>
                    {
                        (view === 'TODOS') ?
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <AddTodoContainer/>
                                </div>
                                <br/>
                                <div className='col-lg-8'>
                                    <TodoListContainer/>
                                </div>
                            </div> :
                            null
                    }
                    {
                        (view === 'EXAMS') ?
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <AddExamContainer/>
                                </div>
                                <br/>
                                <div className='col-lg-8'>
                                    <ExamListContainer/>
                                </div>
                            </div> :
                            null
                    }
                    {
                        (view === 'FRIDGE') ?
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <AddFridgeItemContainer/>
                                </div>
                                <br/>
                                <div className='col-lg-8'>
                                    <FridgeListContainer/>
                                </div>
                            </div> :
                            null
                    }
                    {
                        (view === 'SHOPPING_LIST') ?
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <AddShoppingContainer/>
                                </div>
                                <br/>
                                <div className='col-lg-8'>
                                    <ShoppingListContainer/>
                                </div>
                            </div> :
                            null
                    }
                </div>
                <div className='col-lg-4'>
                    <SpendingsContainer/>
                </div>
            </div>
        </div>
    )
}

export default App
