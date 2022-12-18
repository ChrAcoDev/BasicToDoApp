import { FC, useState } from "react";
import classes from './styles/Todo.module.css';

const Todo: FC<{
    id: number,
    text: string,
    onDeleteTodo: (id: number) => void
}> = (props) => {

    const [isCompleted, setIsCompleted] = useState(false);

    const onClickDeleteHandler = () => {
        props.onDeleteTodo(props.id);
    }

    const onClickCompleteHandler = () => {
        setIsCompleted(!isCompleted);
    }

    return (<>
        <p className={`${classes.text} ${isCompleted ? classes.completedTask : ''}`}>{props.text}</p>
        <div>
            <button className={`${classes.button} ${isCompleted ? classes.buttonUndo : classes.buttonComplete}`} onClick={onClickCompleteHandler}>{isCompleted ? 'Undo' : 'Complete'}</button>
            <button className={`${classes.button} ${classes.buttonDelete}`} onClick={onClickDeleteHandler}>Delete</button>
        </div>
    </>);
}

export default Todo;