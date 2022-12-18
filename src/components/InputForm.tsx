import { FC, FormEvent, SyntheticEvent, useState } from "react";
import TodoClass from "../classes/Todo";
import Card from "./UI/Card";
import classes from './styles/InputForm.module.css';

const InputForm: FC<{
    onAddTodo: (todo: TodoClass) => void
}> = props => {
    const MAX_CHARACTERS = 2000;
    const [todoName, setTodoName] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const onTodoNameChangeHandler = (event: FormEvent<HTMLInputElement>) => {
        setTodoName(event.currentTarget.value);
    }

    const onSubmitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        if (todoName.trim().length > 0) {
            props.onAddTodo(new TodoClass(todoName));
            setTodoName("");
            setErrorMsg("");
        } else {
            setErrorMsg("Todo cannot be blank");
        }
    }

    return (<Card>
        <div className={classes.form}>
            <form onSubmit={onSubmitHandler}  >
                <label
                    htmlFor='todo'
                >To Do:</label> <br />
                <div className={classes.input}>
                    <input
                        className={classes.text}
                        type='text'
                        maxLength={MAX_CHARACTERS}
                        value={todoName}
                        id='todo'
                        name='todo'
                        onChange={onTodoNameChangeHandler}
                    />
                    <input
                        className={classes.submit}
                        type='submit'
                        value='Submit'
                    />
                </div>
            </form>
            <p id={classes.remainingChars}>Remaining characters: {MAX_CHARACTERS - todoName.length}</p>
            {errorMsg && <p className={classes.errorMsg}>{errorMsg}</p>}
        </div>
    </Card>);
}

export default InputForm;