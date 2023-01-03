import { FC } from "react";

const Todo: FC<{
    id: number,
    text: string,
    isCompleted: boolean,
}> = (props) => {
    return (<>
        <p >{props.text}</p>
    </>);
}

export default Todo;