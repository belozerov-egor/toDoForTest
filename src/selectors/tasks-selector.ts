import {RootStateType} from "../store/store";


export const TasksSelector = (state: RootStateType) => state.todos.tasks
