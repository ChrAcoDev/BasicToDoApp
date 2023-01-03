import { FC, useState } from "react";
import Form from "react-bootstrap/Form";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from "./UI/Button";
import Card from "./UI/Card";

import TodoClass from "../classes/Todo";
import { storeActions } from "../data";
import useAppDispatch from "../hooks/useAppDispatch";

import Todo from "./Todo";

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

    const completeSelectedTodo = (id: number) => {
        dispatch(storeActions.complete(id));

    };

    const handleDeleteAll = () => {
        dispatch(storeActions.removeAll());
        setSelectedTodoIDs([]);
    }

    const handleCompleteAll = () => {
        dispatch(storeActions.completeAll());
    }

    return <>
        <Card >
            <Button text="Complete All" variant="primary" onClick={handleCompleteAll} />
            {(selectedTodoIDs.length > 0) && <Button text="Delete" variant="danger" onClick={deleteSelectedTodos} />}
            {(selectedTodoIDs.length > 0) && <Button text='Delete All' variant="danger" onClick={handleDeleteAll} />}
        </Card>
        {props.todoList.length > 0 &&
            props.todoList.map((todo: TodoClass) => {
                return (<>
                    <Card>
                        <Row>
                            <Col sm={1}>
                                <Form.Check
                                    inline
                                    type='checkbox'
                                    onChange={() => { handleSelectedTodo(todo.id) }}
                                />
                            </Col>
                            <Col sm={11}>
                                <div onClick={() => { completeSelectedTodo(todo.id) }}>
                                    <Todo
                                        id={todo.id}
                                        text={todo.text}
                                        isCompleted={todo.isCompleted}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </>);
            })
        }
        {props.todoList.length === 0 && <Card> <p>There is nothing to do. :3</p></Card>}
    </>;
}

export default Todos;