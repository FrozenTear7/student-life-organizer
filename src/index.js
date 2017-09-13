import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppContainer from './containers/AppContainer'
import { loadState, saveState } from './store/localStorage'
import createStore from './store/createStore.js'
import './styles/index.css'

const persistedState = loadState()
const store = createStore(
    persistedState
)

store.subscribe(() => {
    saveState(store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
)
