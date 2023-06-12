import {v1} from "uuid";

export type FilterType = "all" | "completed" | "active"
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type InitialStateType = {
    title: string
    tasks: TaskType[],
    filter: FilterType
}


const initialState: InitialStateType = {
    title: "todos",
    tasks: [{id: v1(), title: "Тестовое задание", isDone: false},
        {id: v1(), title: "Прекрасный код", isDone: true},
        {id: v1(), title: "Покрытие тестами", isDone: false}],
    filter: "all"
}

export const todolistReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-TASK": {
            const newTask: TaskType = {id: v1(), title: action.payload.title, isDone: false}
            return {...state, tasks: [newTask, ...state.tasks]}
        }
        case "CHECK-TASK": {
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    return (
                        task.id === action.payload.id
                            ? {...task, isDone: action.payload.check}
                            : task
                    )
                })
            }
        }
        case "REMOVE-TASK": {
            return {...state, tasks: state.tasks.filter(task => !task.isDone)}
        }case "FILTERED-TASKS": {
            return {...state, filter: action.payload.value}
        }
        default:
            return state
    }
}
type ActionType = ReturnType<typeof addTask>
    | ReturnType<typeof removeTask>
    | ReturnType<typeof checkTask>
    | ReturnType<typeof filteredTasks>

// добавление таски
export const addTask = (title: string) => {
    return {
        type: 'ADD-TASK',
        payload: {
            title
        }
    } as const
}
// удаление тасок
export const removeTask = () => {
    return {
        type: "REMOVE-TASK",

    } as const
}
// изменение чекбокса
export const checkTask = (id: string, check: boolean) => {
    return {
        type: "CHECK-TASK",
        payload: {
            id,
            check
        }
    } as const
}
// изменение фильтра
export const filteredTasks = (value: FilterType)=> {
    return{
        type: "FILTERED-TASKS",
        payload: {
            value
        }
    }as const
}
