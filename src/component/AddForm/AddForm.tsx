import React, {ChangeEvent, useState} from 'react';
import arrow from "../../img/arrow.svg";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {addTask} from "../../store/todolist-reducer";
import style from "./AddForm.module.scss"

export const AddForm = () => {
    const dispatch: Dispatch = useDispatch()
    const [text, setText] = useState<string>("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.currentTarget.value)
    }

    const addTaskHandler = ()=> {
        dispatch(addTask(text))
        setText("")
    }
    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(text.trim().length !== 0){
            if (e.key === 'Enter') {
                addTaskHandler();
            }
        }
      
    }

    return (
        <div className={style.addForm}>
            <button disabled={text.trim().length === 0} onClick={addTaskHandler}><img src={arrow} alt="arrow"/></button>
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

