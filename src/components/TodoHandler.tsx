import { FC } from "react";
import useAppDispatch from "../hooks/useAppDispatch";
import { storeActions } from "../data";
import Card from "./UI/Card";
import Button from "./UI/Button";

const TodoHandler: FC<{
}> = () => {
    const dispatch = useAppDispatch();

    const handleDeleteAll = () => {
        dispatch(storeActions.removeAll());
    }

    return (<Card>
        <Button onClick={handleDeleteAll} text='Delete All' />
    </Card>);
}

export default TodoHandler;