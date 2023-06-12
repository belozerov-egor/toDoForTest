import {useAppSelector} from "../../hook/hook";
import {ChangeEvent, FC, memo} from "react";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {checkTask} from "../../store/todolist-reducer";
import style from "./Task.module.scss"


type PropsType = {
    taskId: string
}
export const Task: FC<PropsType> = memo(({taskId}) => {
    // получение из стейта 1 таски
    const task = useAppSelector(state=> state.todos.tasks.find(task=> task.id === taskId))!
    const dispatch: Dispatch = useDispatch()

    // изменение чекбокса
    const checkHandler = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(checkTask(taskId, e.currentTarget.checked))
    }

    return (
        <div className={style.task}>
            <label>
                <input onChange={checkHandler} type="checkbox" checked={task.isDone}/>
            </label>
            <span className={task.isDone ? style.isDone : ""}>{task.title}</span>
        </div>
    )
})
