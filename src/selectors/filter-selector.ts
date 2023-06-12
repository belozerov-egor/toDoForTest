import {RootStateType} from "../store/store";


export const FilterSelector = (state: RootStateType) => state.todos.filter
