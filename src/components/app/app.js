import React from "react";
import NewTaskForm from "../NewTaskForm";
import AppMain from "../app-main";

import './app.css'

const App = () => {
    const todosData = [
        {
            id: '1',
            status: 'completed',
            createdTime: 'created 17 seconds ago'
        },
        {
            id: '2',
            status: 'editing',
            createdTime: 'created 5 minutes ago'
        },
        {
            id: '3',
            status: 'Active',
            createdTime: 'created 5 minutes ago'
        }
    ];

    return (
        <section className = 'todoapp'>
            <NewTaskForm />
            <AppMain todos = {todosData}/>
        </section>
    );
}

export default App;