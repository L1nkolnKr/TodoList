import {Task} from "./Task";
import React from "react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Task Component',
    component: Task
}

const changeTaskStatusCallback = action("Status changed")
const changeTaskTitleCallback = action("Title changed")
const removeTaskCallback = action("task removed")

export const TaskBaseExample = () => {
    return <>
        <Task
            task={{id: '1', isDone: true, title: 'CSS'}}
            removeTask={removeTaskCallback}
            changeTaskStatus={changeTaskStatusCallback}
            changeTaskTitle={changeTaskTitleCallback}
            todolistId={"todolistId1"}/>
        <Task
            task={{id: '1', isDone: false, title: 'JS'}}
            removeTask={removeTaskCallback}
            changeTaskStatus={changeTaskStatusCallback}
            changeTaskTitle={changeTaskTitleCallback}
            todolistId={"todolistId2"}/>
    </>
}