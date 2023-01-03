import { FC } from "react";
import classes from './styles/Todo.module.css';

const Todo: FC<{
    id: number,
    text: string,
    isCompleted: boolean,
}> = (props) => {
    return (<>
        <p className={`${classes.text} ${props.isCompleted ? classes.completedTask : ''}`}>{props.text}</p>
    </>);
}

export default Todo;