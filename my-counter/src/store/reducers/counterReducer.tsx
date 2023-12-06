import { CounterAction } from "../actions/actions";

const initialState = {
    count: 0
}

const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CounterAction.AddItem:
            return {
                ...state,
                count: state.count + 1
            }
        case CounterAction.SubItem:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}

export default counterReducer