import React, {ChangeEvent, useState} from 'react';
import arrow from "../../img/arrow.svg";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {addTask} from "../../store/todolist-reducer";
import style from "./AddForm.module.scss"
import { Button } from '../universal/Button';

export const AddForm = () => {
    const dispatch: Dispatch = useDispatch()
    const [text, setText] = useState<string>("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.currentTarget.value)
    }

    // добавление таски + отчистка строки
    const addTaskHandler = ()=> {
        dispatch(addTask(text))
        setText("")
    }
    // добавление при нажажитии на Enter
    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // проверка на пустой инпут
        if(text.trim().length !== 0){
            if (e.key === 'Enter') {
                addTaskHandler();
            }
        }
    }

    const disabledHandler = text.trim().length === 0
    

    return (
        <div className={style.addForm}>
            <Button disabled={disabledHandler} callback={addTaskHandler}><img src={arrow} alt="arrow"/></Button>
            <input
                onChange={onChangeHandler}
                value={text}
                type="text"
                placeholder="What needs to be done?"
                onKeyDown={onKeyDownHandler}
            />
        </div>
    );
};

