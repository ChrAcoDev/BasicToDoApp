import { FC } from "react";
import useAppDispatch from "../hooks/useAppDispatch";
import { storeActions } from "../data";
import classes from './styles/Todo.module.css';

const Todo: FC<{
    id: number,
    text: string,
    isCompleted: boolean,
}> = (props) => {
    const dispatch = useAppDispatch();
    const onClickDeleteHandler = () => {
        dispatch(storeActions.remove(props.id));
    }

    const onClickCompleteHandler = () => {
        dispatch(storeActions.complete(props.id));
    }

    return (<>
        <p className={`${classes.text} ${props.isCompleted ? classes.completedTask : ''}`}>{props.text}</p>
        <div>
            <button className={`${classes.button} ${props.isCompleted ? classes.buttonUndo : classes.buttonComplete}`} onClick={onClickCompleteHandler}>{props.isCompleted ? 'Undo' : 'Complete'}</button>
            <button className={`${classes.button} ${classes.buttonDelete}`} onClick={onClickDeleteHandler}>Delete</button>
        </div>
    </>);
}

export default Todo;