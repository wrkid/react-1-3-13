import React from "react";
import TaskList from "../TaskList";
import AppFooter from '../Footer'

const AppMain = ({ todos }) => {
    return (
        <section className="main">
            <TaskList todos = { todos }/>
            <AppFooter />
        </section>
    );
}

export default AppMain;