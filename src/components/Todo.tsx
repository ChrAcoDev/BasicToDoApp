import { FC } from "react";

const Todo: FC<{
    id: number,
    text: string,
    isCompleted: boolean,
}> = (props) => {
    return (<>
        <p style={props.isCompleted ? { textDecoration: "line-through" } : {}}>
            {props.text}
        </p>
    </>);
}

export default Todo;