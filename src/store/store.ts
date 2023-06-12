import {combineReducers, legacy_createStore as createStore} from "redux";
import {todolistReducer} from "./todolist-reducer";

const RootReducers = combineReducers({
    todos: todolistReducer,

})



export const store = createStore(RootReducers)

export type RootStateType = ReturnType<typeof RootReducers>
export type RootState =ReturnType<typeof store.getState>


// @ts-ignore
window.store = store
