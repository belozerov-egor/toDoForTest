import { Button } from "../universal/Button";
import { filteredTasks } from "../../store/todolist-reducer";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import style from "./ButtonFilterBlock.module.scss";
import { useAppSelector } from "../../hook/hook";
import { FilterSelector } from "../../selectors/filter-selector";
import { memo } from "react";

export const ButtonFilterBlock = memo(() => {
  const filter = useAppSelector(FilterSelector);
  const dispatch: Dispatch = useDispatch();

  const filteredAllHandler = () => {
    dispatch(filteredTasks("all"));
  };
  const filteredActiveHandler = () => {
    dispatch(filteredTasks("active"));
  };
  const filteredCompletedHandler = () => {
    dispatch(filteredTasks("completed"));
  };
  return (
    <div className={style.block}>
      <div className={style.buttonBlock}>
        <div className={filter === "all" ? style.active : ""}>
          <Button callback={filteredAllHandler} name={"ALL"} />
        </div>
        <div className={filter === "active" ? style.active : ""}>
          <Button callback={filteredActiveHandler} name={"ACTIVE"} />
        </div>
        <div className={filter === "completed" ? style.active : ""}>
          <Button callback={filteredCompletedHandler} name={"COMPLETED"} />
        </div>
      </div>
    </div>
  );
});
