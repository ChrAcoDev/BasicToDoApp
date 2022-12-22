import { FC } from "react";
import useAppDispatch from "../hooks/useAppDispatch";
import { storeActions } from "../data";
import Card from "./UI/Card";

const TodoHandler: FC<{
}> = () => {
    const dispatch = useAppDispatch();

    const handleDeleteAll = () => {
        dispatch(storeActions.removeAll());
    }

    return (<Card>
        <button onClick={handleDeleteAll}>Delete All</button>
    </Card>);
}

export default TodoHandler;