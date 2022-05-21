import React from "react";
import {AddItemForm} from "./AddItemForm";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Test component',
    component: AddItemForm
}

const callback = action("Button 'add' was pressed inside the form" );

export const AddItemFormBase = ( ) => {
    return <AddItemForm addItem={callback}/>
}