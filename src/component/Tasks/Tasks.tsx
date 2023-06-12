import { useAppSelector } from "../../hook/hook";
import { TasksSelector } from "../../selectors/tasks-selector";
import { FilterType } from "../../store/todolist-reducer";
import { FC, memo } from "react";
import { Task } from "../Task/Task";
import style from "./Tasks.module.scss";

type PropsType = {
  filter: FilterType;
};

export const Tasks: FC<PropsType> = ({ filter }) => {
  const tasks = useAppSelector(TasksSelector);


  // фильтрация массива
  const filteredTasks = () => {
    const allTasks = tasks;

    return filter === "active"
      ? allTasks.filter((task) => !task.isDone)
      : filter === "completed"
      ? allTasks.filter((task) => task.isDone)
      : allTasks;
  };

  const tasksAfterFilter = filteredTasks();

  const tasksItem = tasksAfterFilter.map((task) => {
    return <Task key={task.id} taskId={task.id} />;
  });
  return <div className={style.tasks}>{tasksItem}</div>;
};
