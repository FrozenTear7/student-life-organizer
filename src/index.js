import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
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
        <App />
    </Provider>,
    document.getElementById('root')
)
