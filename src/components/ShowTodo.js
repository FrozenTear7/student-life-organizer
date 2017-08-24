import React from 'react'

const Todo = ({ onClick, text }) => (
    <li onClick={onClick}>
        {text}
    </li>
)

export default Todo
