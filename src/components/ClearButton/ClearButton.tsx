import { Dispatch } from "redux";
import { removeTask } from "../../store/todolist-reducer";
import { Button } from "../universal/Button";
import { useDispatch } from "react-redux";
import style from "./ClearButton.module.scss";
import { memo } from "react";

export const ClearButton = memo(() => {
  const dispatch: Dispatch = useDispatch();
  const ClearTasksHandler = () => {
    dispatch(removeTask());
  };
  return (
    <div className={style.block}>
      <Button callback={ClearTasksHandler} name={"Clear completed"} />
    </div>
  );
});
