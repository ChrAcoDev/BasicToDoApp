import { ChangeEvent, FC, SyntheticEvent, useState } from "react";

import Card from "./UI/Card";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import { storeActions } from '../data/index';

import TodoClass from "../classes/Todo";

import useAppDispatch from "../hooks/useAppDispatch";
import CONSTANTS from "../CONSTANTS/APP_CONSTANTS";


const InputForm: FC<{}> = () => {
    const dispatch = useAppDispatch();
    const [todoName, setTodoName] = useState("");
    const [errorMsg, setErrorMsg] = useState("");


    const onTodoNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTodoName(event.target.value);
    }

    const onSubmitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        if (todoName.trim().length > 0) {
            dispatch(storeActions.add(new TodoClass(todoName)));
            setTodoName("");
            setErrorMsg("")
        } else {
            setErrorMsg("To Do cannot be blank");
        }
    }

    const handleCloseAlert = () => {
        setErrorMsg("")
    };

    return (<Card>
        {errorMsg && <Alert variant="danger" onClose={handleCloseAlert} dismissible>
            <p>{errorMsg}</p>
        </Alert>}
        <Form onSubmit={onSubmitHandler}>
            <Form.Group controlId="validationCustom01">
                <Form.Label>To Do:</Form.Label>
                <Form.Control
                    type="text"
                    value={todoName}
                    placeholder="What do you need to do?"
                    maxLength={CONSTANTS.MAX_CHARACTERS}
                    onChange={onTodoNameChangeHandler}
                />
                <Form.Text >
                    Remaining characters: {CONSTANTS.MAX_CHARACTERS - todoName.length}
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Card>);
}

export default InputForm;