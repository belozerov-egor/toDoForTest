import {RootStateType} from "../store/store";


export const NoIsDoneTasks = (state: RootStateType) => state.todos.tasks.filter(task=> !task.isDone).length
