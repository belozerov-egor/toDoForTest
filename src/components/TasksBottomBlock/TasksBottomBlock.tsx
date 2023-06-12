import { useAppSelector } from "../../hook/hook";
import { ButtonFilterBlock } from "../ButtonFilterBlock/ButtonFilterBlock";
import { NoIsDoneTasks } from "../../selectors/noIsDoneTasks-selector";
import style from "./TasksBottomBlock.module.scss";
import { ClearButton } from "../ClearButton/ClearButton";

export const TasksBottomBlock = () => {
  const noIsDoneTasks = useAppSelector(NoIsDoneTasks);

  return (
    <div className={style.block}>
      <span>{noIsDoneTasks} items left</span>
      <ButtonFilterBlock />
      <ClearButton />
    </div>
  );
};
