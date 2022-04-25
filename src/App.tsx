import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type FilterValuesType = "All" | "Completed" | "Active"

function App() {


    let [tasks, setTasks] = useState([
        {id: 1, title: "Css", isDone: true},
        {id: 2, title: "Js", isDone: true},
        {id: 3, title: "React", isDone: false}
    ])
    let [filter, setFilter] = useState<FilterValuesType>('All')

    function removeTask(id: number) {
        tasks = tasks.filter(t => t.id !== id)
        setTasks(tasks)
    }

    function changeFilter (value:FilterValuesType){
        setFilter(value)
    }


    let tasksForTodoList = tasks;
    if (filter === "Completed") {
        tasksForTodoList = tasks.filter(t => t.isDone === true)
    }
    if (filter === "Active") {
        tasksForTodoList = tasks.filter(t => t.isDone === false)
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasksForTodoList}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />

        </div>
    );
}

export default App;
