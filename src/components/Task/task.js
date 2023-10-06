import React from "react";

import './task.css'

const Task = ({ meta }) => {

    const {id, status, createdTime} = meta;

    const description = `${status} task`;
    return (
        <>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>
                <span className="description">{ description }</span>
                <span className="created">{ createdTime }</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
            <input type="text" className="edit" defaultValue="Editing task" />
        </>
    );
}

export default Task;