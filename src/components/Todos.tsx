import { FC } from "react";
import TodoClass from "../classes/Todo";
import classes from './styles/Todos.module.css';
import Todo from "./Todo";
import Card from "./UI/Card";

const Todos: FC<{
    todoList: TodoClass[],
}> = props => {
    return <>
        {props.todoList.length > 0 && <div className={classes.list}>
            {props.todoList.map((todo: TodoClass) => {
                return (<>
                    <div key={todo.id} className={classes.listItem}>
                        <Card>
                            <Todo
                                id={todo.id}
                                text={todo.text}
                                isCompleted={todo.isCompleted}
                            />
                        </Card>
                    </div>
                </>);
            })}
        </div>}
        {props.todoList.length === 0 && <Card> <p>There is nothing to do. :3</p></Card>}
    </>;
}

export default Todos;