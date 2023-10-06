import React from "react";
import Task from '../Task'

import './task-list.css'

const TodoList = ({ todos }) => {
    const todoList = todos.map(todo => {
        const {id, status, time} = todo;
        
        return (
            <li key = {id }
                className={status}>
                <Task meta = { todo }/>
            </li>
        );
    });

    return (
        <ul className="todo-list">
            { todoList }
        </ul>
    );
}

export default TodoList;