import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = "All" | "Completed" | "Active"

function App() {


    let [tasks, setTasks] = useState([
        {id: v1(), title: "Css", isDone: true},
        {id: v1(), title: "Js", isDone: true},
        {id: v1(), title: "React", isDone: false}
    ])
    let [filter, setFilter] = useState<FilterValuesType>('All')

    function removeTask(id: string) {
        tasks = tasks.filter(t => t.id !== id)
        setTasks(tasks)
    }

    function addTask(title: string) {
        let newTask = {
            id: v1(),
            title: title,
            isDone: false
        }
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

    function changeFilter(value: FilterValuesType) {
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
                addTask={addTask}
            />

        </div>
    );
}

export default App;
