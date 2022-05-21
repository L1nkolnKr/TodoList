import {EditableSpan} from "./EditableSpan";
import {action} from "@storybook/addon-actions";
import AppWithRedux from "./AppWithRedux";
import { Provider } from "react-redux";
import {store} from "./state/store";
import {ReduxStoreProviderDecorator} from "./stories/ReduxStoreProviderDecorator";


export default {
    title: "AppWithRedux Component",
    component: AppWithRedux,
    decorator: [ReduxStoreProviderDecorator]
}



export const AppWithReduxBaseExample = () => {
    return <AppWithRedux/>
}