import {useAppSelector} from "../../hook/hook";
import {TodolistSelector} from "../../selectors/todolist-selector";
import {Tasks} from "../Tasks/Tasks";
import {AddForm} from "../AddForm/AddForm";
import style from "./Todolist.module.scss"
import { TasksBottomBlock } from "../TasksBottomBlock/TasksBottomBlock";


export const Todolist = () => {
    const todos = useAppSelector(TodolistSelector);
    
    return (
        <div className={style.todo}>
            <h1>{todos.title}</h1>
           <div className={style.tasks}>
            <AddForm/>
                <div>
                    <Tasks filter={todos.filter} />
                   <TasksBottomBlock/>
                </div>
                </div>
        </div>
    );
};
