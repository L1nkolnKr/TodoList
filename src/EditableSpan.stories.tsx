import {EditableSpan} from "./EditableSpan";
import {action} from "@storybook/addon-actions";


export default {
    title: "EditableSpan Component",
    component: EditableSpan
}

const changeCallback = action("Value change")

export const EditableSpanBaseExample = () => {
    return <EditableSpan value={"Start value"} onChange={changeCallback}/>
}