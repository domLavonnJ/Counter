import { CounterAction } from "./actions";


const addItem = () => {
    return {
        type: CounterAction.AddItem
    }
}


const subItem = () => {
    return {
        type: CounterAction.SubItem
    }
}

export { addItem, subItem }