import React from 'react'

const Todo = ({ onClick, text } = props) => (
    <li onClick={onClick}>
        {text}
    </li>
)

export default Todo
