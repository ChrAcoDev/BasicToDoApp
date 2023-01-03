import { FC, useState } from "react";
import TodoClass from "../classes/Todo";
import { storeActions } from "../data";
import useAppDispatch from "../hooks/useAppDispatch";
import classes from './styles/Todos.module.css';
import Todo from "./Todo";
import TodoHandler from "./TodoHandler";
import Button from "./UI/Button";
import Card from "./UI/Card";

const Todos: FC<{
    todoList: TodoClass[],
}> = props => {
    const dispatch = useAppDispatch();
    const [selectedTodoIDs, setSelectedTodoIDs] = useState<number[]>([]);

    const handleSelectedTodo = (id: number) => {
        if (selectedTodoIDs.includes(id)) {
            setSelectedTodoIDs(selectedTodoIDs.filter(selectedTodoID => selectedTodoID !== id));
        } else {
            setSelectedTodoIDs([...selectedTodoIDs, id]);
        }
    };

    const deleteSelectedTodos = () => {
        if (selectedTodoIDs.length > 0) {
            dispatch(storeActions.remove(selectedTodoIDs));
            setSelectedTodoIDs([]);
        }
    };

    const completeSelectedTodos = () => {
        if (selectedTodoIDs.length > 0) {
            dispatch(storeActions.complete(selectedTodoIDs));
        }
    };

    return <>
        <Card>
            <Button text="Delete" onClick={deleteSelectedTodos} />
            <Button text="Complete" onClick={completeSelectedTodos} />
        </Card>
        <TodoHandler />
        {props.todoList.length > 0 && <div className={classes.list}>
            {props.todoList.map((todo: TodoClass) => {
                return (<>
                    <div key={todo.id} className={classes.listItem}>
                        <Card>
                            <input type="checkbox" value={todo.id} onChange={() => { handleSelectedTodo(todo.id) }} />
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